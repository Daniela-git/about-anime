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
                <div class="search_result">
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
	showGenres() {
		let genres = document.getElementById("genres");
        let generos = this.allGeners();
        console.log(genres)
        for (let i = 0; i  < generos.length; i++) {
            let option = document.createElement('option')
            option.value = i+1
            option.innerHTML = generos[i]
            genres.appendChild(option)
            
        }
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
        return genres
	}
}
