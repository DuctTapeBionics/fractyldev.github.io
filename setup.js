function setup() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  if(window.innerWidth/window.innerHeight < 1.2) {
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = 5/6 * window.innerWidth;
  }
  else {
    ctx.canvas.width  = window.innerHeight;
    ctx.canvas.height = 5/6 * window.innerHeight;
  }
}
document.addEventListener("DOMContentLoaded", function(event) { 
  setup();
  console.log(window.innerWidth);
  console.log(window.innerHeight);
});//When the document is loaded, resize the canvas
