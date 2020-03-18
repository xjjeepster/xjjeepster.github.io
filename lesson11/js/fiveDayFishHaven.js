const d = new Date();

const todayDayNumber = d.getDay();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const apiURL = "//api.openweathermap.org/data/2.5/forecast?zip=83287,us&appid=a460c1f7140c4ced8b657233811545cb&units=imperial";

fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
        console.log(weatherInfo);

        document.getElementById("townName").textContent = weatherInfo.city.name + " Five Day Forecast";

        let mylist = weatherInfo.list;

        let forecastDayNumber = todayDayNumber;

        for (i = 0; i < mylist.length; i++) {

            let time = mylist[i].dt_txt;

            if (time.includes('18:00:00')) {
                console.log("Found an entry with 18:00:00 in the time. it was report " + i + " from the mylist of 40");

                forecastDayNumber += 1;
                if (forecastDayNumber === 7) { forecastDayNumber = 0; }

                let theDayName = document.createElement("span");
                theDayName.textContent = weekday[forecastDayNumber];

                let theTemp = document.createElement("p");
                theTemp.textContent = "High of: " + weatherInfo.list[i].main.temp + "\xB0";

                let iconcode = weatherInfo.list[i].weather[0].icon;
                let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
                let theIcon = document.createElement("img");
                theIcon.src = iconPath;
                theIcon.setAttribute('alt', desc);

                let theDay = document.createElement("div");
                theDay.appendChild(theDayName);
                theDay.appendChild(theTemp);
                theDay.appendChild(theIcon);

                document.getElementById('weatherforecast').appendChild(theDay);

            }
        }
    })