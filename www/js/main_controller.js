(function () {
	'use strict';

	var controllerId = 'MainController';

	angular.module('gsungrab')
		.controller(controllerId, ['$timeout', 'pdfDelegate', Main]);

	function Main($timeout, pdfDelegate) {
		var vm = this;
    var pdfHandler = null;

    vm.currentPage = null;
    vm.pageCount = null;
    vm.forwardBtn = forwardBtn;
		vm.backBtn = backBtn;
    vm.zoomOutBtn = zoomOutBtn;
    vm.zoomInBtn = zoomInBtn;
    vm.activate = activate;

		activate();

		function activate() {
      pdfHandler = pdfDelegate.$getByHandle('my-pdf-container');

      //To give child controller time to load.
      $timeout(function () {
        vm.currentPage = pdfHandler.getCurrentPage();
        vm.pageCount = pdfHandler.getPageCount();
      }, 100);
		}

    function forwardBtn(){
      pdfHandler.next();
      vm.currentPage = pdfHandler.getCurrentPage();
      vm.pageCount = pdfHandler.getPageCount();
    }

    function backBtn(){
      pdfHandler.prev();
      vm.currentPage = pdfHandler.getCurrentPage();
      vm.pageCount = pdfHandler.getPageCount();
    }

    function zoomInBtn(){
      pdfHandler.zoomIn(0.1);
    }

    function zoomOutBtn(){
      pdfHandler.zoomOut(0.1);
    }
	}
})();
