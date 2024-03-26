"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//  and "you have space for only two guests".
// • Start with your program from Exercise 16. Add a new line that 
// prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list,
//  print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.
// Copy the excercise 16 
let guestList3 = ["Ali", "Umer", "Zubair"];
let canNotCome2 = "Ali";
// console.log(canNotCome2 + ' ' + "can’t make the dinner");
let person2 = "Rehan";
guestList3[guestList3.indexOf(canNotCome2)] = person2;
guestList3.forEach(name => {
    // console.log(`Dear, ${name} You are invited to dinner!.`);
});
//   Here print your new message to your invited guest
guestList3.forEach(name => {
    // console.log(`Dear, ${name} I found a bigger dinner so i invited more guest.`);
});
// beggining guest
let name4 = "Abdullah";
guestList3.unshift(name4);
// console.log(guestList2)
// Middle guest
let name5 = "Anas";
let index1 = guestList3.length / 2;
guestList3.splice(index1, 0, name5);
// end guest
let name6 = "Ahmed";
guestList3.push(name6);
// console.log(guestList2);
// now print one more message to each guest
guestList3.forEach(name => {
    //   console.log(`Dear, ${name} you are invited for Dinner`);
});
// print first line of exercise 17
console.log("I have space for only two guests");
// remove guest by using while loop & pop
console.log(guestList3);
while (guestList3.length > 2) {
    let removePerson = guestList3.pop();
    // print message for those who can't invite
    console.log(`Dear, ${removePerson} sorry, I can't invite you for a dinner`);
}
// // print message for those who are still invite
guestList3.forEach(name => {
    console.log(`Dear, ${name} You are still invited to dinner!.`);
});
// //   create empty ist and print it
guestList3.pop();
guestList3.pop();
console.log(guestList3);
