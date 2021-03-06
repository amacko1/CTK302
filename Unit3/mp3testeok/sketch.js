let cars = [];
let maxCars = 5;
let maxTimer =  5 * 60;
let timer = 0;
let frogPos ;
let img, img1, img2, img3, img4;
let state = 0;

function preload() {
  img = loadImage('assets/aerospace.png');
  img1 = loadImage('assets/bg.png');
  img2 = loadImage('assets/lost.png');
  img3 = loadImage('assets/win1.png');
  img4 = loadImage('assets/menu.png');
}

function setup() {
  createCanvas(500, 500);


  // Spawn an object

  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

    frogPos = createVector(width/2, height-100);
}

function draw() {

  switch (state) {
    case 0:
    image(img1, 0, 0, 500, 500);
    image(img4, 0, 0, 500, 500);
    fill("white");
    text("Click to Start!", 80, 400);
    textSize(20);

      break;

    case 1:
      game();
      timer++;
      if (timer > maxTimer) {
        timer = 0;
        state = 3; //lose state
      }
      break;

    case 2: //win
    image(img1, 0, 0, 500, 500);
    image(img3, 0, 0, 450, 400);
    fill("white");
    text("Click to restart!", 80, 400);
    textSize(20);
    break;

    case 3: //lose
    image(img1, 0, 0, 500, 500);
    image(img2, 0, 0, 450, 400);
    fill("white");
    text("You lost!\nClick to try again!!", 80, 400);
    textSize(18);
    break;

  }

}

function mouseReleased() {
  switch(state) {
    case 0:
    state = 1 ;
    break;

    case 2: //they won and clocked to restart
    resetTheGame();
    state = 0;
    break;

    case 3: //they lost clicked to restart
    resetTheGame();
    state = 0;
    break;
  }

}

function resetTheGame() {
  timer = 0;
  cars = [];
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

}



function game() {

  //background(0);
image(img1, 0, 0, 500, 500);

  // do some actions on the object
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }

  //check to see if array == 0
  if (cars.length == 0){
    state = 2 ;

  }
//Here is my frog
checkForKeys();
//fill('green');
//ellipse(frogPos.x, frogPos.y, 75, 75);
image(img, frogPos.x, frogPos.y, 150, 150);
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 8;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 8;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 8;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 8;

  if (frogPos.x > width) frogPos.x = width;
  if (frogPos.y > height) frogPos.y = height;

}



// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.col = color(random(255), random(255), random(255));
    this.width = random(30, 30);
  }

  // methods

  display() {
    fill(this.col);
    ellipse(this.pos.x, this.pos.y, this.width, 15);
    //textSize(this.width) ;
    //text("WOOHOO", this.pos.x, this.pos.y);
    //image();
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
