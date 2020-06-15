export class Api {
	async search(anime) {
		const link = `https://api.jikan.moe/v3/search/anime?q=${anime}&limit=6`;

		//esperando la respuesta
		let respuesta = await fetch(link);

		//pasando la respuesta a json
		let animes = await respuesta.json();

		return animes;
	}
	async random(page) {
		const link = `https://api.jikan.moe/v3/top/anime/${page}`;
		//esperando la respuesta
		let respuesta = await fetch(link);

		//pasando la respuesta a json
		let animes = await respuesta.json();
		return animes
	}
}
