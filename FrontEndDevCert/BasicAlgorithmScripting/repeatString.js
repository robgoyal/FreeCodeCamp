/* Name: repeatString.js
   Author: Robin Goyal
   Last-Modified: November 2, 2017
   Purpose: Repeat a string num times if num is greater than 0
*/

function repeatStringNumTimes(str, num) {

    // Repeat string if num is positive
    if (num > 0) {
        return str.repeat(num);
    }

    return "";
}