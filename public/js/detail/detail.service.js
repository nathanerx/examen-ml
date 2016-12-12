(function () {
  'use strict';
  angular
    .module('detail')
    .service('detailService', detailService);

  detailService.$inject = ['$http', '$location'];
  
  function detailService($http, $location) {
    this.getItem = function () {
      var path = $location.path().split('/');
      var item = path[path.length - 1];
      return $http.get('/api/items/' + item);
    };
  }
})();