var Player = function(pos) {
  Entity.call(this, {
    pos: pos,
    width: 18,
    height: 36
  });//Initialize
};
Player.prototype = Object.create(Entity.prototype);
Player.prototype.move = function() {
  if(keys[37]) this.moveLeft();//If the left arrow is pressed, move left
  if(keys[39]) this.moveRight();//If the right arrow is pressed, move right
  if(keys[38]) this.jump();//If the up arrow is pressed, jump
};
