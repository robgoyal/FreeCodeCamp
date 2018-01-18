/* Name: script.js
   Author: Robin Goyal
   Last-Modified: January 18, 2018
   Purpose: Client-side functionality for requesting Wikipedia
            articles through the API
*/

$(document).ready(function() {
  $.ajax({
    url: "https://en.wikipedia.org/w/api.php",
    data: {
      action: 'query',
      list: 'search',
      srsearch: "Albert Einstein",
      format: "json"
    },
    dataType: 'jsonp',
    success: function(x) {
      console.log(x);
    }
  })
});
