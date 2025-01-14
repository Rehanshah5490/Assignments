// Guest List: If you could invite anyone, living or deceased, to dinner,
//  who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
//  Then use your list to print a message to each person, inviting them to dinner.


// Create an array called 'guestList' with people you'd like to invite to dinner
let guestList: string[] = ["Ali", "Umer", "Zubair"];

// Print an invitation message for each person in the list
guestList.forEach(person => {
  console.log(`Dear ${person},\nYou are invited to dinner! We would be honored to have your company.`);
});