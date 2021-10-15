class Moon {
  constructor(y) {
    this.y = y;
  }
  draw() {
    fill("white");
    circle(225, this.y, 3000);
  }
  move() {
    this.y = this.y + 5;
  }
}
