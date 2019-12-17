function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function sum(arr) {
	const sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
}

function multiply(arr) {
	const result = 0
	for (let i = 0; i < arr.length; i++) {
		result *= arr[i];
	}
	return result;
}

function power(num, expo) {
	return num ** expo;
}

function factorial(num) {
	const fact = 0;
	for (let i = num; i > 0; i--) {
		fact += i;
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