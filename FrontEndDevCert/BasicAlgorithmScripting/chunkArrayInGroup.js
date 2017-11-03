/* Name: chunkArrayInGroup.js
   Author: Robin Goyal
   Last-Modified: November 2, 2017
   Purpose: Group array in chunks of argument size
*/

function chunkArrayInGroups(arr, size) {

    // Initialize two dimensional array
    var twoDimArr = [];

    for (var i = 0; i < arr.length; i += size) {

        // Push array slice to two dimensional array
        twoDimArr.push(arr.slice(i, i + size));
    }

    return twoDimArr;
}