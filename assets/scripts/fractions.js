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