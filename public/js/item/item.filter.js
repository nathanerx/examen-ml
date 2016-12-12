(function () {
  'use strict';
  angular
    .module('item')
    .filter('leftPadFilter', leftPadFilter)
    .filter('conditionFilter', conditionFilter);

  function leftPadFilter() {
    return function (n) {
      if (n < 10) {
        return '0'+n;
      } else {
        return n;
      }
    };
  }

  function conditionFilter() {
    return function (condition) {
      if (condition == 'new') {
        return 'nuevo';
      } else {
        return 'usado';
      }
    };
  }
})();