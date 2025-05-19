// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

  // Obtiene el botón de retroceso (previo)
  const prevButton = document.querySelector('.prev');

  // Obtiene el botón de avance (siguiente)
  const nextButton = document.querySelector('.next');

  // Selecciona el contenedor que tiene las imágenes del carrusel
  const carouselImages = document.querySelector('.carousel-images');

  // Selecciona todas las imágenes (enlaces) dentro del carrusel
  const slides = document.querySelectorAll('.carousel-images a');

  // Índice actual de la imagen que se está mostrando
  let currentIndex = 0;

  // Función para obtener dinámicamente el ancho de una imagen
  function getImageWidth() {
    return slides[0].clientWidth; // dinámico y confiable
  }

  // Actualiza la posición del carrusel según el índice actual
  function updateCarouselPosition() {
    const offset = -currentIndex * getImageWidth(); // calcula el desplazamiento
    carouselImages.style.transform = `translateX(${offset}px)`; // mueve el carrusel
  }

  // Evento al hacer clic en el botón "anterior"
  prevButton.addEventListener('click', () => {
    // Si está en la primera imagen, salta a la última; si no, retrocede una
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateCarouselPosition(); // actualiza la posición del carrusel
  });

  // Evento al hacer clic en el botón "siguiente"
  nextButton.addEventListener('click', () => {
    // Si está en la última imagen, vuelve a la primera; si no, avanza una
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateCarouselPosition(); // actualiza la posición del carrusel
  });

  // Evento que se ejecuta al redimensionar la ventana del navegador
  window.addEventListener('resize', updateCarouselPosition);
});
