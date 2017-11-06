/* Name: destroyer.js
   Author: Robin Goyal
   Last-Modified: November 5, 2017
   Purpose: Remove all elements from initial array which are passed as 
            subsequent arguments
*/

function destroyer(arr) {

    // Convert variable number of arguments to array
    var args = Array.prototype.slice.call(arguments);

    return args[0].filter(function(elem) {

        // Return nothing if current element matches any arguments
        for (var i = 1; i < args.length; i++) {
            if (elem === args[i]) {
                return;
            }
        }

        return elem;
    })
}