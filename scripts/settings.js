$(function () {
    //GET JSON SETTINGS
  $.getJSON("settings.json", function (data) {
    //SET TITLE PAGE
    $("title").html(data.app_name);
    //SET FAVICON FORM LOGO ASSET
    $("link[rel='shortcut icon']").attr("href", data.app_logo);
    //SET LOGO IN HEADER IMAGE TAG
    $("img[id='logo']").attr("src", data.app_logo);
    //set example net images for all id img1, img2, img3, img4
    $("img[id='img1']").attr("src", "https://via.placeholder.com/150");
    $("img[id='img2']").attr("src", "https://via.placeholder.com/150");
    $("img[id='img3']").attr("src", "https://via.placeholder.com/150");
    $("img[id='img4']").attr("src", "https://via.placeholder.com/150");
  });
  
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
