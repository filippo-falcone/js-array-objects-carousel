/*
// Creo una funzione che crea gli elemeni nel dom che vanno popolati
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
let active = 0;
/* BODY */
images.forEach((object) => {
    const keyImage = object.image;
    const keyTitle = object.title;
    const keyText = object.text;
    const slide = generateSlide(keyImage, keyTitle, keyText);
    const thumbnails = generateThumbnails(keyImage);
});

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
            <div class="position-absolute bottom-0 right-0 text-end text-light px-4">
                <div>${title}</div>
                <p>${text}</p>
            </div>
        </div>`
    return slideContainer;
}

// Funzione che crea le thumbnails
// img: elemento che rappresenta la chiave dell'oggetto
// return: elemento del DOM che rappresenta una thumbnails
function generateThumbnails(img) {
    const slideContainer = document.querySelector('#thumbnails-container');
    slideContainer.innerHTML += `
        <div class="ms-thumbnails col">
            <img src="${img}">
        </div>`
    return slideContainer;
}