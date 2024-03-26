"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner,
//  so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program 
// stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new 
// person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// Repeat an array of 'guestList' with people you'd like to invite to dinner
let guestList1 = ["Ali", "Umer", "Zubair"];
// person who can't attend dinner
let canNotCome = guestList1[0];
// now print a message with person name
console.log(canNotCome + " " + "can’t make the dinner");
//New person who  attend dinner
let person = "Rehan";
// // replaceing the name into the array
guestList1[guestList1.indexOf(canNotCome)] = person;
// // now print a message to all in my list
guestList1.forEach(name => {
    console.log(`Dear, ${name} You are invited to dinner!.`);
});
