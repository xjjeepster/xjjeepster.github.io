const requestURL = 'https://xjjeepster.github.io/term_project/data/employees.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        // console.table(jsonObject); // temporary checking for valid response and data parsing
        const activities = jsonObject['activities'];
        for (let i = 0; i < activities.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let pd = document.createElement('p');
            let pp = document.createElement('p');
            let img = document.createElement('img');

            h2.textContent = activities[i].name;
            pd.textContent = activities[i].description;
            pp.textContent = "Visitors (anually): " + activities[i].visitors;

            img.setAttribute('src', activities[i].imageurl);



            card.appendChild(h2);
            card.appendChild(pd);
            card.appendChild(pp);
            card.appendChild(img);

            document.querySelector('div.cards').appendChild(card);
        }
    });