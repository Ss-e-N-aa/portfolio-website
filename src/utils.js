export function getImageUrl(path) {
    return new URL(`/assets/${path}`, import.meta.url).href;
}

/* 
this takes the base url of the website , appending the relative path to it 
passing back wtvr the url is , this is to dynamically import images into components.
*/