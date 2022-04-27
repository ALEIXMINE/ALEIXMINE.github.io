function add() {
    let calc=document.getElementById("r")
    NUMBER_1 = parseInt(document.getElementById("n1").value);
    NUMBER_2 = parseInt(document.getElementById("n2").value);
    calc.value = NUMBER_1+NUMBER_2;
};

function substract() {
    let calc=document.getElementById("r")
    NUMBER_1 = parseInt(document.getElementById("n1").value);
    NUMBER_2 = parseInt(document.getElementById("n2").value);
    calc.value = NUMBER_1-NUMBER_2;
};


function division() {
    let calc=document.getElementById("r")
    NUMBER_1 = parseInt(document.getElementById("n1").value);
    NUMBER_2 = parseInt(document.getElementById("n2").value);
    calc.value = NUMBER_1/NUMBER_2;
};