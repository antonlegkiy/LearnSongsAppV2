import angular from "angular";

export default ['appService', '$scope', function(appService, $scope) {
  const vm = this;
  vm.song = localStorage.getItem('selected-song');
  vm.isUpdated = false;
  vm.isPending = false;

  vm.updateSongStatus = updateSongStatus;

  vm.$onInit = () => {
    if (vm.song) {
      vm.song = JSON.parse(vm.song);
      const obj = angular.element('<object></object>').attr({
        data: vm.song.link,
        width: '1500px',
        height: '2000px'
      });

      document.querySelector('#frame-window').appendChild(obj[0]);
    }
  };

  function updateSongStatus() {
    vm.isPending = true;
    appService.updateSongDate(vm.song.id).then(() => {
      vm.isUpdated = true;
      vm.isPending = false;
      $scope.$apply();
    });
  }
}];