let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const totalSlides = slides.length;

// Show a specific slide
 function showSlide(index) {
            const translateValue = -(index * (100 / totalSlides));
            slidesContainer.style.transform = `translateX(${translateValue}%)`;
        }

// Called by buttons
function moveSlide(step) {
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Initialize first slide
showSlide(currentIndex);
