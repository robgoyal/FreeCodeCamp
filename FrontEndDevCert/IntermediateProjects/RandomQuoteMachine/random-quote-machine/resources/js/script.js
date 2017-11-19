let UpdateQuote = function() {

    // AJAX request for random quote
    $.getJSON("https://talaikis.com/api/quotes/random/", function(json) {

        let quote = json['quote'];
        let author = json['author']

        // Fade out content
        $("#quote span, #author, i").delay(200).fadeOut(1200, function() {
            // Replace quote and author with returned data
            $('#quote span').text(json['quote']);
            $('#author').text(json['author']);

            // Fade content in
            $("#quote span, #author, i").fadeIn(900);
        });

        // Append quote and author text to twitter button
        let twitter_href = $("#twitter-share-button").attr('href');
        href_text = encodeURIComponent(quote) + encodeURIComponent(' - ') + encodeURIComponent(author);
        $("#twitter-share-button").attr("href", twitter_href + href_text);
    });
}

$(document).ready(function() {
    /*
        Initially update quote upon document load.
    */
    UpdateQuote();

    // Update quote upon button click
    $("#btn-random-quote").click(function() {
        UpdateQuote();
    });

});
