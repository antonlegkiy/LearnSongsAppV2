import moment from 'moment';

import { constants } from './../app.constants';

export default function ($http, $q, $rootScope) {
  var db = $rootScope.firebase.firestore();
  db.settings({timestampsInSnapshots: true});

  const dbCollection = db.collection(constants.DB_COLLECTION_NAME);
  let songList = [];

  return {
    getSongsList: function () {
      songList = [];
      return dbCollection.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let currentDoc = doc.data();
          currentDoc.lastplayed = moment(currentDoc.lastplayed.seconds * 1000).fromNow();
          songList.push(currentDoc);
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