(function () {
  angular
    .module('App', ['search', 'breadcrumb', 'result', 'detail'])
    .config(appConfig);

  appConfig.$inject = ['$locationProvider'];
  
  function appConfig($locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    }).hashPrefix('!');
  }
})();