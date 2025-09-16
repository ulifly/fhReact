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

const getRandomGif = async():Promise<string> => {
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    const { data }: GiphyResponse = await resp.json();
    return(data.images.original.url);
}

getRandomGif().then((url) => createimgInDOM(url));

