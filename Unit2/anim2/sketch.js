let x = 0 ;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100) ;

  push() ;
  translate(x, 0) ;
  rect(100, 100, 100, 100) ;
  //avatar!!!
  pop() ;

  x = x + 10 ;
  if (x > width) {
    x = 0 ;
  }
}
