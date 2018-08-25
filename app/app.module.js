import angular from 'angular';

import routes from './app.routes';
import appMainList from './components/main/main.component'
import addSong from './components/add-song/add-song.component';
import appHeader from './components/header/header.component';
import appList from './components/list/list.component';
import appAbout from './components/about/about.component';

const app = angular.module('app', [ 'ngMaterial', 'ui.router' ]);

/*components*/
app.component('appMainList', appMainList);
app.component('addSong', addSong);
app.component('appHeader', appHeader);
app.component('appList', appList);
app.component('appAbout', appAbout);

/*routes*/
routes(app);