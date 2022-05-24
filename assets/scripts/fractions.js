function find_irreductible_fraction(){
    var numerator = document.getElementById("input1").value;
    var denominator = document.getElementById("input2").value;
    if(numerator == ""||denominator==""||isNaN(numerator)||isNaN(denominator)){
        console.log("Invalid operation");
    } else {
        var gcd = function gcd(a,b){
            return b ? gcd(b, a%b) : a;
          };
          gcd = gcd(numerator,denominator);
          console.log("Result: "+[numerator/gcd, denominator/gcd]);
          document.getElementById("output1").value = numerator/gcd;
          document.getElementById("output2").value = denominator/gcd;
    }
}


const gcd = (a, b) => {
    let num = 2, res = 1;
    while(num <= Math.min(a, b)){
       if(a % num === 0 && b % num === 0){
          res = num;
       };
       num++;
    };
    return res;
}

const sumFrac = (a, b) => {
    const aDenom = a[1], aNumer = a[0];
    const bDenom = b[1], bNumer = b[0];
    let resDenom = aDenom * bDenom;
    let resNumer = (aDenom*bNumer) + (bDenom*aNumer);
    const greatestDivisor = gcd(resDenom, resNumer);
    return [resNumer/greatestDivisor, resDenom/greatestDivisor];
};

const substractFrac = (a, b) => {
    const aDenom = a[1], aNumer = a[0];
    const bDenom = b[1], bNumer = b[0];
    let resDenom = aDenom * bDenom;
    let resNumer = (aDenom*bNumer) - (bDenom*aNumer);
    const greatestDivisor = gcd(resDenom, resNumer);
    return [resNumer/greatestDivisor, resDenom/greatestDivisor];
};

function add_fractions() {
    var v1 = document.getElementById("input1").value;
    var v2 = document.getElementById("input2").value;
    var v3 = document.getElementById("input3").value;
    var v4 = document.getElementById("input4").value;
    var vl = [[v1, v2], [v3, v4]];
    console.log(vl);
    var result= sumFrac(vl[0], vl[1]);
    document.getElementById("output1").value=result[0];
    document.getElementById("output2").value=result[1];
}




function substract_fractions() {
    var v1 = document.getElementById("input1").value;
    var v2 = document.getElementById("input2").value;
    var v3 = document.getElementById("input3").value;
    var v4 = document.getElementById("input4").value;
    var vl = [[v1, v2], [v3, v4]];
    console.log(vl);
    var result= substractFrac(vl[0], vl[1]);
    document.getElementById("output1").value=result[0];
    document.getElementById("output2").value=result[1];
}