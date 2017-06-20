var player = new Player([200, 200]);
var blocks = [];
blocks.push(new Block({ pos: [200, 220] }));
blocks.push(new Block({ pos: [180, 200] }));
blocks.push(new Block({ pos: [220, 200] }));

var update = function() {
  for(var i = 0; i < blocks.length; i++) {
    player.collideBlock(blocks[i]);
    blocks[i].draw();
  }
  player.display();
};
var tick = function() {

};
document.addEventListener("DOMContentLoaded", function(event) { 
  setInterval(update, 17);
  //setInterval(tick, 100);
};
