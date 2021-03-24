let img;
function preload() {
  img = loadImage('assets/ok.png');
}
function setup() {
  createCanvas(700, 700);
  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height
  image(img, 0, 0, 700, 400);
}
