let x = 0 ;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0) ;
  // rect(x, 200, 200, 200) ;
  textSize(48);
  fill('green')
  text("Hulk", x, height/2);


  x = x + 10;

  if (x > width) {
    x = -200;
  }
}
