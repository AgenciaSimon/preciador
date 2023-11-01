$(document).ready(function(){

    $.ajax({
    url: "scripts/promoapi.php",
    method: "GET",
    dataType: "json",
    success: function(dataC) {
        var slides = "";
        dataC.data.forEach(function(data){
            console.log(data.attributes.Promocion.data.attributes.url);
            slides += `
            <div class="slide flex justify-center content-center place-content-center">
            <img class=" flex justify-center content-center place-content-center" src="http://localhost:1337`+data.attributes.Promocion.data.attributes.url+`">
        </div>
            `;
        });

        $("#sliderContainer").html(slides);

        siguienteSlide();
    }
});

    let slideActual = 0;
    let intervalo;

    function mostrarSlide(slideIndex) {
        $('.slide').hide();
        $('.slide:eq(' + slideIndex + ')').fadeIn();
    }

    function siguienteSlide() {
        slideActual = (slideActual + 1) % $('.slide').length;
        mostrarSlide(slideActual);
    }

    function anteriorSlide() {
        slideActual = (slideActual - 1 + $('.slide').length) % $('.slide').length;
        mostrarSlide(slideActual);
    }

    function iniciarIntervalo() {
        intervalo = setInterval(siguienteSlide, 5000);
    }

    function reiniciarIntervalo() {
        clearInterval(intervalo);
        iniciarIntervalo();
    }

    mostrarSlide(slideActual);

    $('.siguiente').click(function() {
        siguienteSlide();
        reiniciarIntervalo();
    });

    $('.anterior').click(function() {
        anteriorSlide();
        reiniciarIntervalo();
    });

    iniciarIntervalo();
});

