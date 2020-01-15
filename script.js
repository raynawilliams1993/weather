console.log("javascript is loaded");
var weatherURL = `https://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&q=`;
var forecastURL = `https://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}q={city+name},{country+code}`
var latCurrent;

//AJAX calls and functions

$("#city-btn").on("click", function () {
    var city = $("#city-input").val()
    console.log(city)
    $.ajax({
        url: weatherURL + city,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var temp = response.main.temp;
        var humidity = response.main.humidity;
        var wind = response.wind.speed;
        console.log(wind);
        latCurrent= response.coord.lat;
        console.log(latCurrent);


        $("#cities-view").html(`
        <ul>
       
        <li class="list-group-item list-group-item-primary">Temperature: ${temp}</li>
        <li class="list-group-item list-group-item-dark"> Humidity: ${humidity}</li>
        <li class="list-group-item list-group-item-primary"> Wind-Speed: ${wind}</li>
        <li class="list-group-item list-group-item-dark"> Coordinates: ${latCurrent}</li>
         </ul>`
        );
      
       
            });

            
            

    });

   $("week-btn").on("click", function () {
    var cityWeek = $("#5day-input").val()
    console.log(cityWeek)
    $.ajax({
        url: forecastURL + city,
        method: "GET"
    }).then(function(response) {
        console.log(response);

    })
   })


 

//render buttons 