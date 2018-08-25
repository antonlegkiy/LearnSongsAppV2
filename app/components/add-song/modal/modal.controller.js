import './modal.style.css';

export default function DialogController($scope, $mdDialog) {
  $scope.cancel = function() {
    $mdDialog.cancel();
  };

  $scope.onSaveTab = () => {
    alert(123)
  };
}