import Ball from "./ball";
import Ship from "./ship";
import Missile from "./missile";
import Invader from "./invader";


export const canvas = document.getElementById("myCanvas");
export const ctx = canvas.getContext("2d");




const ball = new Ball();
const ship = new Ship();
const missile = new Missile(ship);
const invader = new Invader();

//user interactivity
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let score = 0;
let ballLive = true;

function gameOver(invader){
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
function speedBall(){
  ball.speedBall();
}

function draw() {

  ctx.clearRect(0,0,canvas.width,canvas.height);
  ship.drawShip(rightPressed,leftPressed);
  let ballUpdate = ball.drawBall(ship);
  if (ballUpdate === false) {
    ballLive = false;
  }
  missile.drawMissile(upPressed,ship);
  invader.drawInvaders();
  //collisionDetection returns a boolean of whether or not there was a collision
  let updateScore = invader.collisionDetection(missile,score);
  //if there was a collision, update score, if not don't
  score = updateScore === true ? score+1 : score;

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

const begin = document.getElementById("begin");
begin.addEventListener("click", beginGame);

function beginGame(){
  setInterval(draw,10);
  setInterval(speedBall,5000);
}

// Get the beginModal
const beginModal = document.getElementById('myModal');
// Get the button that opens the beginModal
// const btn = document.getElementById("myBtn");
// Get the <span> element that closes the beginModal
const span = document.getElementsByClassName("endgameClose")[0];

// When the user clicks on <span> (x), close the beginModal
span.onclick = function() {
    beginModal.style.display = "none";
    document.location.reload();
}

// When the user clicks anywhere outside of the beginModal, close it
window.onclick = function(event) {
    if (event.target == beginModal) {
        beginModal.style.display = "none";
    }
};

const instructionsModal = document.getElementById('instructionsModal');
const instructionsSpan = document.getElementsByClassName("instructionsClose")[0];
instructionsSpan.onclick = function() {
    instructionsModal.style.display = "none";
    document.location.reload();
};

const instructionContent = "Left and right arrow to move the ship.  Up arrow fires at alien targets.  Score points by destroying aliens.  Don't allow the bouncing projectile or any of the aliens to reach the bottom.  The ball speeds up as the game progresses!";

const instructionsBtn = document.getElementById("instruction");
instructionsBtn.onclick = function(){
  document.getElementById("modal-instruction").innerHTML = instructionContent;
  instructionsModal.style.display = "block";
}
