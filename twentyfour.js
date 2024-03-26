"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//  If you want to try more comparisons, write more tests.
//   Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// create two variable
let string1 = 'Rehan';
let string2 = 'Shah';
// Tests for equality and inequality with strings
console.log("Is string1 equal to 'Rehan'? I predict True.");
console.log(string1 === 'Rehan');
console.log("Is string1 not equal to string2? I predict True.");
console.log(string1 === string2);
// Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to
// create two more variable
let numm1 = 10;
let numm2 = 20;
console.log("Is numm1 equal to 10? I predict True.");
console.log(numm1 === 10);
console.log("Is numm1 equal to numm2? I predict True.");
console.log(numm1 === numm2);
console.log("Is numm1 less than numm2? I predict True.");
console.log(numm1 < numm2);
console.log("Is numm1 greater than numm2? I predict True.");
console.log(numm1 > numm2);
console.log("Is numm2 less than or equal to 20? I predict True.");
console.log(numm2 <= 20);
console.log("Is numm1 greater than or equal to 20? I predict True.");
console.log(numm1 >= 20);
// Tests using "and" and "or" operators
// create  another two variable
let bool1 = true;
let bool2 = false;
console.log("Is bool1 true and bool2 false? I predict False.");
console.log(bool1 && bool2);
console.log("Is bool1 true or bool2 false? I predict True.");
console.log(bool1 || bool2);
// Test when an item is in an array
// create an array
let array = [1, 2, 3, 4, 5];
console.log("Is 3 in the array? I predict True.");
console.log(array.includes(3));
// Test when an item is not in an array
console.log("Is 8 not in the array? I predict false.");
console.log(array.includes(8));
