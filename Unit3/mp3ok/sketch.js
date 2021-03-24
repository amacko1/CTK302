let cars = [];
let maxCars = 5;
let maxTimer =  5 * 60;
let frogPos ;
let img;

function preload() {
  img = loadImage('assets/aerospace.png');
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
  //background(0,0,35,25);
    //var galaxy = {
  //locationX : random(width),
  //locationY : random(height),
  //size : random(1,6)
  //}
  //stars
  //fill(250);
  //ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size);


  // do some actions on the object
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }



//Here is my frog (meteorite)
checkForKeys();
//fill('grey');
//ellipse(frogPos.x, frogPos.y, 75, 75);
image(img, frogPos.x, frogPos.y, 150, 150);

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
