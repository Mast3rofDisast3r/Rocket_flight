class Comet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.live = 2;
  }

  draw() {
    rect(this.x, this.y, 45);
  }
  move() {
    this.y = this.y + 5;
  }
  colliderocket(rocket) {
    if (
      this.y <= rocket.y + 100 &&
      this.y + 40 >= rocket.y &&
      this.x <= rocket.x + 45 &&
      this.x + 40 >= rocket.x
    ) {
      this.y += 1000;
      //console.log(">-MISSION-FAILED-<");a
      score -= 20;
      hit = true;
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
      this.y += 10000
      bullet.x += 1000
      score += 30
    }
  }
}
