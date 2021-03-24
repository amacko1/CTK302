let cars = [];
var bgPic;


function setup() {
  createCanvas(500,500);
  bgPic = loadImage("assets/bg.png");


//for (let i = 0; i < 20; i++){
//  cars.push(new Car());
//}
 noStroke() ;
  }

function draw() {
  background('grey') ;
  //img
  image(bgPic, 0, 0, 500, 500);
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
    this.pos = createVector(100, 100) ;
    this.vel = createVector(random(-20, 20), random(-20, 20)) ;
    //this.vel = createVector(random(10), random(10)) ;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a = random(200, 255);
    this.s = random(10, 50);
}

//methods

display() {
  fill(this.r, this.g, this.b, this.a);
  //ellipse(this.pos.x, this.pos.y, this.s);
  //colocar texto
  //em que tirar o this.s pq s referente a size. colocar textSize separados
  text("Galaxy",this.pos.x, this.pos.y, this.s);
}

move() {
  this.pos.add(this.vel) ;
  this.a = this.a - 5;
  //if (this.pos.x > width) this.pos.x = 0;
  //if (this.pos.x < 0) this.pos.x = width;
  //if (this.pos.y > height) this.pos.y = 0;
  //if (this.pos.y < 0) this.pos.y = height;
}

}
