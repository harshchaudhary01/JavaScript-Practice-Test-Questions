// Problem statement 8: Predict Output and explain its output reason
sayHello();
function sayHello() {
  console.log("Hello");
}
sayHi();
var sayHi = function () {
  console.log("Hi");
};

// Output:
// Hello
// TypeError: sayHi is not a function
// Explanation:
// In JavaScript, function declarations are hoisted to the top of their scope, 
// which means that the function `sayHello` is available before its definition in the code. 
// Therefore, calling `sayHello()` works and prints "Hello".

// However, variable declarations using `var` are also hoisted, but their assignments are not. 
// This means that `sayHi` is hoisted as a variable with an initial value of `undefined`. 
// When we try to call `sayHi()` before it has been assigned a function, it results in a TypeError 
// because we are attempting to call `undefined` as if it were a function.