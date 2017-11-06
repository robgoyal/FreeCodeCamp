/* Name: getIndexToIns.js
   Author: Robin Goyal
   Last-Modified: November 5, 2017
   Purpose: Find the lowest index an element can be inserted into a sorted
            array
*/

function getIndexToIns(arr, num) {

    /* Default sort is done by unicode values */
    arr.sort(function(a, b) {
        return a - b;
    });

    for (var i = 0; i < arr.length - 1; i++) {

        if (num === arr[i]) {
            return i;
        }

        else if (num > arr[arr.length - 1]) {
            return arr.length;
        }

        else if (num > arr[i] && num < arr[i+1]) {
            return i + 1;
        }
    }
}