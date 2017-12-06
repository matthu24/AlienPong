/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

function Ball() {
  this.ballX = canvas.width / 2;
  this.ballY = canvas.height - 100;
  this.ballRadius = 10;
  this.ballDX = 2;
  this.ballDY = -2;
}

Ball.prototype.drawBall = function drawBall() {
  ctx.beginPath();
  ctx.arc(this.ballX, this.ballY, this.ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#FFD700";
  ctx.fill();
  ctx.closePath();
};

//need to pass in ship class 
Ball.prototype.animate = function animate(ship, score) {
  if (this.ballX + this.ballDX > canvas.width - this.ballRadius || this.ballX + this.ballDX < this.ballRadius) {
    this.ballDX = -this.ballDX;
  }

  if (this.ballY + this.ballDY < this.ballRadius) {

    this.ballDY = -this.ballDY;
    //if the this.ball touches the bottom of the canvas the
    //game is over
  } else {
    //if this.ball hits the ship it changes direction

    if (this.ballY + this.ballDY > canvas.height - this.ballRadius - ship.shipHeight && this.ballX > ship.shipX && this.ballX < ship.shipX + ship.shipWidth) {
      this.ballDY = -this.ballDY;
    } else if (this.ballY + this.ballDY > canvas.height - this.ballRadius) {
      //if ship and this.ball are on the same y coordinate
      // alert("Game over");
      // document.location.reload();
      // document.getElementById("modal-score").innerHTML = "Game over!  You destroyed " + score + " invaders!";
      // modal.style.display = "block";
    }
  }
  this.ballX += this.ballDX;
  this.ballY += this.ballDY;
};

/* harmony default export */ __webpack_exports__["a"] = (Ball);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ball__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ship__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ship___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ship__);
// //
// console.log("pong");


//
// import {drawBall} from "./ball";
// import {ballX,ballY,ballRadius,ballDX,ballDY} from "./ball";


const canvas = document.getElementById("myCanvas");
/* harmony export (immutable) */ __webpack_exports__["canvas"] = canvas;


//ctx stores the 2D rendering context
//this is the tool we use to paint on the canvas
const ctx = canvas.getContext("2d");
/* harmony export (immutable) */ __webpack_exports__["ctx"] = ctx;


//
// set ball initial position and movement
// where the ball starts
// let ballX = canvas.width/2;
// let ballY = canvas.height-100;
// //define ballRadius
// let ballRadius = 10;
// //sets initial direction of ball movement
// //also affects the velocity of the ball
// let ballDX = 2;
// //positive ballDX is to the right
// let ballDY=-2;
// //positive ballDY is down


//height width and starting x position
// let shipHeight = 10;
// let shipWidth = 75;
// let shipX = (canvas.width-shipWidth)/2;
// let shipY = (canvas.height-shipHeight);


let missileHeight = 10;
let missileWidth = 5;
//need to pass in ship object to missile class
let missileX = shipX;
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
let invaderWidth = 15;
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

//for collision detection purposes
let invaders = [];
for (let c = 0; c < invaderColumnCount; c++) {
  invaders[c] = [];
  for (let r = 0; r < invaderRowCount; r++) {
    //if exist is 1, draw it,
    //if exist is 0, don't
    invaders[c][r] = { x: 0, y: 0, exist: true };
  }
}
//invaders:
//[ [ { x: 0, y: 0, exist:true }, { x: 0, y: 0 }, { x: 0, y: 0 } ],
//  [ { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 } ],
//  [ { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 } ] ]

// function drawScore() {
//   ctx.font = "16px Arial";
//   ctx.fillStyle = "#0095DD";
//   ctx.fillText("Score: "+score, 10,23);
// }

//return boolean
//gameOver does not account for the ball crossing the line
// it only accounts for invader activity
function gameOver() {

  //if any invaders have crossed the line, end game
  for (let i = 0; i < invaders.length; i++) {
    for (let j = 0; j < invaders[0].length; j++) {
      if (invaders[i][j].y > canvas.height) {
        // debugger

        return true;
      }
    }
  }

  //if any invaders exist and have not crossed line ^^,
  //do not end game
  for (let i = 0; i < invaders.length; i++) {
    for (let j = 0; j < invaders[0].length; j++) {
      //if there are any invaders left, the game is not over

      if (invaders[i][j].exist === true) {
        return false;
      }
    }
  }
  //end game if both those are not true ^^
  return true;
}

//random number between -1 and 1:
// let num = (Math.random());
// num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;


function drawInvaders(offsetDown) {
  for (let c = 0; c < invaderColumnCount; c++) {
    for (let r = 0; r < invaderRowCount; r++) {
      //if invader is still alive, draw it again
      if (invaders[c][r].exist === true) {
        let colorNum = Math.floor(Math.random() * 6);
        //generate a random
        // let num = (Math.random());
        // num *= Math.floor(Math.random()*2) === 1 ? 1 : -1;
        // invaderDX += num;

        let invaderX = c * (invaderWidth + invaderPadding) + invaderOffsetLeft;
        invaderY = 0.2 * c * r * (invaderHeight + invaderPadding) + invaderOffsetTop + offsetDown;
        //lets us know the position of the invaders
        invaders[c][r].x = invaderX;
        invaders[c][r].y = invaderY;
        //actually paints the invaders
        // ctx.beginPath();
        // ctx.rect(invaderX, invaderY, invaderWidth, invaderHeight);
        // ctx.fillStyle = "#0095DD";
        // ctx.fill();
        // ctx.closePath();
        //   //draw a circle
        ctx.beginPath();
        // //x coord of arc's center, y coord of arc's center,
        // //arc radius,
        // //start angle and end angle
        // //direction of draw: false is clockwise
        ctx.arc(invaderX, invaderY, invaderWidth, 0, Math.PI * 2, false);
        // ctx.moveTo(75, 50);
        ctx.moveTo(invaderX - invaderWidth, invaderY);
        // ctx.lineTo(85, 90);
        ctx.lineTo(invaderX - invaderWidth / 2, invaderY + 20);
        //   ctx.lineTo(100, 62);

        ctx.lineTo(invaderX, invaderY + 4);
        //         ctx.lineTo(115, 90);
        ctx.lineTo(invaderX + invaderWidth / 2, invaderY + 20);
        ctx.lineTo(invaderX + invaderWidth, invaderY);
        ctx.lineTo(invaderX, invaderY - invaderWidth);
        // // ctx.lineTo(100, 75);
        // ctx.lineTo(125,50);
        // ctx.lineTo(100, 25);
        // ctx.fillStyle = "#0095DD";
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

// function drawShip() {
//   ctx.beginPath();
//   //x,y coords of the top left coner of a rect
//   //x,y coords of the bottom right of a rect
//
//   //(pos left the start of the shape,pos down the start of the shape, width, height )
//   // ctx.rect(shipX, canvas.height-shipHeight, shipWidth, shipHeight);
//   ctx.rect(shipX, shipY, shipWidth, shipHeight);
//
//   ctx.fillStyle = "#0095DD";
//   ctx.fill();
//   ctx.closePath();
// }

// module.exports = DrawShip;

function drawMissile(w, x, y, z) {
  ctx.beginPath();
  ctx.rect(w, x, y, z);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

// let missileDX = 0;

// let missileDY2 = 0;


// //the bigger this number, the slower the ball updates or moves
// function drawBall() {
//   ctx.beginPath();
//   ctx.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
//   ctx.fillStyle = "#C0C0C0";
//   ctx.fill();
//   ctx.closePath();
// }


//loop through all invaders and compare position with
//ball's coordinates as each frame is drawn
//invaders is the location array
function collisionDetection() {
  for (let i = 0; i < invaderColumnCount; i++) {
    for (let j = 0; j < invaderRowCount; j++) {
      //invaders[[i][j] gives you the location object of the particular
      //invader : {x: 0,y:0}
      let b = invaders[i][j];
      if (b.exist === true) {
        //this makes sure the missile intersects the position of the invader
        if (missileX > b.x - invaderWidth && missileX < b.x + invaderWidth && missileY > b.y && missileY < b.y + invaderHeight) {
          // ballDY=-ballDY;
          missileY = canvas.height;
          missileDY = 0;
          b.exist = false;
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
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const ball = new __WEBPACK_IMPORTED_MODULE_0__ball__["a" /* default */]();
  ball.drawBall();
  ball.animate();

  // debugger
  // drawBall();
  // drawShip();
  // drawInvaders(invaderDY);
  // drawMissile(missileX,missileY,missileWidth,missileHeight);
  // // drawMissile(missileX,missileY2,missileWidth,missileHeight);
  // drawMissile();
  collisionDetection();
  // drawScore();


  document.getElementById("score").innerHTML = "Score: " + score;

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
    document.getElementById("modal-score").innerHTML = "Game over!  You destroyed " + score + " invaders!";
    modal.style.display = "block";
  }

  //move ship right
  if (rightPressed === true && shipX < canvas.width - shipWidth) {
    shipX += 7;
    //move ship left
  } else if (leftPressed === true && shipX > 0) {
    shipX -= 7;
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

      missileX = shipX + shipWidth / 2;
    }

    // if (missileY2 === canvas.height) {
    //   missileX = shipX + shipWidth/2;
    // }
  }

  //x + ballDX together are the new x pos of the ball
  //if it goes above canvas height or below zero, change y direction

  //change x direction of ball if it hits the wall
  // console.log(ballDX);
  // if(ballX + ballDX > canvas.width-ballRadius || ballX + ballDX < ballRadius) {
  //   ballDX = -ballDX;
  // }
  //
  // //change y direction if ball hits ceiling
  //   // console.log(ballDY);
  // if(ballY + ballDY < ballRadius) {
  //
  //     ballDY = -ballDY;
  //     //if the ball touches the bottom of the canvas the
  //     //game is over
  // }else {
  //   //if ball hits the ship it changes direction
  //
  //   if(ballY + ballDY > canvas.height-ballRadius-shipHeight&&ballX > shipX && ballX < shipX + shipWidth) {
  //     ballDY = -ballDY;
  //   }else if (ballY + ballDY > canvas.height-ballRadius ) {
  //   //if ship and ball are on the same y coordinate
  //   // alert("Game over");
  //     // document.location.reload();
  //     document.getElementById("modal-score").innerHTML = "Game over!  You destroyed " + score + " invaders!";
  //     modal.style.display = "block";
  //   }
  // }
  //update ball and missile position each time
  // ballX+=ballDX;
  // ballY+=ballDY;
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
  if (e.keyCode == 39) {
    rightPressed = true;
  } else if (e.keyCode == 37) {
    leftPressed = true;
    //arrow up
  } else if (e.keyCode == 38) {

    upPressed = true;
  } else if (e.keyCode == 40) {
    downPressed = true;
  }
}

//event handler for event keyup
function keyUp(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  } else if (e.keyCode == 37) {
    leftPressed = false;
  } else if (e.keyCode == 38) {
    upPressed = false;
  } else if (e.keyCode == 40) {
    downPressed = false;
  }
}

function speedBall() {
  if (ballDX > 0) {
    ballDX += 0.03;
  } else {
    ballDX -= 0.03;
  }

  if (ballDY > 0) {
    ballDY += 0.03;
  } else {
    ballDY -= 0.03;
  }
}

const begin = document.getElementById("begin");
begin.addEventListener("click", beginGame);

function beginGame() {
  setInterval(draw, 10);
  setInterval(speedBall, 5000);
}
// setInterval(draw,10);


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// btn.onclick = function() {
//
//     modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  document.location.reload();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

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

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const canvas = document.getElementById("myCanvas");
/* unused harmony export canvas */


const ctx = canvas.getContext("2d");
/* unused harmony export ctx */


function Ship() {
  this.shipHeight = 10;
  this.shipWidth = 75;
  this.shipX = (canvas.width - this.shipWidth) / 2;
  this.shipY = canvas.height - this.shipHeight;
}

Ship.prototype.drawShip = function drawShip() {
  ctx.beginPath();
  //x,y coords of the top left coner of a rect
  //x,y coords of the bottom right of a rect

  //(pos left the start of the shape,pos down the start of the shape, width, height )
  // ctx.rect(shipX, canvas.height-shipHeight, shipWidth, shipHeight);
  ctx.rect(this.shipX, this.shipY, this.shipWidth, this.shipHeight);

  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
};

//need to pass in rightPressed and leftPressed variables 
Ship.prototype.animate = function animate(rightPressed, leftPressed) {
  if (rightPressed === true && this.shipX < canvas.width - this.shipWidth) {
    this.shipX += 7;
    //move ship left
  } else if (leftPressed === true && this.shipX > 0) {
    this.shipX -= 7;
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map