// 最終課題を制作しよう

let x, y;
let vx, vy;
const g = 1;

let objs = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;

  
  for (let i = 0; i < 5; i++) {
    objs.push({
      x: random(100, width - 100),
      y: random(100, height * 0.6),
      s: 30,   
      color: color(255, 255, 0)  
    });
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  const size = height * 0.1;

  const groundY = height * 0.8;
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

  
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  if(keyIsDown(RIGHT_ARROW)&& keyIsDown("D".charCodeAt(0))){ x+= 10; }
  if(keyIsDown(LEFT_ARROW) && keyIsDown("A".charCodeAt(0))){ x-= 10; }

  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);

  x += vx;
  y += vy;
  vy += g;
  
  if(x < 0 || x > width){ vx = -1 * vx; }
  if(y < 0 || y > height){ vy = -1 * vy; }
  if(keyIsDown(" ".charCodeAt(0))){ 
    {  vy = -10;
    }
  }

  y = constrain(y, 0, groundY);

  drawObjs();
  checkObjCollision();

  fill(0);
  ellipse(x, y, size, size);
}


function drawObjs(){
  for (let obj of objs) {
    fill(obj.color);
    rect(obj.x - obj.s / 2, obj.y - obj.s / 2, obj.s, obj.s);
  }
}

function checkObjCollision(){
  for (let obj of objs) {

    let half = obj.s / 2;

    let dx = max(abs(x - obj.x) - half, 0);
    let dy = max(abs(y - obj.y) - half, 0);

    
    if (dx * dx + dy * dy < (40 * 40)) {
      obj.color = color(139, 69, 19);  
    }
  }
}
