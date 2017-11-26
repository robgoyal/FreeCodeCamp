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

                // Retrieve weather information from returned data
                let country_code = data['sys']['country'];
                let region_name = data['name'];
                let temperature_celcius = data['main']['temp'];
                let description = data['weather'][0]['description'];
                let icon_src = data['weather'][0]['icon'];

                $("#location").text(region_name + ', ' + country_code);
                $("#temperature").text(temperature_celcius + " C");
                $("#description").text(description);
                $("#weather-icon").attr("src", icon_src);
            });
        });
    }

    // Browser does not support geolocation information
    else {
        console.log("Geolocation information not available!");
    }
});

