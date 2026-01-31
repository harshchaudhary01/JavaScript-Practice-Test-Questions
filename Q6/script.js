// Question Code with Hoisting Issue:

// console.log(a);
// console.log(b);
// var a = 10;
// let b = 20;
// function test() {
//   console.log(c);
//   var c = 30;
// }
// test();

// Corrected Code:
var a = 10;
let b = 20;
console.log(a);
console.log(b);
function test() {
  var c = 30;
  console.log(c);
}