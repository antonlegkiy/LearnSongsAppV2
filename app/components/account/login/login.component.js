import template from './login.tmpl.html';

const loginController = ['account', '$scope', '$mdDialog', '$rootScope', '$state', function (account, $scope, $mdDialog, $rootScope, $state) {
  const vm = this;

  vm.showLogin = true;
  vm.user = {
    email: '',
    password: ''
  };

  vm.onLogin = onLogin;
  vm.showRegister = showRegister;

  function onLogin(form) {
    if (form.$invalid) {
      return;
    }

    account.userLogin(vm.user).then((result) => {
      $state.go('root.main-list');
    });
  }

  function showRegister() {
    $state.go('root.auth.signup');
  }
}];

export const loginComponent = {
  template,
  controllerAs: 'vm',
  controller: loginController,
  bindings: {
    showLogin: '='
  }
};