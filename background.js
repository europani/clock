const sbody = document.querySelector("body");

const IMG_NUMBER = 3;


function paintBackground(number) {
    const image = new Image();
    image.src = `${number}.jpg`;
    image.classList = "image";
    sbody.appendChild(image);
}

function getRandom() {
    let randomNumber = Math.ceil(Math.random()*IMG_NUMBER);
    paintBackground(randomNumber);
}

function init() {
    getRandom();
}

init();
