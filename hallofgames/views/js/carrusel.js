const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselImages = document.querySelector('.carousel-images');
const totalImages = document.querySelectorAll('.carousel-images img').length;
let currentIndex = 0;

// Tamaño fijo: 500px de imagen + 20px de márgenes
const imageWidth = 500;

prevButton.addEventListener('click', () => {
  if (currentIndex === 0) {
    currentIndex = totalImages - 1;
  } else {
    currentIndex--;
  }
  updateCarouselPosition();
});

nextButton.addEventListener('click', () => {
  if (currentIndex === totalImages - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateCarouselPosition();
});

function updateCarouselPosition() {
  const offset = -currentIndex * imageWidth;
  carouselImages.style.transform = `translateX(${offset}px)`;
}
