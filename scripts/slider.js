let slideIndex = 0;
$(function () {
  showSlides();
});
function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Ocultar todas las diapositivas
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Quitar la clase "active" de todos los puntos de navegación
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Mostrar la diapositiva actual
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";

  // Incrementar el índice de la diapositiva
  slideIndex++;

  // Reiniciar el índice si excede la cantidad de diapositivas
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  // Cambiar a la siguiente diapositiva después de 2 segundos
  setTimeout(showSlides, 4000);
}
