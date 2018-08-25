import template from './main.tmpl.html';
import './main.style.css';

export default {
  template,
  controllerAs: 'vm',
  controller: mainPageListCtrl
};

function mainPageListCtrl($window, appService, $rootScope) {
  const vm = this;

  vm.songList = [];

  vm.$onInit = function () {
    loadSongList();
  };

  vm.onSelectedTab = (link) => {
    $window.open(link, '_blank');
  };

  $rootScope.$on('new-song-added', () => {
    loadSongList();
  });

  function loadSongList() {
    appService.getSongsList().then((list) => {
      vm.songList = list;
    });
  }
}