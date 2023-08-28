$(function () {
    //GET JSON SETTINGS
  $.getJSON("settings.json", function (data) {
    //SET TITLE PAGE
    $("title").html(data.app_name);
    //SET FAVICON FORM LOGO ASSET
    $("link[rel='shortcut icon']").attr("href", data.app_logo);
    //SET LOGO IN HEADER IMAGE TAG
    $("img[id='logo']").attr("src", data.app_logo);
  });
});
