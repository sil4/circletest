x = 35;
setupX = x;
y = 1;
function setup() {
  createCanvas(960, 720);
  colorMode(RGB);
  ellipseMode(CENTER); // by default this is called but i'm quite particular about stuff
  background(229.5); // if 0/10 is black and 10/10 is white, this is 9/10
  circle(width / 2, height / 2, x); // centered at the canvas
  colorMode(HSB);
  noCursor();
}

function draw() {
  colorMode(RGB);
  background(229.5);
  colorMode(HSB);
  circle(mouseX, mouseY, x);
  if (x > setupX) {
    x = x - (x - setupX) / 2;
  }
  if (y > 1) {
    y -= 1 + y / 16;
  } else {
    y = 1;
  }
  if (y < 1) {
    y = 1;
  }
  stroke(mouseX % 360, mouseY % 100, 100);
  strokeWeight(y);
  console.log(`y is ${y}`);
}

function mouseMoved() {
  x += 1 + y;
  y += 1;
  console.log(`x is ${x}`);
  return false;
} // currently there's a bug within this where this mouseMoved() function breaks if you click your mouse. i have no idea how to fix it
