class Rocket {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.live = 3;
    this.speed = 0;
  }

  draw() {
    
    if (this.live == 3) {
      fill("limegreen");
      rect(this.x, this.y, 50, 100);
    } else if (this.live == 2) {
      fill("orange");
      rect(this.x, this.y, 50, 100);
    } else if (this.live == 1) {
      fill("red");
      rect(this.x, this.y, 50, 100);
    } else if(this.live == 4) {
      fill ("green")
      rect(this.x, this.y, 50, 100)
    } else if(this.live == 5) {
      fill ("darkgreen")
      rect(this.x, this.y, 50, 100)
    } else if(this.live == 6) {
      fill ("#28351f")
      rect(this.x, this.y, 50, 100)
    } else if(this.live == 7) {
      fill ("#0a0c09")
      rect(this.x, this.y, 50, 100)
    } else if(this.live >= 8) {
      fill ("blue")
      rect(this.x, this.y, 50, 100)
    }
  }

  move() {
    this.x += this.speed;
  }
  moveLeft() {
    this.speed = -5;
  }
  moveRight() {
    this.speed = 5;
  }
  stop() {
    this.speed = 0;
  }
}
