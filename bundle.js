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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
window.human = false;

var canvasEl = document.getElementById("myCanvas");
var ctx = canvasEl.getContext('2d');

function Explode() {
  this.numberOfParticules = 30;
  this.colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];
}
// var pointerX = 0;
// var pointerY = 0;
// var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';

Explode.prototype.explosion = function explosion(explodeX, explodeY) {
  const numberOfParticules = this.numberOfParticules;
  const colors = this.colors;
  function setParticuleDirection(p) {
    var angle = anime.random(0, 360) * Math.PI / 180;
    var value = anime.random(50, 180);
    var radius = [-1, 1][anime.random(0, 1)] * value;
    return {
      x: p.x + radius * Math.cos(angle),
      y: p.y + radius * Math.sin(angle)
    };
  }

  function createParticule(x, y) {
    var p = {};
    p.x = x;
    p.y = y;
    p.color = colors[anime.random(0, colors.length - 1)];
    p.radius = anime.random(16, 32);
    p.endPos = setParticuleDirection(p);
    p.draw = function () {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
      ctx.fillStyle = p.color;
      ctx.fill();
    };
    return p;
  }

  function createCircle(x, y) {
    var p = {};
    p.x = x;
    p.y = y;
    p.color = '#FFF';
    p.radius = 0.1;
    p.alpha = .5;
    p.lineWidth = 6;
    p.draw = function () {
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
      ctx.lineWidth = p.lineWidth;
      ctx.strokeStyle = p.color;
      ctx.stroke();
      ctx.globalAlpha = 1;
    };
    return p;
  }

  function renderParticule(anim) {
    for (var i = 0; i < anim.animatables.length; i++) {
      anim.animatables[i].target.draw();
    }
  }

  function animateParticules(x, y) {
    var circle = createCircle(x, y);
    var particules = [];
    for (var i = 0; i < numberOfParticules; i++) {
      particules.push(createParticule(x, y));
    }
    anime.timeline().add({
      targets: particules,
      x: function (p) {
        return p.endPos.x;
      },
      y: function (p) {
        return p.endPos.y;
      },
      radius: 0.1,
      duration: anime.random(1200, 1800),
      easing: 'easeOutExpo',
      update: renderParticule
    }).add({
      targets: circle,
      radius: anime.random(80, 160),
      lineWidth: 0,
      alpha: {
        value: 0,
        easing: 'linear',
        duration: anime.random(600, 800)
      },
      duration: anime.random(1200, 1800),
      easing: 'easeOutExpo',
      update: renderParticule,
      offset: 0
    });
  }

  //clears animation
  var render = anime({
    duration: Infinity,
    update: function () {
      // ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    }
  });

  //triggers animation
  //sets location
  // btn.onclick = function(){
  //   debugger;
  //   animateParticules(canvasEl.width/4,canvasEl.height/4);
  //
  // }


  const explode = function (x, y) {
    animateParticules(x, y);
  };
  explode(explodeX, explodeY);
};

/* harmony default export */ __webpack_exports__["a"] = (Explode);

//
// setCanvasSize();
// window.addEventListener('resize', setCanvasSize, false);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function Ball() {
  this.ballX = canvas.width / 2;
  this.ballY = canvas.height - 100;
  this.ballRadius = 10;
  this.ballDX = 1.5;
  this.ballDY = -1.5;
}

Ball.prototype.drawBall = function drawBall(ship) {
  ctx.beginPath();
  ctx.arc(this.ballX, this.ballY, this.ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#C0C0C0";
  ctx.fill();
  ctx.closePath();

  //handles collision with walls
  //adds DX prematurely because don't want ball to sink into walls
  if (this.ballX + this.ballDX > canvas.width - this.ballRadius || this.ballX + this.ballDX < this.ballRadius) {
    this.ballDX = -this.ballDX;
  }
  //handle collision with ceiling
  if (this.ballY + this.ballDY < this.ballRadius) {
    this.ballDY = -this.ballDY;
  } else {
    //if this.ball hits the ship it changes direction
    // if (this.ballY + this.ballDY === canvas.height-this.ballRadius-ship.shipHeight&&this.ballX > ship.shipX && this.ballX < ship.shipX + ship.shipWidth) {
    //   this.ballDY = -this.ballDY;
    //   this.ballDX = -this.ballDX;
    // }


    // if(this.ballY > canvas.height-this.ballRadius-ship.shipHeight&&this.ballX > ship.shipX-this.ballRadius && this.ballX < ship.shipX + ship.shipWidth) {
    //   return false
    // }else
    if (this.ballY + this.ballDY > canvas.height - this.ballRadius - ship.shipHeight && this.ballX > ship.shipX && this.ballX < ship.shipX + ship.shipWidth) {
      this.ballDY = -this.ballDY;

      //THIS IS THE EDGE CASE
    } else if (this.ballY + this.ballDY > canvas.height - this.ballRadius - ship.shipHeight && (this.ballX > ship.shipX - this.ballRadius && this.ballX < ship.shipX || this.ballX < ship.shipX + ship.shipWidth + this.ballRadius && this.ballX > ship.shipX + ship.shipWidth)) {
      this.ballDY = -this.ballDY;
      this.ballDX = -this.ballDX;
    } else if (this.ballY > canvas.height - this.ballRadius) {
      return false;
    }

    // else if (this.ballY + this.ballDY > canvas.height+this.ballRadius ) {
    // //if ship and this.ball are on the same y coordinate
    //   return false;
    // }
  }
  this.ballX += this.ballDX;
  this.ballY += this.ballDY;
};

Ball.prototype.speedBall = function speedBall() {

  if (this.ballDX > 0) {
    this.ballDX += 0.03;
  } else {
    this.ballDX -= 0.03;
  }

  if (this.ballDY > 0) {
    this.ballDY += 0.03;
  } else {
    this.ballDY -= 0.03;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Ball);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__explode__ = __webpack_require__(0);
const canvas = document.getElementById("myCanvas");
/* unused harmony export canvas */

const ctx = canvas.getContext("2d");
/* unused harmony export ctx */




const explode = new __WEBPACK_IMPORTED_MODULE_0__explode__["a" /* default */]();

function Invader() {
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
  for (let c = 0; c < this.invaderColumnCount; c++) {
    this.invaders[c] = [];

    for (let r = 0; r < this.invaderRowCount; r++) {
      //if exist is true, draw it,
      //if exist is false, don't
      this.invaders[c][r] = { x: 0, y: 0, exist: true };
    }
    //invaders:
    //[ [ { x: 0, y: 0, exist:true }, { x: 0, y: 0 }, { x: 0, y: 0 } ],
    //  [ { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 } ],
    //  [ { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 } ] ]
  }
}

Invader.prototype.drawInvaders = function drawInvaders() {
  for (let c = 0; c < this.invaderColumnCount; c++) {
    for (let r = 0; r < this.invaderRowCount; r++) {

      if (this.invaders[c][r].exist === true) {
        this.invaderX = c * (this.invaderWidth + this.invaderPadding) + this.invaderOffsetLeft;
        //this.invaderDY moves position of invaders
        this.invaderY = 0.2 * c * r * (this.invaderHeight + this.invaderPadding) + this.invaderOffsetTop + this.invaderDY;
        this.invaders[c][r].x = this.invaderX;
        this.invaders[c][r].y = this.invaderY;
        ctx.beginPath();
        ctx.arc(this.invaderX, this.invaderY, this.invaderWidth, 0, Math.PI * 2, false);
        ctx.moveTo(this.invaderX - this.invaderWidth, this.invaderY);
        ctx.lineTo(this.invaderX - this.invaderWidth / 2, this.invaderY + 20);
        ctx.lineTo(this.invaderX, this.invaderY + 4);
        ctx.lineTo(this.invaderX + this.invaderWidth / 2, this.invaderY + 20);
        ctx.lineTo(this.invaderX + this.invaderWidth, this.invaderY);
        ctx.lineTo(this.invaderX, this.invaderY - this.invaderWidth);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
  this.invaderDY += 0.05;
};

//loop through invaders,
Invader.prototype.collisionDetection = function collisionDetection(missile) {
  for (let i = 0; i < this.invaderColumnCount; i++) {
    for (let j = 0; j < this.invaderRowCount; j++) {
      //this.invaders[[i][j] gives you the location object of the particular
      //this.invader : {x: 0,y:0}
      let b = this.invaders[i][j];
      if (b.exist === true) {
        //this makes sure the missile intersects the position of the this.invader
        if (missile.missileX > b.x - this.invaderWidth && missile.missileX < b.x + this.invaderWidth && missile.missileY > b.y && missile.missileY < b.y + this.invaderHeight) {
          // ballDY=-ballDY;
          missile.missileY = canvas.height;
          missile.missileDY = 0;
          b.exist = false;
          explode.explosion(b.x, b.y);
          //return true so that pong.js knows there was a collision
          return true;
        }
      }
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Invader);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const canvas = document.getElementById("myCanvas");
/* unused harmony export canvas */

const ctx = canvas.getContext("2d");
/* unused harmony export ctx */


function Missile(ship) {
  this.missileHeight = 10;
  this.missileWidth = 5;
  this.missileX = ship.shipX;
  this.missileY = canvas.height;
  this.missileDY = 0;
}

Missile.prototype.drawMissile = function drawMissile(upPressed, ship) {
  ctx.beginPath();
  ctx.rect(this.missileX, this.missileY, this.missileWidth, this.missileHeight);
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
      this.missileX = ship.shipX + ship.shipWidth / 2;
    }
  }
  this.missileY += this.missileDY;
};

Missile.prototype.animate = function animate(upPressed, ship) {
  if (this.missileY < 0) {
    this.missileY = canvas.height;
    this.missileDY = 0;
  }
  if (upPressed === true) {
    this.missileDY = -4;
    if (this.missileY === canvas.height) {
      this.missileX = ship.shipX + ship.shipWidth / 2;
    }
  }
  this.missileY += this.missileDY;
};

/* harmony default export */ __webpack_exports__["a"] = (Missile);

/***/ }),
/* 4 */
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

Ship.prototype.drawShip = function drawShip(rightPressed, leftPressed) {
  ctx.beginPath();
  //x,y coords of the top left coner of a rect
  //x,y coords of the bottom right of a rect

  //(pos left the start of the shape,pos down the start of the shape, width, height )
  // ctx.rect(shipX, canvas.height-shipHeight, shipWidth, shipHeight);
  ctx.rect(this.shipX, this.shipY, this.shipWidth, this.shipHeight);

  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
  if (rightPressed === true && this.shipX < canvas.width - this.shipWidth) {
    this.shipX += 7;
    //move ship left
  } else if (leftPressed === true && this.shipX > 0) {
    this.shipX -= 7;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Ship);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ball__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ship__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__missile__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invader__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__explode__ = __webpack_require__(0);






const canvas = document.getElementById("myCanvas");
/* harmony export (immutable) */ __webpack_exports__["canvas"] = canvas;

const ctx = canvas.getContext("2d");
/* harmony export (immutable) */ __webpack_exports__["ctx"] = ctx;


const ball = new __WEBPACK_IMPORTED_MODULE_0__ball__["a" /* default */]();
const ship = new __WEBPACK_IMPORTED_MODULE_1__ship__["a" /* default */]();
const missile = new __WEBPACK_IMPORTED_MODULE_2__missile__["a" /* default */](ship);
const invader = new __WEBPACK_IMPORTED_MODULE_3__invader__["a" /* default */]();
const explode = new __WEBPACK_IMPORTED_MODULE_4__explode__["a" /* default */]();

//user interactivity
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let score = 0;
let ballLive = true;

function gameOver(invader) {
  if (ballLive === false) {
    return true;
  }
  //if any invaders have crossed the line, end game
  for (let i = 0; i < invader.invaders.length; i++) {
    for (let j = 0; j < invader.invaders[0].length; j++) {
      if (invader.invaders[i][j].y > canvas.height) {
        return true;
      }
    }
  }
  //if any invader.invaders exist and have not crossed line ^^,
  //do not end game
  for (let i = 0; i < invader.invaders.length; i++) {
    for (let j = 0; j < invader.invaders[0].length; j++) {
      //if there are any invader.invaders left, the game is not over
      if (invader.invaders[i][j].exist === true) {
        return false;
      }
    }
  }
  //end game if both those are not true ^^
  return true;
}

//ball is available from the top level scope
// don't need to pass it in
function speedBall() {
  ball.speedBall();
}

function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ship.drawShip(rightPressed, leftPressed);
  let ballUpdate = ball.drawBall(ship);
  if (ballUpdate === false) {
    ballLive = false;
  }
  missile.drawMissile(upPressed, ship);
  invader.drawInvaders();
  //collisionDetection returns a boolean of whether or not there was a collision
  let updateScore = invader.collisionDetection(missile, score);
  //if there was a collision, update score, if not don't
  score = updateScore === true ? score + 1 : score;

  document.getElementById("score").innerHTML = "Score: " + score;
  if (gameOver(invader) === true) {
    document.getElementById("modal-score").innerHTML = "Game over!  You destroyed " + score + " invaders!";
    beginModal.style.display = "block";
  }
}

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

const begin = document.getElementById("begin");
begin.addEventListener("click", beginGame);

function beginGame() {
  explode.explosion(canvas.width / 2, canvas.height / 2);
  setInterval(draw, 10);
  setInterval(speedBall, 5000);
}

// Get the beginModal
const beginModal = document.getElementById('myModal');
// Get the button that opens the beginModal
// const btn = document.getElementById("myBtn");
// Get the <span> element that closes the beginModal
const span = document.getElementsByClassName("endgameClose")[0];

// When the user clicks on <span> (x), close the beginModal
span.onclick = function () {
  beginModal.style.display = "none";
  document.location.reload();
};

// When the user clicks anywhere outside of the beginModal, close it
window.onclick = function (event) {
  if (event.target == beginModal) {
    beginModal.style.display = "none";
  }
};

const instructionsModal = document.getElementById('instructionsModal');
const instructionsSpan = document.getElementsByClassName("instructionsClose")[0];
instructionsSpan.onclick = function () {
  instructionsModal.style.display = "none";
  document.location.reload();
};

const instructionContent = "Left and right arrow to move the ship.  Up arrow fires at alien targets.  Score points by destroying aliens.  Don't allow the bouncing projectile or any of the aliens to reach the bottom.  The ball speeds up as the game progresses!  Explosions using the Anime.js library.";

const instructionsBtn = document.getElementById("instruction");
instructionsBtn.onclick = function () {
  document.getElementById("modal-instruction").innerHTML = instructionContent;
  instructionsModal.style.display = "block";
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map