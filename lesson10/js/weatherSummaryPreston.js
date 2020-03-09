//ADD the key and change units to imperial
const apiURL2 = "//api.openweathermap.org/data/2.5/weather?zip=83263,us&appid=a460c1f7140c4ced8b657233811545cb&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL2)
    .then((response) => response.json())
    .then((weatherInfo2) => {
        //Once it comes back, display it to the console.
        console.log(weatherInfo2);

        document.getElementById('currentCond').innerHTML = weatherInfo2.weather[0].main;
        document.getElementById('temp').innerHTML = weatherInfo2.main.temp;
        document.getElementById('humidity').innerHTML = weatherInfo2.main.humidity;
        document.getElementById('speed').innerHTML = weatherInfo2.wind.speed;

    }); //end of "then" fat arrow function