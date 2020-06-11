import * as Api from "/js/api.js";
import * as Interfaz from "/js/ui.js";

// VARIABLES
const api = new Api.Api();
const ui = new Interfaz.Interfaz();
let input = document.getElementById("search");
let button_search = document.getElementById("search_button");
let load = document.querySelector(".load");
let filtros = document.getElementById("filtros")

// EVENT LISTENERS
button_search.addEventListener("click", sendSearch);
input.addEventListener("keypress", key);
filtros.addEventListener("click",showFilter)

// FUNCIONES
async function sendSearch(e) {
	e.preventDefault();
	load.classList.add("show")
	let toSearch = getSearch();
	let animes = await api.search(toSearch);
	let anime = animes.results[0];
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

function showFilter(e){
	ui.showGenres()
}