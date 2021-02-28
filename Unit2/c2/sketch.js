var mic;
var vol;
let state = -1;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);


  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}

function draw() {

vol = (mic.getLevel().toFixed(2)); // returned level is between 0 and 1

switch(state){

  case -1:
  background(100) ;
  text("click start", width/2, height/2) ;
  break ;

  case 0:
  background(100) ;
  text("shhhhh!!!!", width/2, height/2) ;
    if (vol > .08) {
      state = 1;
    }
  break;

  case 1:
  background('red') ;
  text("QUIETDOWN!!!!", width/2, height/2);
  break;


}

}

function mouseReleased() {
  if (state == -1) {
    state = 0;
  }
}

function touchStarted() {
  getAudioContext().resume();
}
