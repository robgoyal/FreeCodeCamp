/* Name: palindrome.js
   Author: Robin Goyal
   Last-Modified: November 1, 2017
   Purpose: Check if a string is a palindrome
*/

function palindrome(str) {
    str = str.toLowerCase().replace(/_|\W+/g, "");

    for (var i = 0; i < str.length / 2; i++) {

        // Return false if two characters are not equal
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }

    return true;
}