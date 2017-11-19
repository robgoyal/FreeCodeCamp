let UpdateQuote = function() {

    // AJAX request for random quote
    $.getJSON("https://talaikis.com/api/quotes/random/", function(json) {

        let quote = json['quote'];
        let author = json['author']

        let random_color = RandomColor();
            $("body").css({
                'transition': 'background-color 2s ease-in',
                'background-color': random_color
            });

            $("#twitter-share-button, #btn-random-quote, #quote span, #author, i").css({
                'transition': 'color 2s ease-in',
                'color': random_color
            })
        // Fade out content
        $("#quote span, #author, i").delay(200).fadeOut(1200, function() {

            // let random_color = RandomColor();
            // $("body").css({
            //     'transition': 'background-color 0.9s ease-in',
            //     'background-color': random_color
            // });



            //$("#quote span, #author, i, ")

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

let RandomColor = function() {
    let color = ['#'];
    let values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                  'A', 'B', 'C', 'D', 'E', 'F'];

    for (let i = 0; i < 6; i++) {
        color.push(values[Math.floor(Math.random() * values.length)]);
    }

    return color.join("");
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
