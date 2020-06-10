import * as Api from "/js/api.js";

// VARIABLES
const api = new Api.Api();
let input = document.getElementById("search");
let button_search = document.getElementById("search_button");

// EVENT LISTENERS
button_search.addEventListener("click", sendSearch);

// FUNCIONES
function sendSearch(e) {
    e.preventDefault()
    let toSearch = getSearch()
    let resultFromApi = api.search()
    console.log(toSearch)
    console.log(resultFromApi)
    
}

function getSearch() {
    let toSearch = input.value;
    return toSearch
}
