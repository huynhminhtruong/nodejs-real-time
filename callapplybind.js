function a(firstName, lastName) {
	this.firstName = firstName
	this.lastName = lastName
}

function b(firstName, lastName) {
	this.firstName = firstName
	this.lastName = lastName
}

var getUserData = function(city, state) {
	var user = "Name: " + this.firstName + " " + this.lastName + " - City: " + city + " - State: " + state

	return user
}

var user_1 = new a('The', 'Rock')
var array_1 = ['HCM', 'HN']
var array_2 = ['HN', 'HCM']
var user_2 = new b('Vin', 'Diesel')
var firstName = 'John'
var lastName = 'Wick'

console.log(getUserData.call(user_1, 'HCM', 'HCM'))
console.log(getUserData.call(user_2, 'HN', 'HN'))
console.log(getUserData.apply(user_1, array_1))
console.log(getUserData.apply(user_2, array_2))
console.log(getUserData.bind(user_1)('HCM', 'US'))
console.log(getUserData.bind(user_2)('US', 'AUS'))
console.log(getUserData.bind(this)('AUS', 'UK'))