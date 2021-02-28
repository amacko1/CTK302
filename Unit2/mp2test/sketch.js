let state = 0 ;



function setup() {
  createCanvas(500, 700);
	background(41, 170, 255);
  fill(0, 142, 188);
	strokeWeight(0);
	rect(0, 500, width, 200);


	}

function draw() {

  switch(state) {
    case 0:
    background(41, 170, 255);
    fill(0, 142, 188);
  	strokeWeight(0);
  	rect(0, 500, width, 200);


    //snowman
  	fill(255);
  	ellipse(250, 500, 200, 200);
  	ellipse(250, 375, 150, 150);
  	ellipse(250, 275, 100, 100);

  	//hat
  	fill(0);
  	rect(215, 140, 70, 100);
  	ellipse(250, 240, 100, 10);

  	//eyes
  	ellipse(235, 265, 5, 5);
  	ellipse(265, 265, 5, 5);

  	//carrot
  	fill(255, 165, 0);
  	triangle(250, 275, 250, 285, 290, 300);

  	//arms
  	stroke(139, 69, 19);
  	strokeWeight(5);
  	line(180, 375, 100, 350);
  	line(320, 375, 400, 350);
    strokeWeight(0);
    fill('black')
    text("The snowman on a snowy day ", 300, 100);


    break ;

    case 1:

    background(41, 170, 255);
    fill(0, 142, 188);
  	strokeWeight(0);
  	rect(0, 500, width, 200);
    //snowman
  	fill(255);
  	ellipse(250, 500, 200, 200);
  	ellipse(250, 375, 150, 150);
  	ellipse(250, 275, 100, 100);

  	//hat
  	fill(0);
  	rect(215, 140, 70, 100);
  	ellipse(250, 240, 100, 10);

  	//eyes
  	ellipse(235, 265, 5, 5);
  	ellipse(265, 265, 5, 5);

  	//carrot
  	fill(255, 165, 0);
  	triangle(250, 275, 250, 285, 290, 300);

  	//arms
  	stroke(139, 69, 19);
  	strokeWeight(5);
    line(180, 375, 100, 350);
  	line(320, 375, 400, 350);
    strokeWeight(0);
    fill('black')
    text("but the sun came up", 300, 100);


      //sun
      fill('yellow');
      ellipse(56, -10, 300, 300);

    break ;

    case 2:
    background(41, 170, 255);
    fill(0, 142, 188);
  	strokeWeight(0);
  	rect(0, 500, width, 200);
    //snowman
  	fill(255);
    ellipse(250, 600, 200, 120);
  	ellipse(250, 570, 150, 150);
  	ellipse(250, 520, 100, 100);

  	//hat
  	fill(0);
  	rect(215, 520, 70, 100);
  	ellipse(250, 620, 100, 10);

  	//eyes
  	ellipse(235, 500, 5, 5);
  	ellipse(265, 500, 5, 5);

  	//carrot
  	fill(255, 165, 0);
  	triangle(250, 390, 250, 390, 290, 300);

  	//arms
  	stroke(139, 69, 19);
  	strokeWeight(5);
    line(180, 500, 50, 500);
  	line(320, 510, 400, 500);
    strokeWeight(0);
    fill('black')
    text("BYE BYE snowman!!!!", 300, 100);



      //sun
      fill('yellow');
      ellipse(56, -10, 300, 300);

    break ;
  }
}


function mouseReleased() {
  state++ ;
  if (state > 3) state = 0 ;
}
