let slideIndex = 0;
$(function () {
  showSlides();
  //set example net images for all imgId img1, img2, img3, img4
  $("img[imgId='img1']").attr("src", "https://via.placeholder.com/150");
  $("img[imgId='img2']").attr("src", "https://via.placeholder.com/150");
  $("img[imgId='img3']").attr("src", "https://via.placeholder.com/150");
  $("img[imgId='img4']").attr("src", "https://via.placeholder.com/150");

  //set example net images for all imgId prod1, prod2, prod3, prod4
  $("img[imgId='prod1']").attr("src", "https://via.placeholder.com/150");
  $("img[imgId='prod2']").attr("src", "https://via.placeholder.com/150");
  $("img[imgId='prod3']").attr("src", "https://via.placeholder.com/150");
  $("img[imgId='prod4']").attr("src", "https://via.placeholder.com/150");

  //set example net images for all imgId related1, related2, related3
  $("img[imgId='related1']").attr("src", "https://via.placeholder.com/150");
  $("img[imgId='related2']").attr("src", "https://via.placeholder.com/150");
  $("img[imgId='related3']").attr("src", "https://via.placeholder.com/150");
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
