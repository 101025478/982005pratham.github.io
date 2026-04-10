// Name: Pratham Prajapati
// File: main.js
// Date: 09 April 2026
// canvas setup for animation
// Description: Bouncing balls using JavaScript (MDN)

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const para = document.querySelector("p");

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

let balls = [];
let ballCount = 0;

// Ball constructor
function Ball(x, y, velX, velY, size, color) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.size = size;
  this.color = color;
}

Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

Ball.prototype.update = function () {
  if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
    this.velX = -this.velX;
  }

  if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
    this.velY = -this.velY;
  }

  this.x += this.velX;
  this.y += this.velY;
};

// create balls
while (balls.length < 10) {
  const size = 10 + Math.random() * 20;

  const ball = new Ball(
    Math.random() * (width - size * 2) + size,
    Math.random() * (height - size * 2) + size,
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
    size,
    `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
  );

  balls.push(ball);
  ballCount++;
}

// animation loop
function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
  }

  para.textContent = "Ball count: " + ballCount;

  requestAnimationFrame(loop);
}

loop();