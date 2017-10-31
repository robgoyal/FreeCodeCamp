/* Name: reverseAString.js
   Author: Robin Goyal
   Last-Modified: October 31, 2017
   Purpose: Reverse a string
*/

function reverseString(str) {

    // Split all chars, reverse array of chars, join all chars together
    return str.split("").reverse().join("");
}