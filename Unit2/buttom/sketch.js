let  state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER) ;
  textSize(24) ;

}

function draw() {
  switch (state) {
	case 0:
	background('yellow');
	text("case 0", 250, 250);
	break;
 	case 1:
	background('grey');
	text("case 1", 250, 250);
	break;
case 2:
	background('red');
	text("case 2", 250, 250);
	break;
}

rect (100, 100, 100, 50) ;
}

function mouseReleased(){
  if ((mouseX > 100) &&  (mouseX < 200) && (mouseY > 100) && (mouseY < 200) ) {
  state++ ;
  if (state > 2){
    state = 0 ;
  }

}
}
