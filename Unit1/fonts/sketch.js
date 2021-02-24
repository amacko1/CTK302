let f1;
let f2;

function setup() {
  createCanvas(500, 500) ;
  textAlign(CENTER)

  f1 = loadFont("assets/Winter.ttf") ;
  f2 = loadFont("assets/Sansation.ttf") ;
}

function draw() {
  background(100) ;
  textSize (48) ;

textFont(f1);
text("hello", width/2, height/2) ;

textFont(f2, 32) ;
text("world", width/2, height/ 2 + 50) ;
}
