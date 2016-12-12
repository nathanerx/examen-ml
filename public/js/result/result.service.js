(function () {
  'use strict';
  angular
    .module('result')
    .service('resultService', resultService);

  resultService.$inject = ['$http', '$location'];

  function resultService($http, $location) {
    this.getResults = function () {
      var query = $location.search().search;
      return $http.get('/api/items?q=' + query);
    };
  }
})();