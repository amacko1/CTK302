let cars = [];
let img1;

function preload(){

  img1 = loadImage("assets/bggalaxy.jpg");
}

function setup() {
  createCanvas(600, 600);


//for (let i = 0; i < 20; i++){
//  cars.push(new Car());
//}
 noStroke() ;
  }

function draw() {
  background(img1, 600, 600) ;
  cars.push(new Car());


  for (let i = 0; i < cars.length; i++){
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0){
      cars.splice(i, 1) ;
    }
  }
}

class Car {

  constructor() {
    //attributes
    this.pos = createVector(width /2, height-80) ;
    //this.vel = createVector(random(-10, 10), random(-10, 10)) ;
    this.vel = createVector(random(20, -80), random(-10, -5)) ;
    this.r = 255; //random(255);
    this.g = 255; //random(255);
    this.b = 255; //random(255);
    this.a = random(200, 255);

}

//methods

display() {
  fill(this.r, this.g, this.b, this.a);
  text('Galaxy', this.pos.x, this.pos.y, 20);
  //ellipse(this.pos.x, this.pos.y, 20);
}

move() {
  this.pos.add(this.vel) ;
  this.a = this.a - 3;
  //if (this.pos.x > width) this.pos.x = 0;
  //if (this.pos.x < 0) this.pos.x = width;
  //if (this.pos.y > height) this.pos.y = 0;
  //if (this.pos.y < 0) this.pos.y = height;
}

}
