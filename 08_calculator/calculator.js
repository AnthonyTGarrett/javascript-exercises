const add = function(...args) {
	return args.reduce((acc, curr) => {
    return acc + curr;
  }, 0)
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(args) {
	return args.reduce((acc, curr) => {
    return acc + curr;
  }, 0)
};

const multiply = function(args) {
  return args.reduce((acc, curr) => {
    return acc * curr;
  }, 1)
};

const power = function(base,exp) {
	return Math.pow(base, exp)
};

const factorial = function(num) {
  if(num === 0) return 1;

  let sum = 1;
	for(let i = num; i > 0; i--) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
