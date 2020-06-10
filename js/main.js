import * as Api from "/js/api.js";

// VARIABLES
const api = new Api.Api();
let input = document.getElementById("search");
let button_search = document.getElementById("search_button");
let inicio_imagenes = document.querySelector(".inicio_imagenes");

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
	showSearchResults(animes.results);
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

function showSearchResults(animes) {
    let html = ''
    animes.forEach(anime => {
        html += `
        <div class="search_result">
            <span>${anime.title}</span>
            <img src="${anime.image_url}" alt="">
            <ul class="features_anime">
                <li>episodes: ${anime.episodes}</li>
                <li>airing: ${anime.airing}</li>
                <li>score: ${anime.score}</li>
            </ul>
        </div>`
    });
    inicio_imagenes.innerHTML = html
}
