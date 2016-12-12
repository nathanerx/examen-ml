(function () {
  'use strict';
  angular
    .module('cluster')
    .component('cluster', {
      bindings: {
        item: '<'
      },
      templateUrl: '/dist/template/cluster/cluster.html',
      controller: clusterController
    });

  function clusterController() {
    this.$onInit = function () {
    };
  }
})();