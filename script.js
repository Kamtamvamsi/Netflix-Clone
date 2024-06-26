//Api key from TMDB
const Api = "api_key = 269b4c0cb16d6b224fbc79387ef88189";

//base url of the site
const base_url = "https://api.themoviedb.org/3";
const banner_url = "https://image.tmdb.org/t/p/original"; 
const img_url = "https://image.tmdb.org/t/p/w185"; //orginal imgs sizeis w500 

//requesting movies data
const requests = {

    fetchTrending: `${base_url}/trending/all/week?${Api}&language=en-IN`,
    fetchNetflixOrignals: `${base_url}/discover/tv?${Api}&with_ networks= 213`,
    fetchActionMovies: `${base_url}/discover/movie?${Api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${Api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${Api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${Api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${Api}&with_genres=99`,
};

//truncate to decrese the info of the movie
function truncate(str, n){
    return str?.length > n? str.substr(0, n-1) + "..." : str;
}

//banner 
fetch(requests.fetchNetflixOrignals)
   .then((res) => res.json())

   .then((data) => {
    console.log(data.requests);

    const setMovie = data.requests[math.floor(math.random() * data.requests.length - 1)];
    
    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner_title");
    var banner_description = document.getElementById("banner_description")

    banner.style.backgroundImage = 
      "url("+ banner_url + setMovie.backdrop_path + ")";
    banner_description.innerText    = truncate(setMovie.overview, 150); 
                 
   }
)