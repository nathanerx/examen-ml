(function () {
  'use strict';
  angular
    .module('breadcrumb')
    .component('breadcrumb', {
      bindings: {
        type: '@'
      },
      templateUrl: '/dist/template/breadcrumb/breadcrumb.html',
      controller: breadcrumbController
    });

  function breadcrumbController() {
    this.$onInit = function () {
    };
  }
})();