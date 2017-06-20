var Entity = function() {
  this.pos = config.pos || [config.x, config.y];//Position
  this.vel = [0, 0];//Velocity
  
  this.width = config.width || 20;//Physical width
  this.height = config.height || 20;//Physical height
  
  this.damage = config.damage || 1;//Damage multiplier for any weapons or attacks
  this.damageMult = config.damageMult || 1;
  
  this.health = config.health || 1000;//Current health
  this.maxHealth = config.health || 1000;//Health cap
  this.maxHealthMult = config.healthMult || 1;//Health multiplier
  
  this.armor = config.armor || 25;//All hits' damage is reduced to Math.max(damage - armor, 1)
  this.armorMult = config.armorMult || 1;//Armor multiplier
  
  this.statusEffects = [];//Array of the entity's status effects (and their durations), such as poisoned, burning, etc.
  
  this.canJump = false;//Whether the entity can jump this frame
  this.jumpStrength = config.jump || 7.4;//Total velocity added by jumping
  this.jumpMult = config.jumpMult || 1;//Jump strength multiplier
  
  this.speed = config.speed || 0.35;//Velocity change per frame when moving
  this.speedMult = config.speedMult || 1;//Speed multiplier
};
Entity.prototype.moveLeft = function() {
  this.vel[0] -= this.getSpeed;//Simply adjust the entity's velocity
};//Moves the entity to the left
Entity.prototype.moveRight = function() {
  this.vel[0] += this.getSpeed;//Simply adjust the entity's velocity
};//Moves the entity to the right
Entity.prototype.jump = function() {
  if(this.canJump) {//If the entity can jump...
    this.vel[1] = -this.getJump();//...apply the velocity change
  }
};//Causes the entity to jump
Entity.prototype.damage = function(damage, piercing) {
  this.health -= (piercing ?
    damage : //If the damage is piercing, don't modify it and just subtract
    Math.max(1, damage - this.getArmor())); //If it is normal damage, modify the final damage based on the entity's armor
};//Deals a certain amount of damage to the entity
Entity.prototype.getArmor = function() {
  return this.armor * this.armorMult;
};//Gets the entity's true armor value
Entity.prototype.getSpeed = function() {
  return this.speed * this.speedMult;
};//Gets the entity's true speed
Entity.prototype.getJump = function() {
  return this.jumpStrength * this.jumpMult;
};//Gets the entity's true jump strength
Entity.prototype.getDamage = function() {
  return this.damage * this.damageMult;
};
Entity.prototype.draw = function() {
  if(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "#FFF";
    ctx.fillRect(this.pos[0] - this.width/2, this.pos[1] - this.height/2, this.width, this.height);
    ctx.fill();
  }
};
