import template from './main.tmpl.html';
import './main.style.css';

export default {
  template,
  controllerAs: 'vm',
  controller: mainPageListCtrl
};

function mainPageListCtrl($window) {
  const vm = this;

  vm.todos = [{
    band: 'Interpol',
    song: 'Obstacle 1',
    tabs: 'https://www.911tabs.com/link/?6214176',
    tunning: 'Drop D',
    lastplayed: '2 weeks ago'
  },{
    band: 'Red Hot Chili Peppers',
    song: 'The Longest Wave',
    tabs: 'https://www.911tabs.com/link/?9244100',
    tunning: 'Standard',
    lastplayed: '1 weeks ago'
  }];

  vm.onSelectedTab = (link) => {
    $window.open(link, '_blank');
  }
}