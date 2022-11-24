// DOM variables
const content = document.getElementById('content');
const btns = document.querySelectorAll('#navigatie .nav-btn');

// functions
const createList = function(eventName){
    content.replaceChildren();
    
    let createTitle = document.createElement('h1');
    content.appendChild(createTitle);
    createTitle.innerHTML = eventName;

    let createUL = document.createElement('ul');
    let createLi = document.createElement('li');

    content.appendChild(createUL);
    createUL.appendChild(createLi);
}

// Event listeners
Array.from(btns).forEach(function(btn){
    btn.addEventListener('click', function(btnEvent){
        let eventName = btnEvent.target.innerHTML;
        // console.log(eventName);
        // return (eventName);
        createList(eventName)
    })
});