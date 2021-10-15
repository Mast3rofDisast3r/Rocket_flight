class HealthToken {
  constructor (X, Y) {
    this.x = X
    this.y = Y
    this.colldown = 0
    
  }
  move() {
   this.y = this.y + 3
  }
  draw() {
  fill("lightblue")
  rect(this.x, this.y , 45, 45)
  }
   colliderocket(rocket) {
    if (
      this.y <= rocket.y + 100 &&
      this.y + 40 >= rocket.y &&
      this.x <= rocket.x + 45 &&
      this.x + 40 >= rocket.x
    ) {
      this.x = 1000;
      HealthTokenHit = true
    }
  }
  isOutsideCanvas() {
    if (this.y >= 850) {
      score += 20;
      return true;
    } else {
      return false;
    }
  }
  collidebullet(bullet) {
    if (this.y <= bullet.y + 20 &&
       this.y + 45 >= bullet.y &&
       this.x <= bullet.x + 6 &&
       this.x + 45 >= bullet.x) {
      this.x = 1000
      bullet.x += 1000
      HealthTokenHit = true
    }
  }
}