import angular from 'angular';

import appHeader from './components/header/header.component';
import appDir from './app.component';

const app = angular.module('app', [ 'ngMaterial' ]);

/*components*/
app.component('appHeader', appHeader);

/*directives*/
app.directive('appDir', appDir);