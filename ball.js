import {ctx, canvas} from './pong';

//set ball initial position and movement
//where the ball starts

// export const canvas = document.getElementById("myCanvas");
//
// //ctx stores the 2D rendering context
// //this is the tool we use to paint on the canvas
// export const ctx = canvas.getContext("2d");


export const ballX = canvas.width/2;
export const ballY = canvas.height-100;

//define ballRadius
export const ballRadius = 10;
export const dx = 2;
//positive dx is to the right
export const dy=-2;
//positive dy is down


export const drawBall = function drawBall() {
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#FFD700";
  ctx.fill();
  ctx.closePath();
};
