
export const canvas = document.getElementById("myCanvas");


export const ctx = canvas.getContext("2d");

function Missile(ship) {
  this.missileHeight = 10;
  this.missileWidth = 5;
  this.missileX = ship.shipX;
  this.missileY = canvas.height;
  this.missileDY = 0;
}


Missile.prototype.drawMissile = function drawMissile(upPressed,ship){
  ctx.beginPath();
  ctx.rect(this.missileX,this.missileY,this.missileWidth,this.missileHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();


  if (this.missileY < 0) {
    this.missileY = canvas.height;
    this.missileDY = 0;
  }
  if (upPressed === true) {
    this.missileDY = -4;
    if (this.missileY === canvas.height) {
      this.missileX = ship.shipX + ship.shipWidth/2;
    }
  }

  this.missileY += this.missileDY;
};

Missile.prototype.animate = function animate(upPressed,ship){
  if (this.missileY < 0) {
    this.missileY = canvas.height;
    this.missileDY = 0;
  }
  if (upPressed === true) {
    this.missileDY = -4;
    if (this.missileY === canvas.height) {
      this.missileX = ship.shipX + ship.shipWidth/2;
    }
  }

  this.missileY += this.missileDY;
};

export default Missile;
