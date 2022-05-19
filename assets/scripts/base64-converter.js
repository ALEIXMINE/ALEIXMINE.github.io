function convert_t_b() {
    var input = document.getElementById("input").value;
    document.getElementById("output").value = btoa(input);
}
function convert_b_t() {
    var input = document.getElementById("input").value;
    document.getElementById("output").value = atob(input);
}