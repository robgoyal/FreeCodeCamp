/* Name: script.js
   Author: Robin Goyal
   Last-Modified: January 24, 2018
   Purpose: Client-side functionality for requesting Wikipedia
            articles through the API
*/

$().ready(function() {

  /* Send request to Wikipedia API from text query */
  let sendRequest = function(event) {
    // Don't submit form
    event.preventDefault();

    $.ajax({
      url: "https://en.wikipedia.org/w/api.php",
      data: {
        action: 'query',
        list: 'search',
        srsearch: event.target[0].value,
        format: "json"
      },
      dataType: 'jsonp',
      success: createResultDivs
    });
  }

  /* Dynamically create divs for each result */
  let createResultDivs = function(data) {

    $('container').css('margin-top', '15%');
    $('.container').animate({'marginTop': '0%'});

    // Prepare new div for search resutls
    $("#results").remove();
    $(".container").append("<div id='results'></div>");

    // Create div for each result
    data['query']['search'].forEach(function(result) {
      let title = result['title'];
      let snippet = result['snippet'];
      let pageid = result['pageid'];

      result_div = "<a target='_blank' href = https://en.wikipedia.org/?curid=" + pageid;
      result_div = result_div + "><div id='result'><h4>" + title + "</h4><p>" + snippet + "</p></div></a>";

      // Append result to results div
      $("#results").append(result_div);
    });
  };

  // Submit form if user hits enter
  $('#query').keyup(function(event) {
    if (event.keyCode === 13) {
      $("#submit").submit();
    }
  })

  // Create listener for form submit
  $('form').first().submit(sendRequest);
});
