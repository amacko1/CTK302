let cars = [];
let maxCars = 5;
let maxTimer = 5 * 60;
let timer = 0;
let frogPos;
let state = 0;

function setup() {
  createCanvas(500, 500);

  // Spawn the cars
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 100);
}

function draw() {

  switch (state) {
    case 0:
    background('black');
    fill("white");
    text("Welcome to my game, CLICK", 100, 200);
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
    background('black');
    fill("white");
    text("You won, click", 100, 200);
      break;

    case 3: //lose
    background('black');
    fill("white");
    text("you lost, CLICK", 100, 200);
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
  background(100);

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
  fill('green');
  ellipse(frogPos.x, frogPos.y, 75, 75);


}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

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
    this.width = random(30, 70);
  }

  // methods

  display() {
    fill(this.col);
    rect(this.pos.x, this.pos.y, this.width, 25);
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
