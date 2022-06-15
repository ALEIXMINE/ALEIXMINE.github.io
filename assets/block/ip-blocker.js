const DATA=[];
// Add this
function check_block () {
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
          window.location.replace("https://aleixmine.github.io/blocked")
        }
      }
  });
};
check_block()
setInterval(check_block,200)