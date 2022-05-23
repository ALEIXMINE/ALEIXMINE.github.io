var URLB="";
function URL_CHECK() {
    var URL = document.getElementById("input").value;
    URL=URL.replace("https://","")
    URL="https://"+URL
    var settings = {
      cache: false,
      dataType: "jsonp",
      async: true,
      crossDomain: true,
      url: URL,
      method: "GET",
      headers: {
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: {
        200: function (response) {
          document.getElementById("output").value="La pagina esta encendida"
          URLB=URL
          document.getElementById("gourl").style="visibility:visible;"
        },
        400: function (response) {
          document.getElementById("output").value="La pagina esta inactiva"
        },
        404: function (response) {
          document.getElementById("output").value="Pagina no encontrada"
        },
        0: function (response) {
          document.getElementById("output").value="La pagina esta inactiva"
        },
      },
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }

function GO_URL () {
  window.open(URL)
}