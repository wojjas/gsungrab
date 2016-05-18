(function () {
	'use strict';

	var controllerId = 'TrilingualController';

	angular.module('gsungrab')
		.controller(controllerId, [Trilingual]);

	function Trilingual() {
		var vm = this;

		vm.activate = activate;
		vm.title = 'trilingual_controller';

		activate();

		function activate() {
		}
	}
})();
