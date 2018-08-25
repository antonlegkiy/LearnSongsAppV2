import moment from 'moment';

import { constants } from './../app.constants';

export default function ($http, $q, $rootScope) {
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

  return {
    getSongsList: function () {
      songList = [];
      return dbCollection.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          songList.push(doc.data());
        });

        markOldSongsWithColor(songList).forEach((song, key, obj) => {
          obj[key].lastplayed = moment(song.lastplayed.seconds * 1000).fromNow();
        });

        return songList;
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
    
    removeSong: function (index) {
      
    }
  };
};