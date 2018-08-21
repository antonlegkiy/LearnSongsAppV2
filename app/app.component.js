export default () => {
  return {
    restrict: 'E',
    scope: {},
    template: '<app-header></app-header>' +
        '<div><h1>{{vm.name}} {{ vm.lastname }}</h1></div>',
    controllerAs: 'vm',
    controller: appCtrl
  }
};

function appCtrl() {
  const vm = this;

  vm.name = 'John';
  vm.lastname = 'Doe';
  console.log('I\'m here!');
}