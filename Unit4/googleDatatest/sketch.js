var bubbles = [];
let img, img1, img2;

function preload() {
img = loadImage('assets/bgGoogleD.png');
img1 = loadImage('assets/covid.png');
img2 = loadImage('assets/covid2.png');

}



function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  //let url = '1GtE3eoYVWBv9zMPoyettXzDCEv6qdNGKio_hgEh5duM'; // this is KEY of the URL from the sheet
  let url = '1Spq4LCPmTF-mTwafqIK1bhen2Ua2NS4ot8mDYKZQ28o'; // this is KEY of the URL from the sheet
//https://docs.google.com/spreadsheets/d/1Spq4LCPmTF-mTwafqIK1bhen2Ua2NS4ot8mDYKZQ28o/edit?usp=sharing
//https://docs.google.com/spreadsheets/d/1Spq4LCPmTF-mTwafqIK1bhen2Ua2NS4ot8mDYKZQ28o/edit?usp=sharing

  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(1284, 1110);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].gender, data[i].Age, data[i].test, data[i].vaccinated)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  //background('blue'); //change color
  image(img, width/2, height/2, 1284, 1110);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }

}


// my Bubble class
class Bubble {

  constructor(mygender, myAge, mytest, myvac) {
      this.gender = mygender;
      this.age = myAge;
      this.test = mytest;
      this.vac = myvac;
      this.pos = createVector(random(width), random(height));
      this.vel = createVector(random(7), 0);
  }


  display() {

  // ellipse(this.pos.x, this.pos.y, 100, 100);
  // noStroke();
  if (this.test == 'Positive') {
    //text(“Positive", this.pos.x, this.pos.y) ;
    image(img2, this.pos.x, this.pos.y, 290, 250);
  } else {
    image(img1, this.pos.x, this.pos.y, 290, 250);
  }

  textSize(14);
  text(this.gender, this.pos.x, this.pos.y-10);
  text(this.age, this.pos.x, this.pos.y-25);
  text(this.test, this.pos.x, this.pos.y+25);
  text(this.vac, this.pos.x, this.pos.y+10);


  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
  }

}
