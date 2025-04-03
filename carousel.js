let currentSlide = 0;
let slideInterval;
let isTransitioning = false; 

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-image');
    const totalSlides = slides.length;

    
    currentSlide = (index + totalSlides) % totalSlides;

    const offset = -currentSlide * 100;
    const carouselImages = document.querySelector('.carousel-images');

   
    isTransitioning = true;
    carouselImages.style.transform = `translateX(${offset}%)`;

    
    carouselImages.addEventListener('transitionend', () => {
        isTransitioning = false;
    }, { once: true });
}

function nextSlide() {
    if (!isTransitioning) {
        showSlide(currentSlide + 1);
    }
}

function prevSlide() {
    if (!isTransitioning) {
        showSlide(currentSlide - 1);
    }
}

function startAutoSlide() {
    slideInterval = setInterval(() => {
        nextSlide();
    }, 5000); // Change slide every 5 seconds
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Initialize the first slide and start auto-sliding
showSlide(currentSlide);
startAutoSlide();

// Stop auto-sliding when buttons are clicked, then restart it
document.querySelector('.carousel-btn.left').addEventListener('click', () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
});

document.querySelector('.carousel-btn.right').addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});
