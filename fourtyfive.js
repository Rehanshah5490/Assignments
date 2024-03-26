"use strict";
// Cars: Write a function that stores information about a car in a Object.
//  The function should always receive a manufacturer and a model name.
//   It should then accept an arbitrary number of keyword arguments. 
//   Call the function with the required information and two other name-value pairs, 
//   such as a color or an optional feature. Print the Object that’s returned to make sure all the information 
//   was stored correctly.
function carInfo(manufacturer, modelName, options) {
    return Object.assign({ manufacturer: manufacturer, modelName: modelName }, options);
}
// Call the function with required information and additional name-value pairs
const car = carInfo('Toyota', 'Corolla', { color: 'blue', year: 2022 });
// Print the returned object
console.log(car);
