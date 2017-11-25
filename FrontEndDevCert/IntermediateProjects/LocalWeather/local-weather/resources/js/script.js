$(document).ready(function() {

    // Check if browser supports geolocation
    if (navigator.geolocation) {

        // Get current position
        navigator.geolocation.getCurrentPosition(function(position) {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;

            // Initialize request url for weather
            let url = `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`;

            // Perform request for JSON weather data
            $.getJSON(url, function(data) {
                console.log(data);
            });
        });
    }

    // Error message
    else {
        console.log("Geolocation information not available!");
    }
});

