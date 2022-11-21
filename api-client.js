const API_Prefix ='?api_key='
const API_KEY = '';
const genreArray = [];

export async function getData(){
    try {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list${API_Prefix}${API_KEY}`;
    // console.log(apiUrl);
    const res = await fetch(apiUrl)
 
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        genreArray.push(Object.values(data))
        console.log(genreArray);
    }
    
    );
    }
    catch (error){
        console.log(error);
    }
};