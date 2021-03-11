let state = 0 ;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch(state) {
    case 0:
    background('grey') ;
    text("state 0", 100, 100) ;
    for (let j = 0; j < 20; j++) {
      for (let i = 0; i < 20; i++) {
        rect(i * 50 + 10, j * 50 + 10, 25, 5);
        fill('red');
      }
    }
    break ;

    case 1:
    background('red') ;
    text("state 1", 80, 80) ;
    for (let i = 0 ; i < 10 ; i++) {
      rect(i*10, 100, 15, 15) ;
      fill('yellow');
    }
    for (let i = 0 ; i < 9 ; i++) {
      rect(i*10, 200, 15, 15) ;
      fill('yellow');
    }
    for (let i = 0 ; i < 8 ; i++) {
      rect(i*10, 300, 15, 15) ;
      fill('yellow');
    }
    for (let i = 0 ; i < 7 ; i++) {
      rect(i*10, 400, 15, 15) ;
      fill('yellow');
    }
    break ;

    case 2:
    background('green') ;
    text("state 2", 80, 80) ;
    for (let i = 0 ; i < 10 ; i++) {
      rect(i*50, 200, 50, 50) ;
      fill('black');
    }
    for (let i = 0 ; i < 10 ; i++) {
      rect(i*50, 300, 50, 50) ;
        fill('black');
    }

    for (let i = 0 ; i < 10 ; i++) {
      rect(i*50, 400, 50, 50) ;
        fill('black');
    }
    break ;

    case 3:
    background('yellow') ;
    text("state 3", 80, 80) ;
    for (let j = 0; j< 8; j++) {
      for (let i = 0; i < 8; i++) {
        rect(i*60 + 30, j * 60 + 30, 20, 20);
        fill('pink');
      }
    }

    break ;

    case 4:
    background('blue') ;
    text("state 4", 100, 100) ;
    for (let j = 0; j< 10; j++) {
      for (let i = 0; i < 10; i++) {
        fill(random(200));
        rect(i*50 + 15, j * 50 + 15, 10, 10);
      }
    }
    break ;
  }
}

function mouseReleased() {
  state++ ;
  if (state > 4) {
    state = 0 ;
  }
}
