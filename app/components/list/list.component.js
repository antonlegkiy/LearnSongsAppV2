export default {
  template: '<div>{{ vm.list }}</div>',
  controllerAs: 'vm',
  controller: listCtrl
};

function listCtrl() {
  const vm = this;

  vm.list = 'LIST';
}