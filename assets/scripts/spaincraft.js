$(document).ready(function() {
    let mods_forge = document.getElementsByClassName("forge-mods")[0];
    mods_forge.addEventListener("click", function(){
      window.open("https://files.minecraftforge.net/net/minecraftforge/forge/index_1.12.2.html");
    })
    let mods_forge_download = document.getElementsByClassName("download-forge-mods")[0];
    mods_forge_download.addEventListener("click", function(){
      window.location.replace("https://www.dropbox.com/s/v58547qaksb1tb3/InstaladorModsEspa%C3%B1aCraft.exe?dl=1")
    })
  });