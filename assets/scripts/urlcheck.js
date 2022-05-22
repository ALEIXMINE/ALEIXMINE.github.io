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
          console.log("Status 200: Page is up!");
        },
        400: function (response) {
          console.log("Status 400: Page is down.");
        },
        0: function (response) {
          console.log("Status 0: Page is down.");
        },
      },
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }