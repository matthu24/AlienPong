
// import {drawBall} from "./ball.js";

let canvas = document.getElementById("myCanvas");
//ctx stores the 2D rendering context
//this is the tool we use to paint on the canvas
const ctx = canvas.getContext("2d");



//set ball initial position and movement
//where the ball starts
let ballX = canvas.width/2;
let ballY = canvas.height-100;
//define ballRadius
let ballRadius = 10;
//sets initial direction of ball movement
//also affects the velocity of the ball
let dx = 2;
//positive dx is to the right
let dy=-2;
//positive dy is down

//height width and starting x position
let shipHeight = 10;
let shipWidth = 75;
let shipX = (canvas.width-shipWidth)/2;
let shipY = (canvas.height-shipHeight);


let missileHeight = 10;
let missileWidth = 5;
let missileX =shipX;
//want it to be below the canvas at first
let missileY = canvas.height;

// let missileY2 = canvas.height;
let missileDY = 0;



//user interactivity
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;


//invaders to bomb
let invaderRowCount = 8;
let invaderColumnCount = 6;
let invaderRadius = 15;
let invaderHeight = 10;
let invaderPadding = 60;
//sets how far up the invaders come
let invaderOffsetTop = -500;
let invaderOffsetLeft = 50;
let invaderY = 0;
//direction of invaders is positive or going down
let invaderDY = 0;
let invaderDX = 0;


let score = 0;

let colors = ["#FF355E","#FF6037","#FFFF66"];

//for collision detection purposes
let invaders = [];
for(let c=0; c<invaderColumnCount; c++) {
    invaders[c] = [];
    for(let r=0; r<invaderRowCount; r++) {
      //if status is 1, draw it,
      //if status is 0, don't
        invaders[c][r] = { x: 0, y: 0, status: true };
    }
}
//invaders:
//[ [ { x: 0, y: 0, status:true }, { x: 0, y: 0 }, { x: 0, y: 0 } ],
//  [ { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 } ],
//  [ { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 } ] ]

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: "+score, 8,20);
}

//return boolean
function gameOver(){

  for (let i = 0; i < invaders.length; i++) {
    for (let j = 0; j < invaders[0].length; j++) {
      if (invaders[i][j].y > canvas.height) {
        return true;
      }
    }
  }

  for (let i = 0; i < invaders.length; i++) {
    for (let j = 0; j < invaders[0].length; j++) {
      //if there are any invaders left, the game is not over

      if (invaders[i][j].status === true) {
        return false;
      }
    }
  }
  return true;
}

//random number between -1 and 1:
// let num = (Math.random());
// num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;




function drawInvaders(offsetDown) {
  for(let c=0; c<invaderColumnCount; c++) {
    for(let r=0; r<invaderRowCount; r++) {
      //if invader is still alive, draw it again
      if (invaders[c][r].status === true) {
        let colorNum = Math.floor(Math.random() * 6);
        //generate a random
        // let num = (Math.random());
        // num *= Math.floor(Math.random()*2) === 1 ? 1 : -1;
        // invaderDX += num;

        let invaderX = (c*(invaderRadius+invaderPadding))+invaderOffsetLeft;
        invaderY = ((0.2)*c*r*(invaderHeight+invaderPadding))+invaderOffsetTop + offsetDown;
          //lets us know the position of the invaders
        invaders[c][r].x = invaderX;
        invaders[c][r].y = invaderY;
        //actually paints the invaders
        // ctx.beginPath();
        // ctx.rect(invaderX, invaderY, invaderRadius, invaderHeight);
        // ctx.fillStyle = "#0095DD";
        // ctx.fill();
        // ctx.closePath();
        //   //draw a circle
          ctx.beginPath();
        // //x coord of arc's center, y coord of arc's center,
        // //arc radius,
        // //start angle and end angle
        // //direction of draw: false is clockwise
        ctx.arc(invaderX, invaderY, invaderRadius, 0, Math.PI*2, false);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }

    }
  }
}





function drawShip() {
  ctx.beginPath();
  //x,y coords of the top left coner of a rect
  //x,y coords of the bottom right of a rect

  //(pos left the start of the shape,pos down the start of the shape, width, height )
  // ctx.rect(shipX, canvas.height-shipHeight, shipWidth, shipHeight);
  ctx.rect(shipX, shipY, shipWidth, shipHeight);

  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawMissile(w,x,y,z){
  ctx.beginPath();
  ctx.rect(w,x,y,z);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

// let missileDX = 0;

// let missileDY2 = 0;


// //the bigger this number, the slower the ball updates or moves
function drawBall() {
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#FFD700";
  ctx.fill();
  ctx.closePath();
}









//loop through all invaders and compare position with
//ball's coordinates as each frame is drawn
//invaders is the location array
function collisionDetection() {
  for (let i = 0; i < invaderColumnCount; i++) {
    for (let j = 0; j < invaderRowCount; j++) {
      //invaders[[i][j] gives you the location object of the particular
      //invader : {x: 0,y:0}
      let b = invaders[i][j];
      if(b.status === true){
        //this makes sure the missile intersects the position of the invader
        if (missileX > b.x -invaderRadius && missileX < b.x + invaderRadius && missileY > b.y && missileY < b.y+invaderHeight) {
          // dy=-dy;
          missileY = canvas.height;
          missileDY = 0;
          b.status = false;
          score++;
        }
      }
    }
  }
}

//draw is responsible for
function draw() {
  //clears the rect after every frame so that
  //ball doesn't leave a trail
  //parameters:
  //x,y coords of the top left coner of a rect
  //x,y coords of the bottom right of a rect
  //clears that whole area every frame ^^
  ctx.clearRect(0,0,canvas.width,canvas.height);
  drawBall();
  drawShip();
  drawInvaders(invaderDY);
  drawMissile(missileX,missileY,missileWidth,missileHeight);
  // drawMissile(missileX,missileY2,missileWidth,missileHeight);
  // drawMissile();
  collisionDetection();
  drawScore();

  //when missile exits the canvas
  //reload missile: put position back to canvas.height
  //change missile speed to zero
  if (missileY < 0) {
    missileY = canvas.height;
    missileDY = 0;
  }

  // if(missileY2 < 0) {
  //   missileY2 = canvas.height;
  //   missileDY2 = 0;
  // }

  if (gameOver() === true) {
    alert("You win!" );
    document.location.reload();
  }

  //move ship right
  if (rightPressed === true && shipX < canvas.width - shipWidth ) {
    shipX += 7;
  //move ship left
  } else if (leftPressed === true && shipX > 0) {
    shipX-= 7;
  } else if (upPressed === true) {
    missileDY = -4;

    // if (missileDY === 0 && missileDY2 === 0) {
    //   missileDY = -4;
    // } else if (missileDY === -4 && missileDY2 === 0 ) {
    //   missileDY2 = -4;
    // }

    //makes sure the missile starts at the same position as the ship
    //when it is launched
    if (missileY === canvas.height) {

      missileX = shipX + shipWidth/2;
    }

    // if (missileY2 === canvas.height) {
    //   missileX = shipX + shipWidth/2;
    // }

  }


  //x + dx together are the new x pos of the ball
  //if it goes above canvas height or below zero, change y direction

  //change x direction of ball if it hits the wall
  if(ballX + dx > canvas.width-ballRadius || ballX + dx < ballRadius) {
    dx = -dx;
  }

  //change y direction if ball hits ceiling
  if(ballY + dy < ballRadius) {
      dy = -dy;
      //if the ball touches the bottom of the canvas the
      //game is over
  }else {
    //if ball hits the ship it changes direction
    if(ballY + dy > canvas.height-ballRadius-shipHeight&&ballX > shipX && ballX < shipX + shipWidth) {
      dy = -dy;
    }else if (ballY + dy > canvas.height-ballRadius ) {
    //if ship and ball are on the same y coordinate
    // alert("Game over");
      document.location.reload();
    }
  }
  ballX+=dx;
  ballY+=dy;
  missileY += missileDY;
  invaderDY += 0.05;


  // missileY2 += missileDY2;
}

// The "keyup" event is sent to an element when the user releases a key on the keyboard. It can be attached to any element, but the event is only sent to the element that has the focus.

//"keydown" event is when the user is holding the key on the keyboard
//one of these events are always listening, depending on whether
//a key is being pressed
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

//event handler for event keydown
function keyDown(e) {
  if(e.keyCode == 39) {
      rightPressed = true;
  }
  else if(e.keyCode == 37) {
      leftPressed = true;
      //arrow up
  }else if (e.keyCode == 38) {

    upPressed = true;
  }else if (e.keyCode==40){
    downPressed = true;
  }
}

//event handler for event keyup
function keyUp(e) {
  if(e.keyCode == 39) {
      rightPressed = false;
  }
  else if(e.keyCode == 37) {
      leftPressed = false;
  }else if (e.keyCode == 38) {
    upPressed = false;
  }else if (e.keyCode==40){
    downPressed = false;
  }
}

function speedBall(){
  if (dx > 0) {
    dx +=0.03;
  }else {
    dx -=0.03;
  }

  if (dy > 0) {
    dy+=0.03;
  }else {
    dy-=0.03;
  }
}

const begin = document.getElementById("begin");
begin.addEventListener("click", setInterval(draw,10));
// setInterval(draw,10);
setInterval(speedBall,5000);



//draw a square
//   ctx.beginPath();
//   //(pos right,pos down, width, height )
//   ctx.rect(20,40,50,50);
//   ctx.fillStyle = "#FF0000";
//   ctx.fill();
//   ctx.closePath();
//
//
//
//   //draw a circle
//   ctx.beginPath();
// //x coord of arc's center, y coord of arc's center,
// //arc radius,
// //start angle and end angle
// //direction of draw: false is clockwise
// ctx.arc(240, 160, 20, 0, Math.PI*2, false);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();
//
//
// //draw an outline of a rectangle
// //use stroke instead of fill to just draw an outline
// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
// ctx.stroke();
// ctx.closePath();
