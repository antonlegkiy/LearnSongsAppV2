export default (app) => {
  app.config(function ($stateProvider) {
    const homeState = {
      name: 'main',
      url: '',
      views: {
        'header': {
          component: 'appHeader'
        },
        'content': {
          component: 'appMain'
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
          component: 'appList'
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
  });
};