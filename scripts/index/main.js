let indiceSlide = 0;

function mudarSlide(n) {
    let slides = document.querySelectorAll('.slide');
    let container = document.querySelector('.container-slides');

    indiceSlide += n;
    if (indiceSlide >= slides.length) indiceSlide = 0;
    if (indiceSlide < 0) indiceSlide = slides.length - 1;

    let deslocamento = -indiceSlide * 100; // Move os slides
    container.style.transform = `translateX(${deslocamento}%)`;
}


// setInterval(() => mudarSlide(1), 5000);