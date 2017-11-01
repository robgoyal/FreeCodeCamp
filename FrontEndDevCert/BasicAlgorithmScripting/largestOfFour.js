/* Name: largestOfFour.js
   Author: Robin Goyal
   Last-Modified: November 1, 2017
   Purpose: Return an array of max values in a set of four sub-arrays
*/

function largestOfFour(arr) {

    // Initialize array for max values
    var maxArr = [];
    for (var i = 0; i < arr.length; i++) {

        // Temp variable for determining max of subarray
        var tempMax = arr[i][0];

        for (var j = 0; j < arr[i].length; j++) {
            // Update temp variable if greater value is found
            if (arr[i][j] > tempMax) {
                tempMax = arr[i][j];
            }
        }

        // Push max value of current subarray
        maxArr.push(tempMax);
    }

    return maxArr;
}