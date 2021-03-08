let x = 0 ;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('black') ;

  push() ;
  translate(x, 0) ;
  fill('yellow');
  circle(250, 250, 200);
  fill('white');
  circle(280, 250, 10);
  fill('white');
  circle(240, 250, 10);


  pop() ;

  x = x + 10 ;
  if (x > width) {
    x = 0 ;
  }
}
