export default ['appService', '$scope', '$state', function (appService, $scope, $state) {
  const vm = this;

  vm.songList = [];
  vm.spinner = false;

  vm.$onInit = () => {
    loadSongList();
    localStorage.clear();
  };

  vm.onSelectedTab = (item) => {
    const songName = item.song.split(' ').join('-');
    localStorage.setItem('selected-song', JSON.stringify(item));
    $state.go('song', { name: songName });

  };

  function loadSongList() {
    vm.spinner = true;
    appService.getSongsList(vm.fullList).then((list) => {
      vm.songList = list;
      vm.spinner = false;
      $scope.$apply();
    });
  }
}];