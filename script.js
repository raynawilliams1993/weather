// variables:
var city = results[i].city;
var date = results[i].date;
var image = results[i].image;
var temp = results[i].temperature;
var humidity = results[i].humidity;
var wind = results[i].wind - speed;
var uvIndex = results[i].uv - index;
var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q={response}";
var results = "response.data";




//AJAX calls and functions
$("city-btn").on("click", function () {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (var i = 0; i < results.length; i++) {
            var cityDiv = $("<div>");
            var cityP = $("<p>").text("City: " + city);
            var cityImage = $("<img>");
            image.attr("src", results[i].images.fixed_height.url);
            var dateP = $("<p>").text("Date:" + date);
            var tempP = $("<p>").text("Temperature" + temp);
            var humidP = $("<p>").text("Humidity" + humidity);
            var windP = $("<p>").text("Wind-Speed" + wind);
            var uvP = $("<p>").text("Uv-Index" + uvIndex);
            cityDiv.prepend(cityP);
            cityDiv.prepend(cityImage);
            cityDiv.prepend(dateP);
            cityDiv.prepend(tempP);
            cityDiv.prepend(humidP);
            cityDiv.prepend(windP);
            cityDiv.prepend(uvP);
            $("#City-appears-here").prepend(cityDiv);
            $("#Date-appears-here").prepend(cityDiv);
            $("#img-appears-here").prepend(cityDiv);
            $("#Temperature-appears-here").prepend(cityDiv);
            $("#Humidity-appears-here").prepend(cityDiv);
            $("#Wind-Speed-appears-here").prepend(cityDiv);
            $("#Uv-Index-appears-here").prepend(cityDiv);

        }

    });
});


//render buttons 