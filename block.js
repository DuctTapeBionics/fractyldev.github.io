var Block = function(config) {
  this.pos = config.pos || [config.x, config.y];
  
  this.width = config.width || 20;
  this.height = config.height || 20;
  
  this.health = config.health || Infinity;
  this.armor = config.armor || Infinity;
};
Block.prototype.damage = function(damage, piercing) {
  this.health -= piercing ?
    damage : //If it is piercing, just subtract the raw damage value
    Math.max(damage - this.armor, 0); //Otherwise, adjust for armor
};
Block.prototype.draw = function() {
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.fillRect(this.pos[0] - this.width/2, this.pos[1] - this.height/2, this.width, this.height);
    ctx.stroke();
};
