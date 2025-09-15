import type { GiphyResponse } from "./data/giphy.response";
const API_KEY = 'GIfAFFPyvlqPphvRsFs6QjJKYlI6n4U6';

const peticion = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

const createimgInDOM = (url: string) => {
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
}

peticion.then( resp => resp.json())
.then(({ data }: GiphyResponse) => {
    const imageUrl = data.images.original.url;
    createimgInDOM(imageUrl);
})
.catch((err)=> {
    console.warn('Error en la petición', err);
})
