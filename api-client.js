const API_Prefix ='?api_key='
const API_KEY = '';
const genreArray = [];

const container = document.getElementById('container');
let createUL = document.createElement('ul');
container.appendChild(createUL);

const showDataList = function(name, id){
    
    let createLi = document.createElement('li');
    createUL.appendChild(createLi);
    createLi.innerHTML = `Genre name : ${name}, Genre ID : ${id}`;
}

export async function getData(){
    try {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list${API_Prefix}${API_KEY}`;
    const res = await fetch(apiUrl)
 
    .then((response) => response.json())
    .then((data) => {
        let getDataToArray = Object.values(data);
        getDataToArray.forEach(element => {
            for (let num = 0; num <= element.length; num++){
                showDataList(element[`${num}`].name, element[`${num}`].id);
            }
        })
    } 
    );
    }
    catch (error){
        console.log(error);
    }
};