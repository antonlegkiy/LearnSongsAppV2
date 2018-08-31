import controller from './main.controller';
import template from './main.tmpl.html';
import './main.style.css';

export default {
  template,
  bindings: { fullList: '=' },
  controllerAs: 'vm',
  controller
};