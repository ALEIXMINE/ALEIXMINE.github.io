// Recuerda utilizar
// <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
let user = {location:{code:{}}}
$.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
  data = data.trim().split('\n').reduce(function(obj, pair) {
    pair = pair.split('=');
    return obj[pair[0]] = pair[1], obj;
  }, {});
  user["ip"]=data["ip"]
  user["navigator"]=data["uag"]
});
$.get('http://ip-api.com/json/?fields=66846719', function(data) {
  let city=document.getElementById("city")
  city.innerHTML=data["city"]
  user["location"]["city"]=data["city"]
  user["location"]["continent"]=data["continent"]
  user["location"]["code"]["continent"]=data["continentCode"]
  user["location"]["country"]=data["country"]
  user["location"]["code"]["country"]=data["countryCode"]
  user["currency"]=data["currency"]
  user["location"]["code"]["region"]=data["region"]
  user["location"]["region"]=data["regionName"]
  user["mobile"]=data["mobile"]
  user["company"]=data["org"]
  user["location"]["time"]=data["timezone"]
  user["system"]=navigator.oscpu
  user["lenguage"]=navigator.language
})