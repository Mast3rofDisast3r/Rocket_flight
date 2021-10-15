class Weapon {
  constructor() {
  this.x = rocket.x + 20
  this.y = rocket.y - 30
  this.cooldown = 30
  
    
  }
  draw() {
    fill("gray")
    rect(this.x, this.y, 10, 30)
  }
  move() {
  this.x = rocket.x + 20
  this.y = rocket.y - 30
  } 
}

