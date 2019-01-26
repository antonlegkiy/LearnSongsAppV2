export default ['appService', '$scope', '$state', function (appService, $scope, $state) {
  const vm = this;

  vm.songList = [];
  vm.spinner = false;

  vm.$onInit = () => {
    loadSongList();
  };

  vm.onSelectedTab = (data) => {
    const songName = data.song.split(' ').join('_');
    $state.go('root.song', { name: songName, song: data });

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