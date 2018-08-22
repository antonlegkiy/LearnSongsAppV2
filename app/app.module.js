import angular from 'angular';

import routes from './app.routes';
import appMain from './app.component';
import appHeader from './components/header/header.component';
import appList from './components/list/list.component';
import appAbout from './components/about/about.component';

const app = angular.module('app', [ 'ngMaterial', 'ui.router' ]);

/*components*/
app.component('appMain', appMain);
app.component('appHeader', appHeader);
app.component('appList', appList);
app.component('appAbout', appAbout);

/*routes*/
routes(app);