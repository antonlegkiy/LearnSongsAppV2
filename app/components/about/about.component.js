export default {
  template: '<div>{{ vm.about }}</div>',
  controllerAs: 'vm',
  controller: aboutCtrl
};

function aboutCtrl() {
  const vm = this;

  vm.about = 'ABOUT';
}