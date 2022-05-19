function convert_t_b() {
    var input = document.getElementById("input").value;
    document.getElementById("output").value = btoa(input);
}
function convert_b_t() {
    var input = document.getElementById("input").value;
    document.getElementById("output").value = atob(input);
}




function hash(string) {
    const utf8 = new TextEncoder().encode(string);
    return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray
        .map((bytes) => bytes.toString(16).padStart(2, '0'))
        .join('');
      return hashHex;
    });
  }








function convert_t_hash() {
    var input = document.getElementById("input").value;
    document.getElementById("output").value = hash(input);
}