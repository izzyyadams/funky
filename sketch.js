function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSL);
}

function draw() {
  danceFloorGrid(100);
  
}


function danceFloorGrid(squareSize) {
  let purple = color(261, 98, 80);
  let orange = color(21, 98, 54);
  let green = color(119, 99,71);
  let yellow = color(48, 98, 51);
  let black = color(0);
  let colors = [purple, orange, green, yellow];
  for(i = 0; i < windowHeight/squareSize; i++) {
    for (j = 0; j < windowWidth/squareSize; j++) {
      fill(black);
      square(j * squareSize, i *squareSize, squareSize);
      
    }
  }
}
  
