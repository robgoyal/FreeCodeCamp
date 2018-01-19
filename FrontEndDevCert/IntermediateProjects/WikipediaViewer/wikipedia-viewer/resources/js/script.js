/* Name: script.js
   Author: Robin Goyal
   Last-Modified: January 19, 2018
   Purpose: Client-side functionality for requesting Wikipedia
            articles through the API
*/

$(document).ready(function() {

  /*
  NOTE: creating a link for each page can be done by
  adding curid=pageid to https://en.wikipedia.org/
  */

  document.getElementById('query').addEventListener('submit', function(evt) {
    evt.preventDefault();
    console.log(evt.target[0].value);
    $.ajax({
      url: "https://en.wikipedia.org/w/api.php",
      data: {
        action: 'query',
        list: 'search',
        srsearch: evt.target[0].value,
        format: "json"
      },
      dataType: 'jsonp',
      success: function(x) {
        console.log(x);
      }
    });


  })

  $('#text').keyup(function(event) {
    if (event.keyCode === 13) {
      $("#enter").submit();
    }
  })

});
