import {ctx, canvas} from './pong.js';

//set ball initial position and movement
//where the ball starts
var ballX = canvas.width/2;
var ballY = canvas.height-100;

//define ballRadius
var ballRadius = 10;


export const drawBall = function drawBall() {
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#FFD700";
  ctx.fill();
  ctx.closePath();
};
