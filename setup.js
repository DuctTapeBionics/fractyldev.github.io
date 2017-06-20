function setup() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  if(window.innerWidth/window.innerHeight < 1.2) {
    canvas.width  = window.innerWidth;
    canvas.height = 5/6 * window.innerWidth;
  }
  else {
    canvas.width  = 6/5 * window.innerHeight;
    canvas.height = window.innerHeight;
  }
}
document.addEventListener("DOMContentLoaded", function(event) { 
  setup();
});//When the document is loaded, resize the canvas
