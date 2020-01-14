console.log("javascript is loaded");
// var city = results[i].city;
// var date = results[i].date;
// var image = results[i].image;
// var temp = results[i].temperature;
// var humidity = results[i].humidity;
// var wind = results[i].wind - speed;
// var uvIndex = results[i].uv - index;
var weatherURL = `https://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&q=`;
var forecastURL = `https://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}&q=`; //attribute dt_text(actual date and time in responses)
var uvURL = `https://api.openweathermap.org/data/2.5/uvi/forecast?APPID=${API_KEY}&q=`;

var temperature = 0;
var date = "";
var humidity = 0;
var wind =0;
var UV= 0;
var latCurrent = 0;
var lonCurrent = 0;
var locationCurrent = "everywhere";
var date = 0;
var temp5day =[];
var date5day = [];
var humidity5day = [];
var icon5day = [];


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


        $("#cities-view").html(`
        <ul>
       
        <li class="list-group-item list-group-item-primary">Temperature: ${temp}</li>
        <li class="list-group-item list-group-item-dark"> Humidity: ${humidity}</li>
        <li class="list-group-item list-group-item-primary"> Wind-Speed: ${wind}</li>
       
         </ul>`
        );
        var queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + latCurrent + "&lon=" + lonCurrent;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response){
            // console.log(response);
            UV=response.value;
            // jumboPop;
            date = response.date_iso;
            var split = date.split("T");
            date = split[0];
            $("#tempCurrent").text("Temperature: " + temperature + " F");
            $("#locationCurrent").text(locationCurrent + "(" + date + ")");
            $("#humidCurrent").text("Humidity: " + humidity + " %");
            $("#windCurrent").text("Wind Speed: " + wind + " MPH");
            $("#UVCurrent").text("UV Index: " + UV);
        })
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?appid=" + apiKey + "&q=" + locationCurrent;
            
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response){
                console.log(response);
                for ( var i =0; i < 5; i++){
                    temp5day[i] = (((response.list[4+(i*8)].main.temp)-273.15)*9/5 + 32).toFixed(2);
                    console.log(temp5day);
                    var dateTemp= response.list[4+(i*8)].dt_txt;
                    dateTemp = dateTemp.split(" ");
                    date5day[i] = dateTemp[0];
                    console.log(date5day);
                    humidity5day[i]= response.list[4+(i*8)].main.humidity;                
                    console.log(humidity5day);
                    icon5day[i]= response.list[4+(i*8)].weather.icon;

                    // for (var i =0; i < response.list.length; i+8){
                    //     console.log(response.list[i].dt_txt)
                    
                    $("#date1").text("Date: " + date5day[0] + " ");
                    $("#temp1").text("Temperature: " + temp5day + " F");
                    $("#humid1").text("Humidity: " + humidity5day + " %");
                    $("#icon1").text("Current weather: " + icon5day + " ");
                    // $(this).append(date5day[0]);
                    $("#date2").text("Date: " + date5day[8] + " ");
                    $("#temp2").text("Temperature: " + temp5day[8] + " F");
                    $("#humid2").text("Humidity: " + humidity5day[8] + " %");
                    $("#icon2").text("Current weather: " + icon5day + " ");
                    // $(this).append(date5day[8]);
                    $("#date3").text("Date: " + date5day[16] + " ");
                    $("#temp3").text("Temperature: " + temp5day + " F");
                    $("#humid3").text("Humidity: " + humidity5day + " %");
                    $("#icon3").text("Current weather: " + icon5day + " ");
                    // $(this).append(date5day[16]);
                    $("#date4").text("Date: " + date5day[24] + " ");
                    $("#temp4").text("Temperature: " + temp5day + " F");
                    $("#humid4").text("Humidity: " + humidity5day + " %");
                    $("#icon4").text("Current weather: " + icon5day + " ");
                    // $(this).append(date5day[24]);
                    $("date5").text("Date: " + date5day[32] + " ");
                    $("#temp5").text("Temperature: " + temp5day + " F");
                    $("#humid5").text("Humidity: " + humidity5day + " %");
                    $("#icon5").text("Current weather: " + icon5day + " ");
                    $(this).append(date5day[32]);
                }
            })
                
            })

            
            

    });


//render buttons 