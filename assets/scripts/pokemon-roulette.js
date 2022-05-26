var interval_num;
var MAX_POKEDEX=898;
var REPETING=2;
var COUNTER=0;

function change(){
    var bolas = document.getElementsByClassName("bolas");
    for(var i = 0; i < bolas.length; i++){
        var number=String(parseInt(Math.random()*MAX_POKEDEX));
        if (number.length==1) {number="00"+number}
        if (number.length==2) {number="0"+number}
        var url = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+number+".png";
        bolas[i].innerHTML = `<img src="${url}" alt="pokemon" style="width:100%">`;
    }
    console.log(COUNTER);
    COUNTER++;
    console.log(COUNTER);
    if (COUNTER>REPETING) {
        clearInterval(interval_num)
        stop();
    }
}

function stop() {
    var bolas1 = document.getElementsByClassName("bolal");
        var bolas2 = document.getElementsByClassName("bola");
        for(var i = 0; i < bolas1.length; i++){
            bolas1[i].style="visibility:hidden;";
            bolas2[i].style="visibility:hidden;";
        }
    document.getElementsByClassName("centro")[0].style="";
    document.getElementsByClassName("rueda")[0].style="";
    document.getElementById("start").style="visibility:visible;";
}

function start() {
    COUNTER=0;
    console.log("Parado y listo para empezar");
    interval_num=setInterval(change,1000)
    var bolas=document.getElementsByClassName("bolas");
    document.getElementsByClassName("rueda")[0].style="animation: rotador 3s linear infinite;";
    for(var i = 0; i < bolas.length; i++){
        bolas[i].style="animation: rrotador 3s linear infinite;";
        if (i==3) {bolas[i].style="animation: rrotador 3s linear infinite;margin-left: 0%;";}
        if (i==1) {bolas[i].style="animation: rrotador 3s linear infinite;margin-top: -2%;";}
    }
    document.getElementById("start").style="visibility:hidden;";
}

function starting_web () {
    var bolas = document.getElementsByClassName("bolas");
    for(var i = 0; i < bolas.length; i++){
        var number=String(parseInt(Math.random()*MAX_POKEDEX));
        if (number.length==1) {number="00"+number}
        if (number.length==2) {number="0"+number}
        var url = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+number+".png";
        bolas[i].innerHTML = `<img src="${url}" alt="pokemon" style="width:100%">`;
    }
}
 
starting_web();