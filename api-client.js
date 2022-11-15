const API_Prefix ='?api_key='
const API_KEY = '88efa1821e2005eaec008f2eb5efbc36';

export async function getData(){
    try {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list${API_Prefix}${API_KEY}`;
    // console.log(apiUrl);
    const res = await fetch(apiUrl)
 
    .then((response) => response.json())
    .then((data) => console.log(data));
    }
    catch (error){
        console.log(error);
    }
};