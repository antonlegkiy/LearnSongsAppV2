import controller from './song.controller';
import template from './song.tmpl.html';
import './song.style.css';

export const songComponent = {
  template,
  controllerAs: 'vm',
  controller
};