(function () {
	'use strict';

	var controllerId = 'TrilingualController';

	angular.module('gsungrab')
		.controller(controllerId, [Trilingual]);

	function Trilingual(pdfDelegate) {
		var vm = this;

		vm.activate = activate;
    vm.pdfUrl = 'resources/kbtri.pdf';

		activate();

		function activate() {

		}
	}
})();
