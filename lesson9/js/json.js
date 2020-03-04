const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towndata = jsonObject['towns'];
        //console.log(towndata);

        let pagetowns = [towndata[4], towndata[5], towndata[1]];
        console.log(pagetowns);

        for (let i = 0; i < pagetowns.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let motto = document.createElement('p');
            let yf = document.createElement('p');
            let cp = document.createElement('p');
            let avgrf = document.createElement('p');
            let img = document.createElement('img');

            h2.textContent = pagetowns[i].name;
            motto.textContent = pagetowns[i].motto;
            yf.textContent = "Year Founded: " + pagetowns[i].yearFounded;
            cp.textContent = "Population: " + pagetowns[i].currentPopulation;
            avgrf.textContent = "Annual Rainfall: " + pagetowns[i].averageRainfall;

            img.setAttribute('src', 'images/' + pagetowns[i].photo);
            img.setAttribute('alt', pagetowns[i].name);

            card.appendChild(h2);
            card.appendChild(motto);
            card.appendChild(yf);
            card.appendChild(cp);
            card.appendChild(avgrf);
            card.appendChild(img);

            document.querySelector('div.cards').appendChild(card);
        }
    });