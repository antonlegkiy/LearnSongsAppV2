import DialogController from "./modal/modal.controller";
import dialogTemplate from "./modal/modal.tmpl.html";
import angular from "angular";

export default ['$mdDialog', function ($mdDialog) {
  const vm = this;

  vm.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      template: dialogTemplate,
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
        .then(function(answer) {
          vm.status = 'You said the information was "' + answer + '".';
        }, function() {
          vm.status = 'You cancelled the dialog.';
        });
  };
}];