const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

 function Ball () {
  this.ballX = canvas.width/2;
  this.ballY = canvas.height-100;
  this.ballRadius = 10;
  this.ballDX = 1.5;
  this.ballDY = -1.5;
}

Ball.prototype.drawBall = function drawBall(ship) {
  ctx.beginPath();
  ctx.arc(this.ballX, this.ballY, this.ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#C0C0C0";
  ctx.fill();
  ctx.closePath();

  //handles collision with walls
  //adds DX prematurely because don't want ball to sink into walls
  if(this.ballX + this.ballDX > canvas.width-this.ballRadius || this.ballX + this.ballDX < this.ballRadius) {
    this.ballDX = -this.ballDX;
  }
  //handle collision with ceiling
  if(this.ballY + this.ballDY < this.ballRadius) {
      this.ballDY = -this.ballDY;
  }else {
    //if this.ball hits the ship it changes direction
    // if (this.ballY + this.ballDY === canvas.height-this.ballRadius-ship.shipHeight&&this.ballX > ship.shipX && this.ballX < ship.shipX + ship.shipWidth) {
    //   this.ballDY = -this.ballDY;
    //   this.ballDX = -this.ballDX;
    // }
    // if(this.ballY > canvas.height-this.ballRadius-ship.shipHeight&&this.ballX > ship.shipX-this.ballRadius && this.ballX < ship.shipX + ship.shipWidth) {
    //   return false
    // }else
    const ballHitsShip = this.ballY + this.ballDY > canvas.height-this.ballRadius-ship.shipHeight;
    const ballWithinShip = this.ballX > ship.shipX && this.ballX < ship.shipX + ship.shipWidth;
    const ballLeftEdge = this.ballX > ship.shipX-this.ballRadius && this.ballX < ship.shipX;
    const ballRightEdge = this.ballX < ship.shipX + ship.shipWidth+this.ballRadius && this.ballX > ship.shipX + ship.shipWidth;
    const ballMovingRight = this.ballDX > 0 ? true : false;
    if(ballHitsShip && ballWithinShip){
      this.ballDY = -this.ballDY;

      //THIS IS THE EDGE CASE
    }else if(ballHitsShip) {
      return false;
      // if (ballLeftEdge) {
        // if (ballMovingRight) {
        //   this.ballDY = -this.ballDY;
        //   this.ballDX = -this.ballDX;
        // }else{
        //   this.ballDY = -this.ballDY;
        // }
      // }else if (ballRightEdge) {
        // if (ballMovingRight) {
        //   this.ballDY = -this.ballDY;
        // }else{
        //   this.ballDY = -this.ballDY;
        //   this.ballDX = -this.ballDX;
        //
        // }

      // }else if(this.ballY > canvas.height-this.ballRadius){
      //   return false;
      // }

    } else if(this.ballY > canvas.height-this.ballRadius){
      return false;
    }


    // else if (this.ballY + this.ballDY > canvas.height+this.ballRadius ) {
    // //if ship and this.ball are on the same y coordinate
    //   return false;
    // }
  }
  this.ballX+=this.ballDX;
  this.ballY+=this.ballDY;
};

Ball.prototype.speedBall = function speedBall(){

  if (this.ballDX > 0) {
    this.ballDX +=0.03;
  }else {
    this.ballDX -=0.03;
  }

  if (this.ballDY > 0) {
    this.ballDY+=0.03;
  }else {
    this.ballDY-=0.03;
  }
};

export default Ball;
