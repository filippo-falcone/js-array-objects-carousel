/*
// Creo una funzione che crea gli elemeni nel dom che vanno popolati
// Metto in ascolto l'elemento del dom
// - All'incrementare dell'indice tolgo la classe 'd-none' per le slide e aggiungo la classe 'ms-border' alle thumbnails
// Riperto l'operazione anche per il secondo elemento del dom
*/

/* MATERIALS */
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

stampSlideAndThumbnails(images);

/* FUNCTIONS */
// Funzione che crea le slide
// img: elemento che rappresenta la chiave dell'oggetto
// title: elemento che rappresenta la chiave dell'oggetto
// text: elemento che rappresenta la chiave dell'oggetto
// return: elemento del DOM che rappresenta una slide
function generateSlide(img, title, text) {
    const slideContainer = document.querySelector('#slide-container');
    slideContainer.innerHTML += `
        <div class="d-none ms-slide position-relative">
            <img src="${img}">
            <div class="position-absolute bottom-0 text-end text-light px-4 w-100">
                <h1>${title}</h1>
                <p>${text}</p>
            </div>
        </div>`
    return slideContainer;
}

// Funzione che crea le thumbnails
// img: elemento che rappresenta la chiave dell'oggetto
// return: elemento del DOM che rappresenta una thumbnails
function generateThumbnails(img) {
    const thumbnailsContainer = document.querySelector('#thumbnails-container');
    thumbnailsContainer.innerHTML += `
        <div class="ms-thumbnails col p-0">
            <img src="${img}">
        </div>`
    return thumbnailsContainer;
}

// Funzione che stampa gli elementi nel dom
// array: elemento che rappresenta un array
function stampSlideAndThumbnails(array) {
    array.forEach((object) => {
        const keyImage = object.image;
        const keyTitle = object.title;
        const keyText = object.text;
        generateSlide(keyImage, keyTitle, keyText);
        generateThumbnails(keyImage);
    });
}