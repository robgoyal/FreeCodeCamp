/* Name: slasher.js
   Author: Robin Goyal
   Last-Modified: November 2, 2017
   Purpose: Return the remaining elements of an array after removing
            n elements from the front
*/

function slasher(arr, howMany) {

    // Retrieve elements from howMany onwards
    return arr.slice(howMany);
}