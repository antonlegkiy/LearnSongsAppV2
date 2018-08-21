import headerTmpl from './header.tmpl.html';

export default {
  templateUrl: headerTmpl,
  controllerAs: 'vm',
  controller: headerCtrl
}

function headerCtrl() {
  const vm = this;

  vm.brandName = 'Stub';
}