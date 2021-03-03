  let state = 0 ;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER) ;
  textSize(48) ;
}

function draw() {
  switch(state){
    case 0:
    background('red') ;
    text("What’s the best thing\nabout Switzerland?", width/2, height/2) ;
    break ;

    case 1:
    background('green') ;
    text("I don’t know, \nbut the flag\nis a big plus.:D ", width/2, height/2) ;
    break ;

  }
}

function mouseReleased() {
  state++ ;
  if (state > 1) {
    state = 0 ;
  }
}
