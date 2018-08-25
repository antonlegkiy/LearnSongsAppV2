import angular from 'angular';

import routes from './app.routes';
import appService from './services/app.service';
import firebaseInit from './firebase.init.js';
import appMainList from './components/main/main.component'
import addSong from './components/add-song/add-song.component';
import appHeader from './components/header/header.component';
import appList from './components/list/list.component';
import appAbout from './components/about/about.component';
import appSpinner from './directive/spinner/spinner.directive';

const app = angular.module('app', [ 'ngMaterial', 'ui.router' ]);

/*config*/
app.run(firebaseInit);

/*services*/
app.service('appService', appService);

/*components*/
app.component('appMainList', appMainList);
app.component('addSong', addSong);
app.component('appHeader', appHeader);
app.component('appList', appList);
app.component('appAbout', appAbout);

/*directives*/
app.directive('spinner', appSpinner);

/*routes*/
routes(app);