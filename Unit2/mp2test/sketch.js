let state = 0;
let myTimer = 0;
let song1, song2;

function preload() {
  song1 = loadSound("assets/gelo.mp3");
  song2 = loadSound("assets/melt.mp3");


  song1.loop();
  song1.pause();
  song2.loop();
  song2.pause();

}

function setup() {
  createCanvas(500, 700);
  background(41, 170, 255);
  fill(0, 142, 188);
  strokeWeight(0);
  rect(0, 500, width, 200);
}

function draw() {
print(state);
  switch (state) {
    case 0:
      //song1.play();
      state = 1;
      break;

    case 1:
      // myTimer++;
      // if (myTimer > 7 * 60) {
      //   myTimer = 0;
      //   song1.pause();
      //   state = 2;
      // }

      snow1();
      break;

    case 2:
      //song1.pause();
      song1.play();
      state = 3;
      break;

    case 3:
      myTimer++;
      if (myTimer > 5 * 60) {
        myTimer = 0;
        state = 4;
        song1.pause();
        song2.play();
      }

      snowsun();

      break;

    case 4:
      myTimer++;
      if (myTimer > 7 * 60) {
        myTimer = 0;
        state = 0;
        song2.pause();
      }

      snowmelt();


      break;
  }
}


function mouseReleased() {
  song1.pause();
  song2.pause();

  state++;
  if (state > 4) state = 0;

}

function snow1() {
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
  fill('white');
  text("The snowman on a snowy day. \nPlease Click! ", 300, 200);
  textSize(14);
}

function snowsun() {
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
  fill('white')
  text("but the sun \ncame up...", 300, 100);
  textSize(16);

  //sun
  fill('yellow');
  ellipse(56, -10, 300, 300);

}

function snowmelt() {
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
  fill('white')
  text("BYE BYE snowman!!!!", 270, 100);
  textSize(20);

  //sun
  fill('yellow');
  ellipse(56, -10, 400, 400);

}


function touchStarted() {
  getAudioContext().resume();
}
