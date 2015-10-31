(function() {
	'use strict';

	angular
		.module('portfolio')
		.directive('pfProjectsList', pfProjectsList);

	function pfProjectsList() {
		var directive = {
			restrict: 'EA',
			templateUrl: 'projects/pf-projects-list.directive.html',
			scope: {
				type: '@type',
				amount: '@amount'
			},
			controller: ProjectsListController,
			controllerAs: 'vm',
			bindToController: true
		};

		return directive;
	}

	function ProjectsListController() {
		var projectList = [
			{
				'name': 'Love9',
				'description': 'Simple dating site with a 3x3 grid of profiles.',
				'type': 'software'
			},
			{
				'name': 'RatCycle',
				'description': 'Serious game that teaches children to recycle.',
				'type': 'software'
			},
			{
				'name': 'MediaButler',
				'description': 'Second screen experience for Trakt users.',
				'type': 'software'
			},
			{
				'name': 'InOffice Booking System',
				'description': 'Online booking system for InOffice.',
				'type': 'software'
			},
			{
				'name': 'Making of RatCycle',
				'description': 'Shows the process of making the game RatCycle.',
				'type': 'film'
			},
			{
				'name': 'Samenwerken Video',
				'description': 'Short on the subject of teamwork, more specificly: What we\'d learned.',
				'type': 'film'
			},
			{
				'name': 'The Outlines - Christmas Medley',
				'description': 'Christmas music video for the coverband The Outlines.',
				'type': 'film'
			}
		];

		var vm = this;
		vm.projects = filterProjects();

		/**
		 * Filters through the list of projects.
		 * @return {array} Filtered array of projects.
		 */
		function filterProjects() {
			var filterArray = projectList;

			if (vm.type) {
				filterArray = projectsOfType(filterArray, vm.type);
			}
			if (vm.amount) {
				filterArray = limitedProjects(filterArray, vm.amount);
			}

			return filterArray;
		}

		/**
		 * Filters projects, in an array, by type.
		 * @param  {array}  input  The array of projects.
		 * @param  {string} type The type of project.
		 * @return {array}       The filtered array of projects.
		 */
		function projectsOfType(input, type) {
			var returnArray = [];

			for (var i = 0; i < input.length; i++)
				if (input[i].type === type)
					returnArray.push(input[i]);

			return returnArray;
		}

		/**
		 * Limits the amount of projects in an array.
		 * @param  {array}  input  The array of projects.
		 * @param  {number} amount The desired amount of projects.
		 * @return {array}         The modified array of projects.
		 */
		function limitedProjects(input, amount) {
			return input.slice(0,amount);
		}
	}
})();