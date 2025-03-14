let oneLava;
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL,360, 100, 100, 1);
  oneLava = new LavaBlob(200, 343, 100, 400, 400, true);

}

function draw() {
  lavaLamp();
  

}

function lavaLamp() {
  //et lavaLampBackground = color(306, 100, 16, 1);
  drawBackground();
  oneLava.update();
  oneLava.display();

  


}

function drawBackground() {
  for (let i = 0; i < windowWidth/2; i ++) {
    let tempColor = color(306, 100, map(i, 0, windowWidth/2, 30, 60), 1);
    stroke(tempColor);
    line(i, 0, i, windowHeight);
  }
  for (let i = windowWidth/2; i < windowWidth; i ++) {
    let tempColor = color(306, 100, map(i, windowWidth/2, windowWidth, 60, 30), 1);
    stroke(tempColor);
    line(i, 0, i, windowHeight);
  }
}


//Creates one lava blob
//initital radius is the spawn radius
//centerColorH and CenterColorS are used to decide initial hue and saturation of blob, lightness changed in gradient loop
//x, y -> initial coordinates
//up -> if starts moving up or down. 
class LavaBlob {
  constructor(initialRadius, centerColorH, centerColorS, x, y, up){
    this.initialRadius = initialRadius;
    this.centerColorH = centerColorH;
    this.centerColorS = centerColorS;
    this.radius = this.initialRadius;
    this.x = x;
    this.y = y;
    this.up = up;
    
  }
  //decides whether blob should be moving up or down and changes the x and y for which the blob will be drawn
  update() {
    if (this.up) {
      this.y -= 1;
    }else{
      this.y += 1;
    }
    if (this.y - this.radius/2 <= 0) {
      this.up = false;
    }
    if (this.y + this.radius/2  >= windowHeight) {
      this.up = true;
    }
  }

  //draws the blob
  //for loop used drawing lots of circles slightly changing the lightness each time to create a gradient and 3D look
  display () {
    noFill();
    
    
    for (let i = 0; i < this.initialRadius; i ++) {
      let tempColor = color(this.centerColorH, this.centerColorS, map(i, this.initialRadius, 0, 50, 60), 1);
      stroke(tempColor);
      circle(this.x, this.y, i);
    }
  }

  


  
}

