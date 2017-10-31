/* Name: factorialize.js
   Author: Robin Goyal
   Last-Modified: October 31, 2017
   Purpose: Return the factorial of a number
*/

function factorialize(num) {

    // Initialize product variable
    var product = 1;

    // Iteratively cumulate product 
    for (var i = num; i > 0; i--) {
        product *= i;
    }

    return product;
}