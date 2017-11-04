/* Name: mutation.js
   Author: Robin Goyal
   Last-Modified: November 3, 2017
   Purpose: Determine if all the characters of one string are in the other
*/

function mutation(arr) {

    // To perform case insensitive checks
    arr[0] = arr[0].toLowerCase();
    arr[1] = arr[1].toLowerCase();

    for (var i = 0; i < arr[1].length; i++) {
        if (!(arr[0].includes(arr[1][i]))) {
            return false;
        }
    }

    return true;
}