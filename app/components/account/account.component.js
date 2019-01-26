import template from './account.tmpl.html';
import './account.style.css';

const controller = ['$state', function ($state) {
  const vm = this;
  vm.title = $state.params.current;
}];

export const accountComponent = {
  template,
  controllerAs: 'vm',
  controller
};