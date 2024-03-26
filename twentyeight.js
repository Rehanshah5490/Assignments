"use strict";
// Stmy_ages of Life: Write an if-else chain that determines a person’s stmy_age of life. 
// Set a value for the variable my_age, and then:
// • If the person is less than 2 years old, print a messmy_age that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a messmy_age that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a messmy_age that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a messmy_age that the person is a teenmy_ager.
// • If the person is at least 20 years old but less than 65, print a messmy_age that the person is an adult.
// • If the person is my_age 65 or older, print a messmy_age that the person is an elder.
let my_age = 80;
if (my_age < 2) {
    console.log("I am a baby.");
}
else if (my_age >= 2 && my_age < 4) {
    console.log("The person is a toddler.");
}
else if (my_age >= 4 && my_age < 13) {
    console.log("The person is a kid.");
}
else if (my_age >= 13 && my_age < 20) {
    console.log("The person is a teenmy_ager.");
}
else if (my_age >= 20 && my_age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
