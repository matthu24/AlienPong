// import {ctx, canvas} from './pong';

//set this.ball initial position and movement
//where the this.ball starts

// export const canvas = document.getElementById("myCanvas");
//
// //ctx stores the 2D rendering context
// //this is the tool we use to paint on the canvas
// export const ctx = canvas.getContext("2d");

// console.log("ball");
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


// export const ballX = canvas.width/2;
// export const ballY = canvas.height-100;
//
// //define ballRadius
// export const ballRadius = 10;
// export const ballDX = 2;
// //positive dx is to the right
// export const ballDY=-2;
//positive dy is down


// export const drawBall = function drawBall() {
//   ctx.beginPath();
//   ctx.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
//   ctx.fillStyle = "#FFD700";
//   ctx.fill();
//   ctx.closePath();
// };

 function Ball () {
  this.ballX = canvas.width/2;
  this.ballY = canvas.height-100;
  this.ballRadius = 10;
  this.ballDX = 2;
  this.ballDY = -2;

}

Ball.prototype.drawBall = function drawBall() {
  ctx.beginPath();
  ctx.arc(this.ballX, this.ballY, this.ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#FFD700";
  ctx.fill();
  ctx.closePath();
};

//need to pass in ship class 
Ball.prototype.animate = function animate(ship,score){
  if(this.ballX + this.ballDX > canvas.width-this.ballRadius || this.ballX + this.ballDX < this.ballRadius) {
    this.ballDX = -this.ballDX;
  }

  if(this.ballY + this.ballDY < this.ballRadius) {

      this.ballDY = -this.ballDY;
      //if the this.ball touches the bottom of the canvas the
      //game is over
  }else {
    //if this.ball hits the ship it changes direction

    if(this.ballY + this.ballDY > canvas.height-this.ballRadius-ship.shipHeight&&this.ballX > ship.shipX && this.ballX < ship.shipX + ship.shipWidth) {
      this.ballDY = -this.ballDY;
    }else if (this.ballY + this.ballDY > canvas.height-this.ballRadius ) {
    //if ship and this.ball are on the same y coordinate
    // alert("Game over");
      // document.location.reload();
      // document.getElementById("modal-score").innerHTML = "Game over!  You destroyed " + score + " invaders!";
      // modal.style.display = "block";
    }
  }
  this.ballX+=this.ballDX;
  this.ballY+=this.ballDY;
};

export default Ball;
