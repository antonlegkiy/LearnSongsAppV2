import template from './main.tmpl.html';
import './main.style.css';

export default {
  template,
  bindings: { fullList: '=' },
  controllerAs: 'vm',
  controller: mainPageListCtrl
};

function mainPageListCtrl($window, appService, $scope, $state, $rootScope) {
  const vm = this;

  vm.songList = [];
  vm.spinner = false;

  vm.$onInit = function () {
    loadSongList();
  };

  vm.onSelectedTab = (item) => {
    appService.updateSongDate(item.id, vm.fullList).then((result) => {
      if (result) {
        vm.songList = result;
        $scope.$apply();
      }
    });
    // $window.open(link, '_blank');
    const songName = item.song.split(' ').join('-');
    localStorage.setItem('selected-song', JSON.stringify(item));
    $state.go('song', { name: songName });
  };

  localStorage.clear();

  function loadSongList() {
    vm.spinner = true;
    appService.getSongsList(vm.fullList).then((list) => {
      vm.songList = list;
      vm.spinner = false;
      $scope.$apply();
    });
  }
}