"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
// Create an array of magician's names
let magicians = ['Akber ali', 'Haris', 'zahid'];
function show_magicians1(magicians) {
    magicians.forEach(magician => console.log(magician));
}
// Call the function to show the magicians
show_magicians1(magicians);
