// DOM variables
const content = document.getElementById('content');
const btns = document.querySelectorAll('#navigatie .nav-btn');

let basisContent = randomPersonData.forEach(function(e){
    let createTiles = document.createElement('img');
    content.appendChild(createTiles);
    createTiles.setAttribute('class', 'img-poster');
    createTiles.setAttribute('alt', e.name);
    createTiles.setAttribute('src', e.photo);
});

// let createCountryList = randomPersonData.forEach(country => country.region);



// functions
const clearList = function(){
    content.replaceChildren();
}

const createList = function(eventName){
    clearList();

    let createTitle = document.createElement('h1');
    content.appendChild(createTitle);
    createTitle.innerHTML = eventName;

    let createUL = document.createElement('ul');
    let createLi = document.createElement('li');

    content.appendChild(createUL);
    createUL.appendChild(createLi);
    let coutryList = randomPersonData.forEach((country) => {
        createUL.appendChild(createLi);
        createLi.innerHTML = country.region;
    } );
    // createLi.innerHTML = coutryList;
}


// Event listeners
Array.from(btns).forEach(function(btn){
    btn.addEventListener('click', function(btnEvent){
        let eventName = btnEvent.target.innerHTML;
        // console.log(eventName);
        // return (eventName);
        createList(eventName);

    })
});