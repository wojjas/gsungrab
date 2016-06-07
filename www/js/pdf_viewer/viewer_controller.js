(function () {
  'use strict';

  var controllerId = 'ViewerController';

  angular.module('starter')
    .controller(controllerId, ['$scope', ViewerController]);

  function ViewerController($scope) {
    var vm = this;

    vm.isLoaded = null;
    vm.activate = activate;

    activate();

    function activate() {
      vm.isLoaded = false;
      $scope.pdfUrl = 'resources/kbtri.pdf';
    }

    $scope.onLoad = function () {
      vm.isLoaded = true;
    }
  }
})();
