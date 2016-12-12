(function () {
  'use strict';

  angular
    .module('App')
    .filter('currencySymbolFilter', currencySymbolFilter);

  function currencySymbolFilter() {
    return function (currencyName) {
      if (currencyName == 'ARS') {
        return '$';
      } else {
        return 'U$S';
      }
    };
  }
})();