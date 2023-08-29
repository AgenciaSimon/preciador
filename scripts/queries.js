$(function () {
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

$(document).ready(function() {

  $(document).on("keyup",function(e){
    console.log(e.key);
  });
});

/*var settings = {
    "url": "http://181.198.19.210:8090/api/Productos/productReadBarCode",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "ProductoimgId": "2800044014692"
    }),
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });*/
