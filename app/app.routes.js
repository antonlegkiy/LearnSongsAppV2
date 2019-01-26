import template from './root.tmpl.html';

export const routes = ['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
  $stateProvider
      .state({
        name: 'root',
        url: '',
        abstract: true,
        template
      })
      .state({
        name: 'root.auth',
        abstract: true,
        url: '/auth',
        views: {
          'header': '',
          'content': {
            component: 'appAccount'
          }
        }
      })
      .state({
        name: 'root.auth.login',
        url: '/login',
        views: {
          '': {
            component: 'appLogin'
          }
        }
      })
      .state({
        name: 'root.auth.signup',
        url: '/signup',
        views: {
          '': {
            component: 'appSignup'
          }
        }
      })
      .state({
        name: 'root.main-list',
        url: '/main-list',
        views: {
          'header': {
            component: 'appHeader'
          },
          'content': {
            component: 'appMainList'
          }
        },
        resolve: {
          fullList: function () {
            return false;
          }
        }
      })
      .state({
        name: 'root.song',
        url: '/:name',
        params: {
          name: '',
          song: {}
        },
        views: {
          'header': {
            component: 'appHeader',
          },
          'content': {
            component: 'songContent'
          }
        }
      })
      .state({
        name: 'root.list',
        url: '/list',
        views: {
          'header': {
            component: 'appHeader'
          },
          'content': {
            component: 'appMainList'
          }
        },
        resolve: {
          fullList: function () {
            return true;
          }
        }
      })
      .state({
        name: 'root.about',
        url: '/about',
        views: {
          'header': {
            component: 'appHeader'
          },
          'content': {
            component: 'appAbout'
          }
        }
      });
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');

    $urlRouterProvider.when('/', ['$match', '$state', function ($match, $state) {
      const user = localStorage.getItem('userdata');
      const isLoggedIn = user ? JSON.parse(user) : null;
      if (isLoggedIn && isLoggedIn.userid) {
        $state.transitionTo('root.main-list', $match, false);
      } else {
        $state.transitionTo('root.auth.login', $match, false);
      }
    }]);
}];