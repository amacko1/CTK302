let numberOfTouches ;


function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("no touches", 5, 22) ;

      break ;

      case 1:
       text("one touch", 5, 22) ;


      break ;

      case 2:
      text("two touches", 5, 22) ;

      break ;

      case 3:
     text("three touches", 5, 22) ;

      break ;


  }

}
