function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function sum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
}

function multiply(arr) {
	let result = 1
	for (let i = 0; i < arr.length; i++) {
		result *= arr[i];
	}
	return result;
}

function power(num, expo) {
	return num ** expo;
}

function factorial(num) {
	let fact = 1;
	for (let i = num; i > 0; i--) {
		fact *= i;
	}

	return fact;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}