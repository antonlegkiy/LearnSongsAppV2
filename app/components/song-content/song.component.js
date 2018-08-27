import angular from 'angular';

import template from './song.tmpl.html';
import './song.style.css';

export default {
  template,
  controllerAs: 'vm',
  controller: songCtrl
};

function songCtrl() {
  const vm = this;
  vm.song = localStorage.getItem('selected-song');

  if (vm.song) {
    vm.song = JSON.parse(vm.song);
  }

  (function(src) {
    const obj = angular.element('<object></object>').attr({
      data: src,
      width: '1500px',
      height: '2000px'
    });

    document.querySelector('#frame-window').appendChild(obj[0]);
  })(vm.song.link);
}