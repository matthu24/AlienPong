export const canvas = document.getElementById("myCanvas");


export const ctx = canvas.getContext("2d");

function Invader (){
  //this.invaders to bomb
  this.invaderRowCount = 8;
  this.invaderColumnCount = 6;
  this.invaderWidth = 15;
  this.invaderHeight = 10;
  this.invaderPadding = 60;
  //sets how far up the invaders come
  this.invaderOffsetTop = -500;
  this.invaderOffsetLeft = 50;
  this.invaderY = 0;
  this.invaderX = 0;
  //direction of invaders is positive or going down
  this.invaderDY = 0;
  this.invaderDX = 0;
  this.invaders = [];
  for(let c=0; c<this.invaderColumnCount; c++) {
      this.invaders[c] = [];
      for(let r=0; r<this.invaderRowCount; r++) {
        //if exist is 1, draw it,
        //if exist is 0, don't
          this.invaders[c][r] = { x: 0, y: 0, exist: true };
      }
  }
}

Invader.prototype.drawInvaders= function drawInvaders(){
  for(let c=0; c<this.invaderColumnCount; c++) {
    for(let r=0; r<this.invaderRowCount; r++) {

      if (this.invaders[c][r].exist === true) {
        this.invaderX = (c*(this.invaderWidth+this.invaderPadding))+this.invaderOffsetLeft;
        this.invaderY = ((0.2)*c*r*(this.invaderHeight+this.invaderPadding))+this.invaderOffsetTop + this.invaderDY;
        this.invaders[c][r].x = this.invaderX;
        this.invaders[c][r].y = this.invaderY;
        ctx.beginPath();
        ctx.arc(this.invaderX, this.invaderY, this.invaderWidth, 0, Math.PI*2, false);
        ctx.moveTo(this.invaderX-this.invaderWidth,this.invaderY);
        ctx.lineTo(this.invaderX-this.invaderWidth/2,this.invaderY+20);
        ctx.lineTo(this.invaderX,this.invaderY + 4);
        ctx.lineTo(this.invaderX + this.invaderWidth/2,this.invaderY+20);
        ctx.lineTo(this.invaderX + this.invaderWidth, this.invaderY);
        ctx.lineTo(this.invaderX,this.invaderY-this.invaderWidth);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
  // this.invaderY+=this.invaderDY;
  this.invaderDY += 0.05;
};
