//ADD the key and change units to imperial
const apiURL2 = "//api.openweathermap.org/data/2.5/weather?zip=83287,us&appid=a460c1f7140c4ced8b657233811545cb&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL2)
    .then((response) => response.json())
    .then((weatherInfo2) => {
        //Once it comes back, display it to the console.
        console.log(weatherInfo2);

        document.getElementById('currentCond').innerHTML = weatherInfo2.weather[0].main;
        const tempNumber = parseFloat(document.getElementById('temp').textContent = weatherInfo2.main.temp);
        document.getElementById('humidity').innerHTML = weatherInfo2.main.humidity;
        const speedNumber = parseFloat(document.getElementById('speed').textContent = weatherInfo2.wind.speed);

        //const tempNumber = temp;
        //const speedNumber = speed;
        console.log(tempNumber);
        console.log(speedNumber);

        let windchill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber, 0.16)) + (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));
        windchill = Math.round(windchill);

        if (tempNumber <= 50 && speedNumber > 3) {
            document.getElementById("chill").innerHTML = "Wind Chill: " + windchill + " \u00B0";
        } else {
            document.getElementById("chill").innerHTML = "No Wind Chill Today";
        }

    }); //end of "then" fat arrow function