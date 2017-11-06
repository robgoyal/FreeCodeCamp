/* Name: bouncer.js
   Author: Robin Goyal
   Last-Modified: November 5, 2017
   Purpose: Remove all falsy values from an array
*/

function bouncer(arr) {
    return arr.filter(function(elem) {
        if (elem) {
            return elem;
        }
    })
}