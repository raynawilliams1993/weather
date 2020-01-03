// variables:
var city = $(this).attr("data-city");
var date = $(this).attr("data-city-date");
var image = $(this).attr("data-city-icon+image");
var temp = $(this).attr("data-city-temp");
var humidity = $(this).attr("data-city-humidity");
var wind = $(this).attr("data-city-wind+speed");
var uvIndex = $(this).attr("data-city-uv+index");
var queryUrl = "http://api.openweathermap.org/data/2.5/forecast?id=1ec3937220c2fe8f3b996ee4ee157942=?search";
var results = "response.data";




//AJAX calls and functions
$("city-btn").on("click", function () {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (var i = 0; i < results.length; i++) {
            var cityDiv = $("<div>")
            var p = $("<p>");
        }

    });
});


//render buttons 