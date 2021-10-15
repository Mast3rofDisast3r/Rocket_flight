let rocket;
//let comet;
let earth;
let moon;
let hit;
let score = 0;
let X = 205;
let Y = 1;
let cometarray = [];
let H = 0;
let weapon;
let fire;
let bullet;
let Lvl = 1;
let MGTokenHit = false;
let mgtoken;
let healthtoken;
let HealthTokenHit = false;
let ShieldTokenHit = false
let shieldtoken
let U = 0


function setup() {
  createCanvas(500, 800);
  rocket = new Rocket(200, 660);
  earth = new Earth();
  moon = new Moon(-20800);
  //comet = new Comet(205, -55);
  weapon = new Weapon();
  bullet = new Bullet(weapon.x + 2, weapon.y);
  mgtoken = new MGToken(random(0, 450), random(-155, -2000));
  healthtoken = new HealthToken(random(0, 450), random(-2000, -4000));
  shieldtoken = new ShieldToken(random(0,450), random(-1000, -3000))
  frameRate(60);
  textSize(30);
  textAlign(CENTER);
  for (var i = 0; i < 25; i++) {
    append(
      cometarray,
      (comet = new Comet(random(0, 450), random(-155, -4000)))
    );
  }
}

function draw() {
  if (rocket.live == 0) {
    fill("red");
    text(">-MISSION-FAILED-<", 250, 400);
    text(score, 250, 450);
    text(rocket.live, 250, 350);
    return;
  }
  background(220);
  //comet.draw();
  earth.draw();
  rocket.draw();
  weapon.draw();
  bullet.draw();
  mgtoken.draw();
  healthtoken.draw();
  shieldtoken.draw()
  fill("white");
  if (mouseIsPressed && H == 0) {
    H = 1;
    frameCount = 0;
  }

  if (H == 0) {
    text("Klicke zum Start", 250, 400);
    return;
  }

  if (hit) {
    rocket.live -= 1;
    hit = false;
  }

  if (frameCount >= 4001) {
    console.log("<-MISSION-PASSED->");
    fill("red");
    text("<-MISSION-PASSED->", 250, 400);
    text(score, 250, 450);
    text(rocket.live, 250, 350);
    return;
  }

  fill("white");
  for (var singlecomet in cometarray) {
    cometarray[singlecomet].move();
    cometarray[singlecomet].draw();
    cometarray[singlecomet].colliderocket(rocket);
    cometarray[singlecomet].collidebullet(bullet);
    if (cometarray[singlecomet].isOutsideCanvas()) {
      cometarray[singlecomet] = new Comet(random(0, 450), random(-155, -4000));
    }
    moon.draw();
  }
  textSize(20);
  fill("red");
  text("Objective: SURVIVE!", 250, 50);

  // comet.move();
  // comet.colliderocket(rocket);
  if (rocket.x <= 0) {
    rocket.x = 499;
  }

  if (mgtoken.y >= 5000) {
    mgtoken = new MGToken(random(0, 450), random(-155, -2000));
  }

  earth.move();
  rocket.move();
  weapon.move();
  moon.move();
  bullet.move();
  mgtoken.move();
  mgtoken.colliderocket(rocket);
  mgtoken.collidebullet(bullet);
  healthtoken.move();
  healthtoken.colliderocket(rocket);
  healthtoken.collidebullet(bullet);
  shieldtoken.move();
  shieldtoken.colliderocket(rocket);
  shieldtoken.collidebullet(bullet);
  fill("white");
  if (rocket.x >= 500) {
    rocket.x = 1;
  }

  // if (comet.isOutsideCanvas()) {
  // comet = new Comet(X, -75);
  // }
  fill("black");
  text(score, 100, 50);
  text(frameCount, 400, 50);
  fill("white");

  if (
    mouseIsPressed &&
    H == 1 &&
    weapon.cooldown <= frameCount &&
    MGTokenHit == false
  ) {
    bullet = new Bullet(weapon.x + 2, weapon.y);
    weapon.cooldown = frameCount + 60;
  } else if (
    bullet.y <= 0 &&
    MGTokenHit == true &&
    MGToken.cooldown >= frameCount
  ) {
    bullet = new Bullet(weapon.x + 2, weapon.y);
  }
  if (MGTokenHit == false) {
    MGToken.cooldown = frameCount + 300;
  }
  if (MGToken.cooldown <= frameCount) {
    MGTokenHit = false;
  }
  if (rocket.live >= 1000 && HealthTokenHit == true) {
    U += 2
  }

  if (HealthTokenHit == true) {
    rocket.live += 2;
    HealthTokenHit = false;
  }

  if (healthtoken.y >= 5000) {
    healthtoken = new HealthToken(random(0, 450), random(-2000, -4000));
  }
  if (ShieldTokenHit == false) {
    ShieldToken.cooldown = frameCount + 300;
  }
  if (ShieldToken.cooldown <= frameCount) {
    ShieldTokenHit = false;
    rocket.live = U
  }
if (ShieldTokenHit == true && ShieldToken.cooldown >= frameCount && U == 0) {
  U = rocket.live
  rocket.live += 9999999999
}
}

function keyPressed() {
  if (keyCode == 65) {
    rocket.moveLeft();
  } else if (keyCode == 68) {
    rocket.moveRight();
  } else {
    rocket.stop();
  }
}

//stroke("white")
//triangle(250, 600, 275, 700, 225, 700)
//triangle(250, 600, 225, 660, 225, 700)
//triangle(250, 600, 275, 660, 275, 700)
//triangle(250, 680, 230,725, 270, 725)
//Rakete
