import angular from 'angular';
export const app = angular.module('app', [ 'ngMaterial', 'ui.router' ]);

import {routes} from './app.routes';
import firebaseInit from "./firebase.init";
import {appService} from './services/app.service';
import {accountService} from './components/account/account.service';
import spinner from './directive/spinner/spinner.directive';
import {aboutComponent} from './components/about/about.component';
import {accountComponent} from './components/account/account.component';
import {loginComponent} from './components/account/login/login.component';
import {signupComponent} from './components/account/signup/signup.component';
import {addSongComponent} from './components/add-song/add-song.component';
import {headerComponent} from './components/header/header.component';
import {mainViewComponent} from './components/main/main.component';
import {appOptionsComponent} from './components/main/app-options/app-options.component';
import {songComponent} from './components/song-content/song.component';

app.config(routes);
app.run(firebaseInit);
app.service('appService', appService);
app.service('account', accountService);
app.directive('spinner', spinner);
app.component('appAbout', aboutComponent);
app.component('appAccount', accountComponent);
app.component('appLogin', loginComponent);
app.component('appSignup', signupComponent);
app.component('addSong', addSongComponent);
app.component('appHeader', headerComponent);
app.component('appMainList', mainViewComponent);
app.component('appOptions', appOptionsComponent);
app.component('songContent', songComponent);