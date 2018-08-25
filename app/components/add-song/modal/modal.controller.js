import './modal.style.css';

export default function DialogController($scope, $mdDialog, appService) {
  $scope.newSong = {
    band: '',
    song: '',
    link: '',
    tuning: ''
  };

  $scope.onSaveTab = onSaveTab;
  $scope.cancel = cancel;

  function onSaveTab() {
    appService.addNewSong($scope.newSong);
    $mdDialog.hide();
  }

  function cancel() {
    $mdDialog.cancel();
  }
}