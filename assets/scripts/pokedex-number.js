var interval_num;
var number=0;

var MAX_POKEDEX=898;
var REPETING=10;


 

function changing_number() {
    var pok=String(parseInt(Math.random()*898));
    if (pok.length==1) {pok="00"+pok}
    if (pok.length==2) {pok="0"+pok}

    document.getElementById("number").innerHTML=pok;

    number++;

    if (number>REPETING) {
        clearInterval(interval_num)
        document.getElementById("generate").style="visibility:visible;"
    }
}