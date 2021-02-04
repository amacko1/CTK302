function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
  background(153, 255, 255);
  noStroke();

  //sun
  fill('yellow');
  ellipse(56, -10, 200, 200);

  //tree
  fill('maroon');
  triangle(195, 150, 210, 360, 180, 360);
  fill('green');
  ellipse(195, 144, 90, 172);

  fill('maroon');
  triangle(620, 150, 640, 360, 600, 360);
  fill('green');
  ellipse(620, 170, 90, 120);


  //ground
  fill(178, 255, 102);
  rect(0, 320, 720, 80);

  //house
  fill('blue');
  rect(360, 200, 180, 120);
  fill(100, 80, 50);
  triangle(450, 100, 540, 200, 360, 200);

  // door
  fill(100,80,50);
  rect(380,250, 75, 70);
  // door knob
  fill(255,255,0);
  noStroke();
  ellipse(390, 290, 10,10);

  //cloud
  fill('white')
  ellipse(550,50,60,50);
  ellipse(580,40,60,50);
  ellipse(630,50,60,50);
  ellipse(570,70,60,50);
  ellipse(610,65,60,50);

  fill('black');
  text("a \"sunny\" day scene", 40, 360);

//

}
