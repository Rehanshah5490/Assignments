"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more
//  guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing 
// people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, 
// one for each person in your list.
// Copy the excercise 15 
let guestList2 = ["Ali", "Umer", "Zubair"];
let canNotCome1 = "Ali";
// console.log(canNotCome1 + ' ' + "can’t make the dinner");
let person1 = "Rehan";
guestList2[guestList2.indexOf(canNotCome1)] = person1;
// guestList2.forEach(name => {
//     console.log(`Dear, ${name} You are invited to dinner!.`);
//   });
//   Here print your new message to your invited guest
guestList2.forEach(name => {
    console.log(`Dear, ${name} I found a bigger dinner so i invited more guest.`);
});
// beggining guest
let name1 = "Abdullah";
guestList2.unshift(name1);
// // Middle guest
let name2 = "nadir";
let index = guestList2.length / 2;
guestList2.splice(index, 0, name2);
// // end guest
let name3 = "Ahmed";
guestList2.push(name3);
// // now print one more message to each guest
guestList2.forEach(name => {
    console.log(`Dear, ${name} you are invited for Dinner`);
});
