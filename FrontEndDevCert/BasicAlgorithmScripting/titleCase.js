/* Name: titleCase.js
   Author: Robin Goyal
   Last-Modified: November 1, 2017
   Purpose: Return the original string with each word capitalized
            at the first letter
*/

function titleCase(str) {

    // Create array of words with lowercase characters
    var arr = str.split(' ').map(function(word) {
        return word.toLowerCase();
    });

    for (var i = 0; i < arr.length; i++) {

        // Upper case first char and add the remainder of the word
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }

    // Join array with spaces
    return arr.join(' ');
}