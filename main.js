var myApp = angular.module('myApp', ['ngRoute'])

var controllers = {}

myApp.config(($routeProvider) => {
	$routeProvider.when('/view1', {
		controller: 'PersonController', 
		templateUrl: 'view1.html'
	}).when('/view2', {
		controller: 'PersonController', 
		templateUrl: 'view2.html'
	}).otherwise({ redirectTo: '/view1' })
})

controllers.PersonController = ($scope) => {
	$scope.persons = [
		{ name: 'John', city: 'US' }, 
		{ name: 'James', city: 'UK' }, 
		{ name: 'Paul', city: 'AUS' }
	]

	$scope.addCustomer = () => {
		$scope.persons.push({
			name: $scope.newCustomer.name, 
			city: $scope.newCustomer.city
		})
	}
}

myApp.controller(controllers)