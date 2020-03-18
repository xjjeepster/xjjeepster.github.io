const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        //console.log(towns);

        // let pagetowns = [towndata[4], towndata[5], towndata[1]];
        //console.log(pagetowns);

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Preston") {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let ediv = document.createElement('div');

                h2.textContent = "Town Events";

                card.appendChild(h2);

                for (let e = 0; e < towns[i].events.length; e++) {
                    let p1 = document.createElement('p');
                    p1.textContent = towns[i].events[e];
                    console.log(towns[i].events[e]);
                    card.appendChild(p1);
                }


                document.querySelector('div.activities').appendChild(card);
            }
        }
    });