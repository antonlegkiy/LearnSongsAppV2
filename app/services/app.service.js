export default function ($http, $q, $rootScope) {
  let songList = [{
    band: 'Interpol',
    song: 'Obstacle 1',
    link: 'https://www.911tabs.com/link/?6214176',
    tuning: 'Drop D',
    lastplayed: '2 weeks ago'
  },{
    band: 'Red Hot Chili Peppers',
    song: 'The Longest Wave',
    link: 'https://www.911tabs.com/link/?9244100',
    tuning: 'Standard',
    lastplayed: '1 weeks ago'
  }];
  return {
    getSongsList: function () {
      return $q.when(songList);
    },

    addNewSong: function (song) {
      songList.push(song);
      $rootScope.$emit('new-song-added');
    }
  };
};