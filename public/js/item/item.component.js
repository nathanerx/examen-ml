(function () {
  'use strict';
  angular
    .module('item')
    .component('item', {
      bindings: {
        item: '<'
      },
      templateUrl: '/dist/template/item/item.html',
      controller: itemController
    });

  itemController.$inject = ['$sce'];
  
  function itemController($sce) {
    this.$onInit = function () {
    };

    this.$onChanges = function (changeObject) {
      if (changeObject.item && changeObject.item.currentValue) {
        this.item = changeObject.item.currentValue;
        if (this.item && this.item.description) {
          this.item.description = $sce.trustAsHtml(this.item.description);
        }
      }
    };
  }
})();