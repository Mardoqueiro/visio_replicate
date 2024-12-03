// Get references to the necessary DOM elements
const heroSlider = document.querySelector('.hero-slider');
const prevSlideBtn = document.querySelector('.prev-slide');
const nextSlideBtn = document.querySelector('.next-slide');
const sliderIndicators = document.querySelectorAll('.slider-indicators .indicator');

let currentSlide = 0;
const totalSlides = heroSlider.children.length;

// Function to update the slider
function updateSlider() {
  heroSlider.style.transform = `translateX(${-currentSlide * 100}%)`;

  sliderIndicators.forEach((indicator, index) => {
    if (index === currentSlide) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

// Click event handlers for the slider controls
prevSlideBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
});

nextSlideBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
});

// Click event handlers for the slider indicators
sliderIndicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentSlide = index;
    updateSlider();
  });
});

// Initialize the slider
updateSlider();