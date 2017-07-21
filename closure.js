function checkNumber() {
	var number = 0;

	function increaseNumber() {
		// number++;
		console.log(number);
	}

	number++;

	return increaseNumber;
}

function sayHello() {
	var say = function() {
		console.log(hello);
	}

	var hello = 'hello';

	return say;
}

var hello = sayHello();

hello();