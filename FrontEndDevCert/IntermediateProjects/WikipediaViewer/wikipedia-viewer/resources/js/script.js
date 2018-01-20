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

  $('#text').keyup(function(event) {
    if (event.keyCode === 13) {
      $("#enter").submit();
    }
  })

  document.getElementById('query').addEventListener('submit', function(evt) {
    evt.preventDefault();
    $.ajax({
      url: "https://en.wikipedia.org/w/api.php",
      data: {
        action: 'query',
        list: 'search',
        srsearch: evt.target[0].value,
        format: "json"
      },
      dataType: 'jsonp',
      success: function(data) {

        // Clear results div for each search
        var div = document.createElement("results");
        $("#results").html('');
        data['query']['search'].forEach(function(result) {

          // Create a new div for each result
          result_div = "<a target='_blank' href = https://en.wikipedia.org/?curid=" + result['pageid'] + "><div>"
          result_div = result_div + "<h4>" + result['title'] + "</h4>";
          result_div = result_div + "<p>" + result['snippet'] + "</p></div></a>";

          $("#results").append(result_div);
        });
      }
    });
  });

});
