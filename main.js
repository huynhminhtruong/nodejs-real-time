var myApp = angular.module('myApp', [])

var controllers = {}

controllers.PersonController = ($scope) => {
	$scope.persons = [
		{ name: 'John', city: 'US' }, 
		{ name: 'James', city: 'UK' }, 
		{ name: 'Paul', city: 'AUS' }
	]
}

myApp.controller(controllers)