var myApp = angular.module('myApp', [])

myApp.controller('PersonController', function($scope){
	$scope.persons = [
		{ name: 'John', city: 'US' }, 
		{ name: 'James', city: 'UK' }, 
		{ name: 'Paul', city: 'AUS' }
	]
})