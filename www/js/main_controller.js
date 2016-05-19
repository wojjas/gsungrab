(function () {
	'use strict';

	var controllerId = 'MainController';

	angular.module('gsungrab')
		.controller(controllerId, ['$scope', 'pdfDelegate', Main]);

	function Main($scope, pdfDelegate) {
		var vm = this;
    var pdfHandler = null;

    vm.forwardBtn = forwardBtn;
		vm.backBtn = backBtn;
    vm.zoomOutBtn = zoomOutBtn;
    vm.zoomInBtn = zoomInBtn;
    vm.activate = activate;

		activate();

		function activate() {
      pdfHandler = pdfDelegate.$getByHandle('my-pdf-container');
		}

    function forwardBtn(){
      pdfHandler.next();
    }

    function backBtn(){
      pdfHandler.prev();
    }

    function zoomInBtn(){
      pdfHandler.zoomIn(0.1);
    }

    function zoomOutBtn(){
      pdfHandler.zoomOut(0.1);
    }
	}
})();
