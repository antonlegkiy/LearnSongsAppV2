import angular from 'angular';

import DialogController from './modal/modal.controller';
import template from './add-song.tmpl.html';
import dialogTemplate from './modal/modal.tmpl.html';
import './add-song.style.css';

export default {
  template,
  controllerAs: 'vm',
  controller: addSongCtrl
};

function addSongCtrl($mdDialog) {
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
}

