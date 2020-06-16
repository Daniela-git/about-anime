export class Interfaz {
	showSearchResults(animes) {
		let inicio_imagenes = document.querySelector(".inicio_imagenes");
		let load = document.querySelector(".load");
		let search = document.querySelector(".search");
		let html = "";
		if (animes.length == 0) {
			let msg = document.createElement("h1");
			msg.innerHTML = "Sorry I can't find it";
			msg.id = "msg";
			search.appendChild(msg);
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
			load.classList.remove("show");
			inicio_imagenes.innerHTML = html;
		}
	}
	showRandom(animes) {
		let inicio_imagenes = document.querySelector(".inicio_imagenes");
		let loadRandom = document.querySelector(".load-random");
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
		inicio_imagenes.innerHTML = html;
	}
	setFilter() {
		// se eligen cada uno de los selects y la lista que se va a usar para llenarlos
		const genres = document.getElementById("genres");
		const generos = this.allGeners();
		const years = document.getElementById("years");
		const anios = this.allYears();
		const seasons = document.getElementById("seasons");
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
