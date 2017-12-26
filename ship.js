export const canvas = document.getElementById("myCanvas");
export const ctx = canvas.getContext("2d");

function Ship(){
  this.shipHeight = 9;
  this.shipWidth = 75;
  this.shipX = (canvas.width-this.shipWidth)/2;
  this.shipY = (canvas.height-this.shipHeight);
}

Ship.prototype.drawShip = function drawShip(rightPressed,leftPressed) {
  ctx.beginPath();
  //x,y coords of the top left coner of a rect
  //x,y coords of the bottom right of a rect

  //(pos left the start of the shape,pos down the start of the shape, width, height )
  // ctx.rect(shipX, canvas.height-shipHeight, shipWidth, shipHeight);
  ctx.rect(this.shipX, this.shipY, this.shipWidth, this.shipHeight);

  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
  if (rightPressed === true && this.shipX < canvas.width - this.shipWidth ) {
    this.shipX += 6;
  //move ship left
  } else if (leftPressed === true && this.shipX > 0) {
    this.shipX-= 6;
  }
};

export default Ship;
