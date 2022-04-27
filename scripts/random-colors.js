let counterid = 0
function generator () {
  counterid = (1+counterid);
  var bar = document.createElement("div");
  bar.id = (counterid);
  bar.classList.add('bg'+(Math.floor(Math.random() * 6)));
  bar.classList.add('wit');
  document.getElementById("start").appendChild(bar);
  bar.scrollIntoView();
};
setInterval(generator, 100);