import template from './signup.tmpl.html';

const signupController = ['$mdDialog', '$scope', '$rootScope', '$state', 'account', function ($mdDialog, $scope, $rootScope, $state, account) {
  const vm = this;
  vm.passwordsNotEqual = false;
  vm.user = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    rePassword: ''
  };

  vm.onSignup = onSignup;
  vm.showLogin = showLogin;

  function onSignup(form) {
    vm.passwordsNotEqual = vm.user.password !== vm.user.rePassword;

    if (vm.passwordsNotEqual) {
      form.password.$invalid = form.rePassword.$invalid = true;
      return;
    }

    if (form.$invalid) {
      return;
    }

    account.userRegistration(vm.user).then(() => {
      $state.go('root.main-list');
    });
  }
  
  function showLogin() {
    $state.go('root.auth.login');
  }
}];

export const signupComponent = {
  template,
  controllerAs: 'vm',
  controller: signupController,
  bindings: {
    showSignup: '='
  }
};