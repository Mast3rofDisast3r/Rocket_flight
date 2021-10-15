class Earth {
  constructor() {
    this.y = 3250;
  }
  draw() {
    fill("lightblue");
    circle(225, this.y, 5000);
  }
  move() {
    this.y = this.y + 5;
  }
}
