// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 1;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ

  // 地面を描く
  const groundY = height * 0.8;
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

  // キーの処理（else ifにすると同時押しできなくなってしまうので要注意）
 if(keyIsDown(LEFT_ARROW)){ x -= 5; }
 if(keyIsDown(RIGHT_ARROW)){ x += 5; }
 if(keyIsDown(RIGHT_ARROW)&& keyIsDown("D".charCodeAt(0))){ x+= 10; } // 文字キーの場合
 if(keyIsDown(LEFT_ARROW) && keyIsDown("A".charCodeAt(0))){ x-= 10; } // BLANK[1] キャラクターの左右移動

  // BLANK[2] 重力とジャンプ

  // 速くなりすぎないように制限
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);

  // 位置を更新
  x += vx;
  y += vy;
  vy += g;

  
  if(x < 0 || x > width){ vx = -1 * vx; }
  if(y < 0 || y > height){ vy = -1 * vy; }
  if(keyIsDown(" ".charCodeAt(0))){ 
   if(y>groundY){ vy = -20; }}
  
  y = constrain(y, 0, groundY);



  

  // キャラクターを描く
  fill(0);
  ellipse(x, y, size, size);
}