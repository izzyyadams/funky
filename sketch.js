let oneLava;
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL,360, 100, 100, 1);
  oneLava = new LavaBlob(200, 355, 99, 400, 400, true);

}

function draw() {
  lavaLamp();
  

}

function lavaLamp() {
  let lavaLampBackground = color(306, 100, 16, 1);
  background(lavaLampBackground);
  oneLava.update();
  oneLava.display();

  


}


//Creates one lava blob
//initital radius is the spawn radius
//centerColorH and CenterColorS are used to decide initial hue and saturation of blob, lightness changed in gradient loop
//startX, startY -> initial coordinates
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

  display () {
    noFill();
    
    
    for (let i = 0; i < this.initialRadius; i ++) {
      let tempColor = color(this.centerColorH, this.centerColorS, map(i, this.initialRadius, 0, 25, 50), 1);
      stroke(tempColor);
      circle(this.x, this.y, i);
    }
  }


  
}

