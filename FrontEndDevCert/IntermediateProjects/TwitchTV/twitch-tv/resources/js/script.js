/* Name: script.js
   Author: Robin Goyal
   Last-Modified: February 20, 2018
   Purpose: Obtain Twitch streamers information
*/

$(function() {

    // Initialize array of popular streamers
    let streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
        "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "streamerhouse"];

    let filtered_streamers = [];

    for (let streamer in streamers) {

        (function(index) {
            var request = $.ajax({
                type: "GET",
                dataType: "jsonp",
                url: "https://wind-bow.glitch.me/twitch-api/streams/" + streamers[index],
                data: {"callback": "?"}
            });

            request.done(function(data) {
                // console.log(filter_stream_data(data, streamers[index]));
                filtered_streamers.push(filter_stream_data(data, streamers[index]));
                //console.log(data);
            });
        })(streamer);
    }

    display_streamers(filtered_streamers);

});

/* Filter streamer channel info to obtain data such as
   link to channel, channel logo, currently playing game,
   title of stream and a preview of the channel image
*/
function filter_stream_data(stream_resp, streamer) {
    stream_data = {'link': 'https://www.twitch.tv/' + streamer, 'online': false};

    // Check if stream is online
    if (stream_resp['stream']) {
        stream_data['logo'] = stream_resp['stream']['channel']['logo'];
        stream_data['game'] = stream_resp['stream']['channel']['game'];
        stream_data['stream_title'] = stream_resp['stream']['channel']['status'];
        stream_data['preview'] = stream_resp['stream']['preview']['medium'];
        stream_data["online"] = true;
    }

    return stream_data;
}


/* Display filtered streamer information to user */
function display_streamers(temp) {
    $(".container").append("<div id='streamers'></div>")

    filtered_streamers.forEach(function(filtered_streamer) {
        console.log(filtered_streamer);
        let streamer_div;
        if (streamer["online"]) {
            streamer_div = `<div id="streamer online"><img src=${streamer["preview"]}></div>`;
        }
        else {
            streamer_div = `<div id="streamer offline"><p>Offline</p></div>`;
        }

        $("#streamers").append(streamer_div);
    });
}
