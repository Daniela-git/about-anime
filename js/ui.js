export class Interfaz {
	showSearchResults(animes) {
		const main = document.querySelector(".results");
		const load = document.querySelector(".searchbar_load");
		const search = document.querySelector(".searchbar");
		let html = "";
	// vemos si hay o no resultados para saber que mostrar
		if (animes.length == 0) {
			let msg = document.createElement("h1");
			msg.innerHTML = "Sorry I can't find it";
			msg.id = "msg";
			search.appendChild(msg);
			load.classList.remove("show_load");
			setTimeout(() => {
				document.getElementById("msg").remove();
			}, 1500);
		} else {
			animes.forEach((anime) => {
				html += `
				<div class="result">
					<span>${anime.title}</span>
					<img src="${anime.image_url}" alt="">
					<ul class="features_anime">
						<li>episodes: ${anime.episodes}</li>
						<li>airing: ${anime.airing}</li>
						<li>score: ${anime.score}</li>
					</ul>
				</div>`;
			});
			load.classList.remove("show_load");
			main.innerHTML = html;
		}
	}
	showRandom(animes) {
		const main = document.querySelector(".results");
		const loadRandom = document.querySelector(".random_part_load");
		let html = "";
		animes.forEach((anime) => {
			html += `
			<div class="result">
			<span>${anime.title}</span>
			<img src="${anime.image_url}" alt="">
			<ul class="features_anime">
				<li>episodes: ${anime.episodes}</li>
				<li>type: ${anime.type}</li>
				<li>score: ${anime.score}</li>
			</ul>
		</div>`;
		});
		loadRandom.classList.remove("show");
		main.innerHTML = html;
	}
	setFilter() {
		// se eligen cada uno de los selects y la lista que se va a usar para llenarlos
		const genres = document.querySelector(".genres-select");
		const generos = this.allGeners();
		const years = document.querySelector(".seasons_select_years");
		const anios = this.allYears();
		const seasons = document.querySelector(".seasons_select_type");
		const temporada = ["Fall", "Sumer", "Spring", "Winter"];
		// mandamos la información necesaria para que se creen las opciones
		this.setOptions(genres, generos);
		this.setOptions(years, anios);
		this.setOptions(seasons, temporada);
	}
	setOptions(element, list) {
		for (let i = 0; i < list.length; i++) {
			let option = document.createElement("option");
			option.value = i + 1;
			option.innerHTML = list[i];
			element.appendChild(option);
		}
	}
	allYears() {
		let anios = [];
		const max = new Date().getFullYear();
		const min = max - 61;
		for (let i = max; i > min; i--) {
			anios.push(i);
		}
		return anios;
	}
	allGeners() {
		let genres = [
			"Action",
			"Adventure",
			"Cars",
			"Comedy",
			"Dementia",
			"Demons",
			"Mystery",
			"Drama",
			"Ecchi",
			"Fantasy",
			"Game",
			"Hentai",
			"Historc",
			"Horror",
			"Kids",
			"Magic",
			"Martial Arts",
			"Mecha",
			"Music",
			"Parody",
			"Samurai",
			"Romance",
			"School",
			"Sci Fi",
			"Shoujo",
			"Shoujo Ai",
			"Shounen",
			"Shounen Ai",
			"Space",
			"Sports",
			"Super Power ",
			"Vampire",
			"Yaoi",
			"Yuri",
			"Harem",
			"Slice Of Life",
			"Supernatural",
			"Military",
			"Police",
			"Psychological",
			"Thriller",
			"Seinen",
			"Josei",
		];
		return genres;
	}
}
