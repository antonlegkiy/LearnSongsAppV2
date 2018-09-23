import moment from 'moment';
import angular from 'angular';

import { constants } from './../app.constants';

export default ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
  const db = $rootScope.firebase.firestore();
  db.settings({timestampsInSnapshots: true});
  const dbCollection = db.collection(constants.DB_COLLECTION_NAME);
  const today = moment();
  let songList = [];

  const compareDates = (date) => {
    const lastPlayedDate = moment(date * 1000);

    return today.diff(lastPlayedDate, 'days');
  };

  const markOldSongsWithColor = (songs) => {
    songs.forEach((song, key, obj) => {
      let diff = compareDates(song.lastplayed.seconds);

      if (diff > 30) {
        obj[key].mark = 'red-A100';
      } else if (diff > 14) {
        obj[key].mark = 'yellow-A100';
      } else if (diff > 7) {
        obj[key].mark = 'light-green-A100';
      }
    });

    return songs;
  };

  const hideSongsWithoutMarks = (songs) => {
    return songs.filter(song => song.mark);
  };

  return {
    getSongsList: function (all) {
      songList = [];
      return dbCollection.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let song = doc.data();
          songList.push({...song, id: doc.id});
        });

        markOldSongsWithColor(songList).forEach((song, key, obj) => {
          obj[key].lastplayed = moment(song.lastplayed.seconds * 1000).fromNow();
        });

        if (all) {
          return songList;
        } else {
          return hideSongsWithoutMarks(songList);
        }
      }).catch((error) => {
        console.error('error while get data from firebase', error);
      });
    },

    addNewSong: function (song) {
      const songData = {...song, lastplayed: new Date()};
      songList.push(song);

      dbCollection.add(songData)
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    },
    
    removeSong: function (id) {
      dbCollection.doc(id).delete().then(() => {
        console.log('song was removed successfully');
      }).catch((e) => {
        console.error('error while removing song', e);
      });
    },
    
    updateSongDate: function (id) {
      return dbCollection.doc(id).update({
        lastplayed: new Date()
      }).then(() => {
        console.log('song was updated');
        return null;
      }).catch((e) => {
        console.log('song was not updated, cause', e);
        return null;
      });
    }
  };
}];