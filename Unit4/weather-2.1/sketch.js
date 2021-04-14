// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0 ;
var temperature = 0;
var humidity = 0;
var country = 0;
let img1, img2, img3;

function preload() {
img1 = loadImage('assets/recife.png');
img2 = loadImage('assets/temp.png');
img3 = loadImage('assets/bird.png');


}

function setup() {
  createCanvas(2163, 1358);

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=recife,PE,BRA&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=9094182afbc57ee92d7fb979e6ddd06b'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString ;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.humidity;
  country = weather.sys.country;



}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      image(img1, 0, 0, 2163, 1358);
      fill('white');
      textSize(30);
      text("What is the weather in " + weather.name + "?", 20, 30);
      text("windspeed is " + windspeed, 20, 70);
      text("temperature is " + temperature, 20, 110);
      text("humidity is " + humidity, 20, 150);
      text("country is " + country, 20, 190);


      // birds

      image(img3, x, 300, 400, 400);
      image(img3, x+10, 150, 400, 400);

      //thermometer-temp
      image(img2, 1810, 1360, 400, -temperature*2);
      text("ºF", 2030, 1260,);
      textSize(5);
      fill('white');





      // move the cloud's x position
      x = x + windspeed;
      if (x > width) x = 0;

      break;

  }
}
