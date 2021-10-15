class Bullet {
  constructor(L, K) {
    this.y = K
    this.x = L
  }

  draw() {
    rect(this.x, this.y, 6, 20);
  }
  move() {
    this.y = this.y - 50;
  }
  start() {
    if (fire) {
      bullet = new Bullet();
      bullet.draw()
    }
  }
}
