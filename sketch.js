let bubbles = [];
let dispersing = [];
let canvas;

const bubbleChars = ["⚬", "˚", "○", "｡", "°"];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  canvas.position(0, 0);

  canvas.style("position", "fixed");
  canvas.style("z-index", "5");
  canvas.style("pointer-events", "none");

  textFont("monospace");
  noCursor();
}

function draw() {

  // Make p5 canvas transparent
  clear();

  // --- Regular bubble trail ---
  for (let i = bubbles.length - 1; i >= 0; i--) {

    let b = bubbles[i];

    b.y -= 2;
    b.alpha -= 8;

    fill(150, b.alpha);
    noStroke();

    textSize(b.size);
    text(b.char, b.x, b.y);

    if (b.alpha <= 0) {
      bubbles.splice(i, 1);
    }
  }

  // --- Click dispersal bubbles ---
  for (let i = dispersing.length - 1; i >= 0; i--) {

    let b = dispersing[i];

    b.x += b.xSpeed;
    b.y += b.ySpeed;
    b.alpha -= 12;

    fill(150, b.alpha);
    noStroke();

    textSize(b.size);
    text(b.char, b.x, b.y);

    if (b.alpha <= 0) {
      dispersing.splice(i, 1);
    }
  }
}

function mouseMoved() {

  bubbles.push({
    x: mouseX,
    y: mouseY,
    char: random(bubbleChars),
    size: random(12, 20),
    alpha: 255
  });

}

function mousePressed() {

  for (let i = 0; i < 20; i++) {

    let angle = random(TWO_PI);
    let speed = random(1, 4);

    dispersing.push({
      x: mouseX,
      y: mouseY,
      xSpeed: cos(angle) * speed,
      ySpeed: sin(angle) * speed,
      char: random(bubbleChars),
      size: random(12, 20),
      alpha: 255
    });

  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}