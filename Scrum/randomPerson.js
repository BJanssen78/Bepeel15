// DOM variables
const content = document.getElementById('content');
const btns = document.querySelectorAll('#navigatie .nav-btn');
const regionsOnly = randomPersonData.map(region => region.region).sort();

let basisContent = randomPersonData.forEach(function(e){
    let createTiles = document.createElement('img');
    content.appendChild(createTiles);
    createTiles.setAttribute('class', 'img-poster');
    createTiles.setAttribute('alt', e.name);
    createTiles.setAttribute('src', e.photo);
});

// functions
const getCountriesWithAmountOfPeople = (personData, eventName) =>{
    let countries = {};
    personData.forEach(({region}) => {
        if(region in countries) {
            countries[region]++;
        } else {
            countries[region] = 1;
        }
    });

    countries = Object.entries(countries);
    countries = countries.map(country => ({
        country: country[0], inhabitants: country[1]
    }));

    countries.sort((country1, country2) => country2.inhabitants-country1.inhabitants);

    // console.log(countries);

    clearList();
    createListTitle(eventName);

    let createUL = document.createElement('ul');
    createUL.setAttribute('id', 'countrylist');

    content.appendChild(createUL);
    let liList = '';

    for (let li = 0; li < countries.length; li++){
        liList += `<li class="country-list-item">${countries[li].country} (${countries[li].inhabitants}) </li>`;
        document.getElementById('countrylist').innerHTML = liList;
    }

    const countryUL = document.querySelectorAll('#countrylist .country-list-item');

    Array.from(countryUL).forEach(function(btn){
        btn.addEventListener('click', function(liEvent){
            let countryItem = (liEvent.target.innerHTML).split(' ')[0];
            let eventName = liEvent.target.innerHTML;
            showPersonsByCountry(eventName,countryItem);
            console.log(eventName);
        })});
};

const clearList = function(){
    content.replaceChildren();
}
const createListTitle = function(eventName){
    let createTitle = document.createElement('h1');
    content.appendChild(createTitle);
    createTitle.innerHTML = eventName;
}

const showPersonsByCountry = function(eventName,countryItem){
    clearList();
    createListTitle(eventName);
    let personsByCountry = randomPersonData.filter(country => country.region === countryItem)
    .forEach(function(e){
        let createTiles = document.createElement('img');
        content.appendChild(createTiles);
        createTiles.setAttribute('class', 'img-poster');
        createTiles.setAttribute('alt', e.name);
        createTiles.setAttribute('src', e.photo);
    })

};
const createList = function(eventName){
    clearList();
    createListTitle(eventName);

    let createUL = document.createElement('ul');
    createUL.setAttribute('id', 'countrylist');

    content.appendChild(createUL);
    let liList = '';

    for (let li = 0; li < countryList.length; li++){
        liList += '<li class="country-list-item">' + countryList[li] + '</li>';
        document.getElementById('countrylist').innerHTML = liList;
    }
    const countryUL = document.querySelectorAll('#countrylist .country-list-item');


    Array.from(countryUL).forEach(function(btn){
        btn.addEventListener('click', function(liEvent){
            let countryItem = (liEvent.target.innerHTML)
            // console.log(countryItem);
            showPersonsByCountry(eventName,countryItem);
        })
    })
};

const createListMen = function(eventName){
    clearList();
    createListTitle(eventName);

    let listByMen = randomPersonData.filter(gender => gender.gender === 'male')
        .forEach(function(e){
        let createTiles = document.createElement('img');
        content.appendChild(createTiles);
        createTiles.setAttribute('class', 'img-poster');
        createTiles.setAttribute('alt', e.name);
        createTiles.setAttribute('src', e.photo);
        })
};

const createListWomen = function(eventName){
clearList();
createListTitle(eventName);

let listByWomen = randomPersonData.filter(gender => gender.gender === 'female')
    .forEach(function(e){
    let createTiles = document.createElement('img');
    content.appendChild(createTiles);
    createTiles.setAttribute('class', 'img-poster');
    createTiles.setAttribute('alt', e.name);
    createTiles.setAttribute('src', e.photo);
    })
};

// Event listeners
Array.from(btns).forEach(function(btn){
    btn.addEventListener('click', function(btnEvent){
        let eventName = btnEvent.target.innerHTML;
        switch (eventName){
            case 'Refresh page':
                location.reload();
                break;
            case 'List by country':
                // createList(eventName);
                getCountriesWithAmountOfPeople(randomPersonData, eventName);
                break;
            case 'Men':
                createListMen(eventName);
                break;
            case 'Women':
                createListWomen(eventName);
                break;
        }
    })
});