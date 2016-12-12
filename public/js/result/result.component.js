(function () {
  'use strict';
  angular
    .module('result')
    .component('result', {
      bindings: {},
      templateUrl: '/dist/template/result/result.html',
      controller: resultController
    });

  resultController.$inject = ['resultService'];
  
  function resultController(resultService) {
    var self = this;
    this.$onInit = function () {
      resultService.getResults().then(
        function success(data) {
          self.items = data.data.items;
        }, function error(err) {
        console.log(err);
      });
    };
  }
})();