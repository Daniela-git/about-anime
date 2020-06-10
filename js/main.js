import * as Api from "/js/api.js";
import * as Interfaz from "/js/ui.js";

// VARIABLES
const api = new Api.Api();
const ui = new Interfaz.Interfaz();
let input = document.getElementById("search");
let button_search = document.getElementById("search_button");


// EVENT LISTENERS
button_search.addEventListener("click", sendSearch);
input.addEventListener("keypress", key);

// FUNCIONES
async function sendSearch(e) {
	e.preventDefault();
	let toSearch = getSearch();
	let animes = await api.search(toSearch);
	let anime = animes.results[0];
	// image_url, title, episodios(si no es null), airing, score
	// console.log(anime);
	ui.showSearchResults(animes.results);
}

function getSearch() {
	let toSearch = input.value;
	return toSearch;
}
function key(e) {
	if (e.key == "Enter") {
		sendSearch(e);
	}
}


