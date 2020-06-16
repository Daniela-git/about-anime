import * as Api from "./api.js";
import * as Interfaz from "./ui.js";

// VARIABLES
const api = new Api.Api();
const ui = new Interfaz.Interfaz();
const input = document.querySelector(".searchbar_input");
const button_search = document.querySelector(".searchbar_button");
const load = document.querySelector(".searchbar_load");
const loadRandom = document.querySelector(".random_part_load");
const filtros = document.getElementById("filters");
const random = document.querySelector(".random_part_button");
const filter_button = document.querySelector('.filters_button')

// EVENT LISTENERS
document.addEventListener("DOMContentLoaded", showFilter);
filter_button.addEventListener('click', callFilter)
button_search.addEventListener("click", sendSearch);
input.addEventListener("keypress", key);
random.addEventListener("click", randomAnime);
filtros.addEventListener("click", (e) => {
	document.querySelector(".filters").classList.toggle("show_filters");
});

// FUNCIONES
async function sendSearch(e) {
	e.preventDefault();
	load.classList.add("show_load");
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

function showFilter(e) {
	ui.setFilter();
}

async function randomAnime(e) {
	e.preventDefault();
	loadRandom.classList.add("show_load");
	const page = Math.floor(Math.random() * 10) + 1;
	console.log(page);
	const result = await api.random(page);
	const animes = [];
	result.top.sort(() => {
		Math.floor(Math.random() * result.top.length);
	});
	ui.showRandom(result.top.slice(0, 3));
}

export function callFilter(){
	const selects= document.querySelectorAll('select')
	let selectesOptions = []
	selects.forEach((select)=>{
		selectesOptions.push(select.options[select.selectedIndex].value)
		
	})
	return selectesOptions
 }