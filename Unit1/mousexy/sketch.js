function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);

}



function draw() {

  background(100);



  if (mouseIsPressed) {
    background ('yellow')


  } else {
    // when the mouse isn't pressed!
    fill(0)

  }



  fill(0);
  text(mouseX + ", " + mouseY, 40, 40);

}

function setup() {
// Sets the screen to be 720 pixels wide and 400 pixels high
createCanvas(720, 400);
background(153, 255, 255);
noStroke()











}




// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
