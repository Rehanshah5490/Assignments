"use strict";
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
// The text of each message should be the same, but each message should be personalized with the person’s name.
// repeat array of exercise 11
let names2 = ["Ali", "Umer", "Zahid", "Haris"];
// Print a personalized message to each friend
names2.forEach(name => {
    console.log(`Dear, ${name} Have a Great Day!`);
});
