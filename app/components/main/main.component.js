import controller from './main.controller';
import template from './main.tmpl.html';
import './main.style.css';

export const mainViewComponent = {
  template,
  bindings: { fullList: '=' },
  controllerAs: 'vm',
  controller
};