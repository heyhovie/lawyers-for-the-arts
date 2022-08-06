var i = 0;
function change() {
  var doc = document.getElementById("carousel");
  var className = ["url('images2/feature1dark.png')", "url('images2/feature2dark.png')", "url('images2/feature3dark.png')"];
  doc.style.backgroundImage = className[i];
  i = (i + 1) % className.length;
}
function bgSwitch(){
  setInterval(change, 5000);
}
