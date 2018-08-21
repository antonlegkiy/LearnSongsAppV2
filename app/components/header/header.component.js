import tmpl from './header.tmpl.html';

export default {
  template: tmpl,
  controllerAs: 'vm',
  controller: headerCtrl
}

function headerCtrl() {
  const vm = this;

  vm.brandName = 'Stub';
}