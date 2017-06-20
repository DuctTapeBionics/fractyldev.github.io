document.addEventListener("DOMContentLoaded", function(event) { 
  var canvas = document.getElementById("canvas");
  if(window.innerWidth/window.innerHeight < 1.2) {
    canvas.width  = window.innerWidth;
    canvas.height = 5/6 * window.innerWidth;
  }
  else {
    canvas.width  = 6/5 * window.innerHeight;
    canvas.height = window.innerHeight;
  }
});//When the document is loaded, resize the canvas
