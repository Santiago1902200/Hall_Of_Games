document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const carouselImages = document.querySelector('.carousel-images');
  const slides = document.querySelectorAll('.carousel-images a');
  let currentIndex = 0;

  function getImageWidth() {
    return slides[0].clientWidth; // dinámico y confiable
  }

  function updateCarouselPosition() {
    const offset = -currentIndex * getImageWidth();
    carouselImages.style.transform = `translateX(${offset}px)`;
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateCarouselPosition();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateCarouselPosition();
  });

  // Ajuste si se redimensiona la pantalla
  window.addEventListener('resize', updateCarouselPosition);
});

