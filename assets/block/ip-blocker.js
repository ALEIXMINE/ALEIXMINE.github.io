const DATA=[];
// Add this 
$.get('https://aleixmine.github.io/assets/block/ip-blacklist.txt', function(data) {
data = data.split('\n')
for (let d in data) {DATA.push(data[d].replace("\r",""));}
});

$.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
    data = data.trim().split('\n').reduce(function(obj, pair) {
      pair = pair.split('=');
      return obj[pair[0]] = pair[1], obj;
    }, {});
    for (let ip of DATA) {
      if (data["ip"] == ip) {
        document.write(`<h1 style="text-align:center;">IP Blocked</h1>`);
      }
    }
});