export class Interfaz{
    showSearchResults(animes) {
        let inicio_imagenes = document.querySelector(".inicio_imagenes");
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
}