"use strict";
// Dinner Guests: Working with one of the programs from Exercises 14 through 18,
//  print a message indicating the number of people you are inviting to dinner.
// Copy the excercise 15 
let guestList4 = ["Ali", "Umer", "Zubair"];
let canNotCome3 = "Ali";
// console.log(canNotCome3 + ' ' + "can’t make the dinner");
let person3 = "Rehan";
guestList4[guestList4.indexOf(canNotCome3)] = person3;
guestList4.forEach(name => {
    // console.log(`Dear, ${name} You are invited to dinner!.`);
});
//   Here print your new message to your invited guest
guestList4.forEach(name => {
    // console.log(`Dear, ${name} I found a bigger dinner so i invited more guest.`);
});
// beggining guest
let name7 = "Abdullah";
guestList4.unshift(name7);
// console.log(guestList2)
// Middle guest
let name8 = "Anas";
let index2 = guestList4.length / 2;
guestList4.splice(index2, 0, name8);
// end guest
let name9 = "Ahmed";
guestList4.push(name9);
// console.log(guestList2);
// now print one more message to each guest
guestList4.forEach(name => {
    //   console.log(`Dear, ${name} you are invited for Dinner`);
});
console.log(guestList4.length + " " + "guest" + " " + "are invited for a dinner.");
