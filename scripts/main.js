var player = new Player([200, 200]);

buildLevel("000");

var update = function() {
  ctx.beginPath();
  ctx.fillStyle = "#FFF";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fill();
  for(var i = 0; i < blocks.length; i++) {
    player.collideBlock(blocks[i]);
    blocks[i].draw();
  }
  player.display();
};
var tick = function() {

};
setInterval(update, 17);
