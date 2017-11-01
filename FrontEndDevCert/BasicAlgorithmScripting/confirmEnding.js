/* Name: confirmEnding.js
   Author: Robin Goyal
   Last-Modified: November 1, 2017
   Purpose: Check if a string ends with the target string
*/

function confirmEnding(str, target) {

    // Use the target length and compare the substring to the target
    return (str.substring(str.length - target.length) === target);
}