

function congratulations() {
    var NAME = atob(window.location.search.replace("?n=", ""));
    var Whatsapp = document.getElementById("ButtonWhatsapp")
    if (NAME == "") { } else {
        document.title = "Felicidades!";
        document.getElementById("ItemName").innerHTML = (NAME + ' te desea unas buenas navidades!');
        document.getElementById("ItemButton").remove();
        Whatsapp.innerHTML = "Enviar"
    }
};

function Send() {
    var Whatsapp = document.createElement("button");
    var name = document.getElementById("NameBox").value;
    var CopyButton = document.createElement("button");
    var DelGen = document.getElementById("GetName");
    CopyButton.innerHTML = "Copiar";
    CopyButton.setAttribute('onclick', "CopyText()");
    CopyButton.setAttribute('class', "blue");
    Whatsapp.innerHTML = "Enviar por Whatsapp";
    Whatsapp.setAttribute('onclick', "SendWhatsapp()");
    Whatsapp.setAttribute('class', "lime");
    if (name == 'Inserte tu nombre') { } else {
        DelGen.remove()
        document.body.appendChild(Whatsapp);
        document.body.appendChild(CopyButton);
    }
};

function CopyText() {
    var copyText = document.getElementById("NameBox");
    OldValue = copyText.value;
    NewValue = ("Entra a este enlace! https://aleixmine.github.io/web/christmas/receive?n="+btoa(OldValue));
    copyText.value = NewValue;
    var copyText = document.getElementById("NameBox");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    copyText.value = OldValue;
  };


function SendWhatsapp() {
    var name = document.getElementById("NameBox").value;
    window.location.replace('whatsapp://send?text=Entra a este enlace! https://aleixmine.github.io/web/christmas/receive?n='+btoa(name));
};