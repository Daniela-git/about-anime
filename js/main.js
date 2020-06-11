import * as Api from "/js/api.js";
import * as Interfaz from "/js/ui.js";

// VARIABLES
const api = new Api.Api();
const ui = new Interfaz.Interfaz();
const input = document.getElementById("search");
const button_search = document.getElementById("search_button");
const load = document.querySelector(".load");
const loadRandom = document.querySelector(".load-random");
const filtros = document.getElementById("filtros")
const random = document.getElementById("random-button")

// EVENT LISTENERS
document.addEventListener("DOMContentLoaded",showFilter)
button_search.addEventListener("click", sendSearch);
input.addEventListener("keypress", key);
random.addEventListener("click",randomAnime)
filtros.addEventListener("click",(e)=>{
	document.querySelector(".filtros").classList.toggle('show-filtro')
	
})
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
	ui.setFilter()
}

async function randomAnime(e){
	e.preventDefault()
	loadRandom.classList.add("show")
	const page = Math.floor(Math.random() * 10) + 1;
	console.log(page)
	const result= await api.random(page)
	const animes = []
	// mezclando el array
	while(result.top.length !== 0){
		let randomIndex = Math.floor(Math.random() * result.top.length)
		animes.push(result.top[randomIndex])
		result.top.splice(randomIndex,1)
	}
	ui.showRandom(animes.slice(0, 3))

}