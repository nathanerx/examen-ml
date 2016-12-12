(function () {
  'use strict';
  angular
    .module('detail')
    .component('detail', {
      bindings: {},
      templateUrl: '/dist/template/detail/detail.html',
      controller: detailController
    });

  detailController.$inject = ['detailService'];
  
  function detailController(detailService) {
    var self = this;
    this.$onInit = function () {
      detailService.getItem().then(
        function success(data) {
          self.item = data.data.item;
        }, function error(err) {
        console.log(err);
      });
    };
  }
})();