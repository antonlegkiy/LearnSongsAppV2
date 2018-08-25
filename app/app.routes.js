export default (app) => {
  app.config(function ($stateProvider, $locationProvider) {
    const homeState = {
      name: 'main',
      url: '/',
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
    };

    const listState = {
      name: 'list',
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
    };

    const aboutState = {
      name: 'about',
      url: '/about',
      views: {
        'header': {
          component: 'appHeader'
        },
        'content': {
          component: 'appAbout'
        }
      }
    };

    $stateProvider.state(homeState);
    $stateProvider.state(listState);
    $stateProvider.state(aboutState);

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
  });
};