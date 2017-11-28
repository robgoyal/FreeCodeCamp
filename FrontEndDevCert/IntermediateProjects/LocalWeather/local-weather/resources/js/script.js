$(document).ready(function() {
    // Check if browser supports geolocation
    if (navigator.geolocation) {

        // Get current position
        navigator.geolocation.getCurrentPosition(function(position) {

            // Access latitude and longitude from returned position data
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;

            // Declare global variables for event handler to access
            let temperature;
            let is_celcius = true;

            // Initialize request url for weather
            let url = `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`;

            // Perform request for JSON weather data
            $.getJSON(url, function(data) {

                // Retrieve weather information from returned data
                let country_code = data['sys']['country'];
                let region_name = data['name'];
                temperature = data['main']['temp'];
                let description = data['weather'][0]['description'];
                let icon_src = data['weather'][0]['icon'];

                // Set information
                $("#location").text(region_name + ', ' + country_code);
                $("#description").text(description);
                $("#weather-icon").attr("src", icon_src);

                // Create HTML for temperature and button for temperature scale
                $("#temperature").html(Math.trunc(temperature) + '<button id="scale">\u00b0C</button>');
            });

            // Onclick function to handle switching temperature scale
            $("body").on('click', '#scale', function() {

                // Convert celcius to fahrenheit
                if (is_celcius) {
                    temperature = temperature * 1.8 + 32;
                    $("#temperature").html(Math.trunc(temperature) + '<button id="scale">\u00b0F</button>');
                }

                // Convert fahrenheit to celcius
                else {
                    temperature = (temperature - 32) / 1.8;
                    $("#temperature").html(Math.trunc(temperature) + '<button id="scale">\u00b0C</button>');
                }

                // Negate boolean value
                is_celcius = !(is_celcius);
            });
        });
    }



    // Browser does not support geolocation information
    else {
        console.log("Geolocation information not available!");
    }

});

