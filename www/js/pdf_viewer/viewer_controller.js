(function () {
  'use strict';

  var controllerId = 'ViewerController';

  angular.module('gsungrab')
    .controller(controllerId, ['$scope', ViewerController]);

  function ViewerController($scope) {
    var vm = this;

    vm.isLoaded = null;
    vm.progress = null;
    vm.activate = activate;

    activate();

    function activate() {
      vm.isLoaded = false;
      vm.progress = 0;
      $scope.pdfUrl = 'resources/kbtri.pdf';
    }

    $scope.onLoad = function () {
      vm.isLoaded = true;
    }

    $scope.onProgress = function(progress) {
      // handle a progress bar
       vm.progress = progress.loaded / progress.total;
       vm.progress = vm.progress * 100;
       console.log(vm.progress);
    }
  }
})();
