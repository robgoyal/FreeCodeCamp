/* Name: truncateString.js
   Author: Robin Goyal
   Last-Modified: November 2, 2017
   Purpose: Truncate a string if the num argument is less than the
            string length
*/

function truncateString(str, num) {

    // Return str if num is larger than or equal to string length
    if (num >= str.length) {
        return str;
    }

    // Include ellipses when accounting for string length 
    else if (num > 3) {
        return str.slice(0, num - 3) + "...";
    }

    // Don't account for 3 ellipses
    else {
        return str.slice(0, num) + "...";
    }
}