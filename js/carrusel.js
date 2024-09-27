let currentSlide = 0;

function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    if (slideIndex >= totalSlides) {
        currentSlide = 0;
    } else if (slideIndex < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = slideIndex;
    }

    slides.forEach((slide, index) => {
        slide.style.display = (index === currentSlide) ? 'block' : 'none';
    });
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

setInterval(() => {
    moveSlide(1);
}, 3000);

showSlide(currentSlide);