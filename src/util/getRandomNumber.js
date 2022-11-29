/**
 * Generates a number between min and max.
 * @param {number} min
 * @param {number} max
 */


export var getRandomNumber = function(min, max){
    return Math.floor(Math.random() * max) + min;
};