/* Name: longestWord.js
   Author: Robin Goyal
   Last-Modified: November 1, 2017
   Purpose: Find the longest word in a string
*/

function longestWord(str) {

    // Initialize variables
    var maxWordLength = 0;
    var arr = str.split(' ');

    for (var i = 0; i < arr.length; i++) {

        // Update max variable if current word length is greater
        if (arr[i].length > max) {
            max = arr[i].length;
        }
    }

    return max
}