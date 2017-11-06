/* Name: rot13.js
   Author: Robin Goyal
   Last-Modified: November 5, 2017
   Purpose: Shift each alphabetical letter by 13 places
*/

function rot13(str) {

    var chars = []

    for (var i = 0; i < str.length; i++) {

        // Hold unicode value
        var char = str.charCodeAt(i);

        if (char >= 65 && char <= 90) {

            // Shift by 13 characters and wrap if necessary
            chars.push(String.fromCharCode((char + 13 - 65) % 26 + 65));
        }

        else {
            chars.push(str.charAt(i));
        }
    }

    // Convert chars to string
    return chars.join("");
}