
$(function () {
    //set example net images for all id img1, img2, img3, img4
    $("img[id='img1']").attr("src", "https://via.placeholder.com/150");
    $("img[id='img2']").attr("src", "https://via.placeholder.com/150");
    $("img[id='img3']").attr("src", "https://via.placeholder.com/150");
    $("img[id='img4']").attr("src", "https://via.placeholder.com/150");

    //set example net images for all id prod1, prod2, prod3, prod4
    $("img[id='prod1']").attr("src", "https://via.placeholder.com/150");
    $("img[id='prod2']").attr("src", "https://via.placeholder.com/150");
    $("img[id='prod3']").attr("src", "https://via.placeholder.com/150");
    $("img[id='prod4']").attr("src", "https://via.placeholder.com/150");

    //set example net images for all id related1, related2, related3
    $("img[id='related1']").attr("src", "https://via.placeholder.com/150");
    $("img[id='related2']").attr("src", "https://via.placeholder.com/150");
    $("img[id='related3']").attr("src", "https://via.placeholder.com/150");
    

});

var settings = {
    "url": "http://181.198.19.210:8090/api/Productos/productReadBarCode",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "ProductoId": "2800044014692"
    }),
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });