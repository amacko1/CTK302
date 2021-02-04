let fish;
let piano;
let pizza;

function setup() {
  createCanvas(800, 800);
  fish = loadImage("assets/fish.jpg");
  piano = loadImage("assets/piano.jpg");
  pizza = loadImage("assets/pizza.jpg");

  imageMode(CENTER);
  rectMode(CENTER); 
  textAlign(CENTER);
}

function draw() {
  background('white');
  image(fish, width/2, height/2, 200, 200) ;
  image(piano, width/2, height/2 - 200, 200, 200) ;
  image(pizza, width/2, height/2 + 200, 200, 200) ;


}
