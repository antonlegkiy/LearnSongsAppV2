import template from './main.tmpl.html';
import './main.style.css';

export default {
  template,
  bindings: { fullList: '=' },
  controllerAs: 'vm',
  controller: mainPageListCtrl
};

function mainPageListCtrl($window, appService, $scope) {
  const vm = this;

  vm.songList = [];
  vm.spinner = false;

  vm.$onInit = function () {
    loadSongList();
  };

  vm.onSelectedTab = (link) => {
    $window.open(link, '_blank');
  };

  function loadSongList() {
    vm.spinner = true;
    appService.getSongsList(vm.fullList).then((list) => {
      vm.songList = list;
      vm.spinner = false;
      $scope.$apply();
    });
  }
}