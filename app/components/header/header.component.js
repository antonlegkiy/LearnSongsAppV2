import template from './header.tmpl.html';

export default {
  template,
  controllerAs: 'vm',
  controller: headerCtrl
}

function headerCtrl() {
  const vm = this;

  vm.brandName = 'Stub';
}