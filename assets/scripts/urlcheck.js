var URLB="";
function URL_CHECK() {
    var URL = document.getElementById("input").value;
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

    if (URL=="") {console.log("Inserte un enlace!")} else {
      URL=URL.replace("https://","")
      URL="https://"+URL
      document.getElementById("output").value="Cargando..."
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
    }
  }

function GO_URL () {
  window.open(URLB)
}