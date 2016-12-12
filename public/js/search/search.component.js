(function () {
  'use strict';
  angular
    .module('search')
    .component('search', {
      bindings: {},
      templateUrl: '/dist/template/search/search.html',
      controller: searchController
    });

  searchController.$inject = ['$location'];

  function searchController($location) {
    this.$onInit = function () {
      if ($location.search().search) {
        this.search = $location.search().search;
      }
    };
  }
})();