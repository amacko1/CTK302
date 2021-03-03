let state = 0 ;
let timer = 0 ;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER) ;
  textSize(48) ;
}

function draw() {
  switch(state){
    case 0:
    background('black') ;
    fill('yellow');
    text("Why don’t scientists \ntrust atoms?", width/2, height/2) ;
    break ;

    case 1:
    background('red') ;
    fill('yellow');
    text("Because they \nmake up everything.", width / 2, height / 2) ;
    break ;

  }

timer++ ;
if (timer > 3*60) {
  timer = 0 ;
  state++ ;
  if (state >1) {
    state = 0 ;
  }
}
}
