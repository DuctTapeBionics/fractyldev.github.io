class Entity {
    constructor(config){
      this.pos = config.pos || [config.x, config.y];//Position
      this.vel = [0, 0];//Velocity

      this.width = config.width || 20;//Physical width
      this.height = config.height || 20;//Physical height

      this.damage = config.damage || 1;//Base damage for all attacks
      this.damageMult = config.damageMult || 1;//Damage multiplier

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
    }

    moveLeft() {
        this.vel[0] -= this.getSpeed();//Simply adjust the entity's velocity
    } //Moves the entity to the left
    moveRight() {
        this.vel[0] += this.getSpeed();//Simply adjust the entity's velocity
    } //Moves the entity to the right
    jump() {
        if(this.canJump) {//If the entity can jump...
            this.vel[1] = -this.getJump();//...apply the velocity change
        }
    } //Causes the entity to jump
    damage() {
        this.health -= (piercing ?
        damage : //If the damage is piercing, don't modify it and just subtract
        Math.max(1, damage - this.getArmor())); //If it is normal damage, modify the final damage based on the entity's armor
    } //Deals a certain amount of damage to the entity
    getArmor() {
        return this.armor * this.armorMult;
    } //Gets the entity's true armor value
    getSpeed() {
        return this.speed * this.speedMult;
    } //Gets the entity's true speed
    getJump() {
        return this.jumpStrength * this.jumpMult;
    } //Gets the entity's true jump strength
    getDamage() {
        return this.damage * this.damageMult;
    }
    draw() {
        if(ctx) {
            ctx.beginPath();
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(this.pos[0] - this.width/2, this.pos[1] - this.height/2, this.width, this.height);
            ctx.fill();
        }
    }
    update() {
        this.pos = vectAdd(this.pos, this.vel);//Adjust position based on velocity
        this.vel[1] += 0.4;
        this.vel[0] *= 0.94;
        this.vel[1] *= 0.99;//Apply friction
        this.canJump = false;//Reset canJump variable for next frame
    }
    display() {
        if(this.move) this.move();
        this.update();
        this.draw();
    }
    collideBlock() {
        if(colliding(this.pos[0], this.pos[1], this.width, this.height, that.pos[0], that.pos[1], that.width, that.height)) {
            if(Math.abs(this.pos[0] - that.pos[0])/(this.width + that.width) < Math.abs(this.pos[1] - that.pos[1])/(this.height + that.height)) {
                if(this.pos[1] - that.pos[1] < 0 && this.vel[1] >= 0) {
                    this.canJump = true;
                    this.pos[1] = that.pos[1] - that.height/2 - this.height/2;
                    this.vel[1] = 0
                }
                if(this.pos[1] - that.pos[1] > 0 && this.vel[1] < 0) {
                    this.pos[1] = that.pos[1] + that.height/2 + this.height/2;
                    this.vel[1] = 0;
                }
            }
            if(Math.abs(this.pos[0] - that.pos[0])/(this.width + that.width) > Math.abs(this.pos[1] - that.pos[1])/(this.height + that.height)) {
                if(Math.abs(this.pos[1] - that.pos[1]) * 2 < (this.height + that.height) * 4/5 || Math.abs(this.pos[0] - that.pos[0]) * 2 < (this.width + that.width) * 4/5) {
                    if(this.pos[0] - that.pos[0] < 0 && this.vel[0] > 0) {
                         this.pos[0] = that.pos[0] - that.width/2 - this.width/2;
                         this.vel[0] = 0;
                    }
                    if(this.pos[0] - that.pos[0] > 0 && this.vel[0] < 0) {
                        this.pos[0] = that.pos[0] + that.width/2 + this.width/2;
                        this.vel[0] = 0;
                    }
                }
            }
        }
    }
};
