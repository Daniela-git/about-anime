import * as Api from "/js/api.js";

// VARIABLES
const api = new Api.Api();
let input = document.getElementById("search");
let button_search = document.getElementById("search_button");

// EVENT LISTENERS
button_search.addEventListener("click", sendSearch);
input.addEventListener("keypress",key)

// FUNCIONES
async function sendSearch(e) {
    e.preventDefault()
    let toSearch = getSearch()
    let animes = await api.search(toSearch)
    let anime = animes.results[0]
    // image_url, title, episodios(si no es null), airing, score
    console.log(anime)
    
}

function getSearch() {
    let toSearch = input.value;
    return toSearch
}
function key(e) {
    if (e.key == "Enter"){
        sendSearch(e)
    }
    
}