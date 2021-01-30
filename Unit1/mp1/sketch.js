function setup() {
// Sets the screen to be 720 pixels wide and 400 pixels high
createCanvas(720, 400);
background(153, 255, 255);
noStroke()

}

function draw() {
background ('lightblue')


//sun
fill('yellow');
ellipse(56, -10, 200, 200);


//ground buildings
fill('DarkOliveGreen');
rect(0, 248, 720, 100);



//building1
   fill('blue');
   rect(490, 100, 80, 150);
   fill('red');
   square(495, 110, 30);
     fill('red')
   square(530, 110, 30);
     fill('red');
   square(530, 160, 30);
     fill('red');
   square(495, 160, 30);
     fill('red');
   square(505, 200, 50);

   //building2
    fill('blue');
   rect(409, 50, 80, 200);
    fill('red');
   square(415, 110, 30);
     fill('red')
   square(450, 110, 30);
     fill('red');
   square(415, 160, 30);
     fill('red');
   square(450, 160, 30);
    fill('red');
   square(425, 200, 50);
   fill('red');
   square(425, 50, 40);




//cloud
  fill('white')
  ellipse(550,50,60,50);
  ellipse(580,40,60,50);
  ellipse(630,50,60,50);
  ellipse(570,70,60,50);
  ellipse(610,65,60,50);



  //hair
  fill('red')
  ellipse(310,110,30,50);
  ellipse(292,110,30,50);
  ellipse(268,110,30,40);
  ellipse(331,110,30,40);


    //head
    fill('green');
    ellipse(300, 200, 135, 192);


    //eyes
    fill('white');
    circle(330, 175, 30);
    fill('white');
    circle(270, 175, 30);
    fill('white');
    circle(300, 145, 35);


    //eyeball 1
    fill('red');
    circle(329, 175, 24);
    fill('red');
    circle(268, 175, 24);
    fill('red');
    circle(298, 145, 27);


    //eyeball 2
    fill('black');
    circle(329, 175, 15);
    fill('black');
    circle(268, 175, 15);
    fill('black');
    circle(298, 145, 18);


    //mouth
    fill('black');
    arc(300, 230, 90, 80, 0, PI);

    //teeth
    fill('yellow');
    square(270, 230, 12);

    fill('yellow');
    square(280, 230, 12);

    fill('yellow');
    square(300, 230, 12);

    fill('yellow');
    square(320, 230, 12);


    //arms
     fill('green');
     rect(240, 230, 10, 55);
     fill('green');
     circle(245, 296, 25);
     fill('green');
     rect(350, 230, 10, 55);
     fill('green');
     circle(355, 296, 25);



    //legs
      fill('green');
      circle(267, 328, 25);
      fill('green');
      rect(270, 285, 10, 55);
      fill('green');
      circle(334, 328, 25);
      fill('green');
      rect(320, 285, 10, 55);



   //tree
   fill('maroon');
    rect(65, 180, 7, 80);
 fill('green');
 ellipse(70, 144, 50, 80);




         //ground
       fill('DarkOliveGreen');
       rect(0, 337, 720, 80);



    if (mouseIsPressed) {
      background ('black')
      fill('white')
      ellipse(600, 50, 150, 150);

      //ground buildings
      fill('DarkOliveGreen');
      rect(0, 248, 720, 100);


      //building1
         fill('blue');
         rect(490, 100, 80, 150);
         fill('yellow');
         square(495, 110, 30);
        fill('yellow');
         square(530, 110, 30);
          fill('yellow');
         square(530, 160, 30);
        fill('yellow');
         square(495, 160, 30);
        fill('yellow');
         square(505, 200, 50);

         //building2
          fill('blue');
         rect(409, 50, 80, 200);
          fill('yellow');
         square(415, 110, 30);
          fill('yellow');
         square(450, 110, 30);
          fill('yellow');
         square(415, 160, 30);
          fill('yellow');
         square(450, 160, 30);
          fill('yellow');
         square(425, 200, 50);
        fill('yellow');
         square(425, 50, 40);



    //stars
      fill('white');
      circle(400, 70, 2);
      circle(395, 65, 2);
      circle(390, 60, 2);
      circle(410, 50, 2);
      circle(415, 43, 2);
      circle(215, 43, 2);
      circle(210, 38, 2);

      //hair
      fill('red')
      ellipse(310,110,30,50);
      ellipse(292,110,30,50);
      ellipse(268,110,30,40);
      ellipse(331,110,30,40);


        //head
        fill('green');
        ellipse(300, 200, 135, 192);


        //eyes
        fill('white');
        circle(330, 175, 30);
        fill('white');
        circle(270, 175, 30);
        fill('white');
        circle(300, 145, 35);


        //eyeball 1
        fill('red');
        circle(329, 175, 24);
        fill('red');
        circle(268, 175, 24);
        fill('red');
        circle(298, 145, 27);


        //eyeball 2
        fill('yellow');
        circle(329, 175, 15);
        fill('yellow');
        circle(268, 175, 15);
        fill('yellow');
        circle(298, 145, 18);


        //mouth
        fill('black');
        arc(300, 230, 90, 80, 0, PI);

        //teeth
        fill('yellow');
        square(270, 230, 12);

        fill('yellow');
        square(280, 230, 12);

        fill('yellow');
        square(300, 230, 12);

        fill('yellow');
        square(320, 230, 12);


        //arms
         fill('green');
         rect(240, 230, 10, 55);
         fill('green');
         circle(245, 296, 25);
         fill('green');
         rect(350, 230, 10, 55);
         fill('green');
         circle(355, 296, 25);



        //legs
          fill('green');
          circle(267, 328, 25);
          fill('green');
          rect(270, 285, 10, 55);
          fill('green');
          circle(334, 328, 25);
          fill('green');
          rect(320, 285, 10, 55);


                   //ground
                 fill('DarkOliveGreen');
                 rect(0, 337, 720, 80);





      }

  }
