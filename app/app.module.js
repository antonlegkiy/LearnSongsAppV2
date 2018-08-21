import angular from 'angular';

import appHeader from './components/header/header.component';
import appDir from './app.component';

const app = angular.module('app', [  ]);

/*components*/
app.component('app-header', appHeader);

/*directives*/
app.directive('appDir', appDir);