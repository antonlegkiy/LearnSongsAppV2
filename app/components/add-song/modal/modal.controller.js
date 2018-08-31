import './modal.style.css';

export default ['$scope', '$mdDialog', 'appService', function ($scope, $mdDialog, appService) {
  $scope.newSong = {
    band: '',
    song: '',
    link: '',
    tuning: ''
  };

  $scope.onSaveTab = onSaveTab;
  $scope.cancel = cancel;

  function onSaveTab(form) {
    if (form.$valid) {
      appService.addNewSong($scope.newSong);
      $mdDialog.hide();
    }
  }

  function cancel() {
    $mdDialog.cancel();
  }
}];