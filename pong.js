import Ball from "./ball";
import Ship from "./ship";
import Missile from "./missile";
import Invader from "./invader";


export const canvas = document.getElementById("myCanvas");

//ctx stores the 2D rendering context
//this is the tool we use to paint on the canvas
export const ctx = canvas.getContext("2d");


//user interactivity
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;


let score = 0;

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: "+score, 10,23);
}

//return boolean
//gameOver does not account for the ball crossing the line
// it only accounts for invader activity
function gameOver(){

  //if any invaders have crossed the line, end game
  for (let i = 0; i < invaders.length; i++) {
    for (let j = 0; j < invaders[0].length; j++) {
      if (invaders[i][j].y > canvas.height) {
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




const ball = new Ball();
const ship = new Ship();
const missile = new Missile(ship);
const invader = new Invader();

function draw() {
  //clears the rect after every frame so that
  //ball doesn't leave a trail
  //parameters:
  //x,y coords of the top left coner of a rect
  //x,y coords of the bottom right of a rect
  //clears that whole area every frame ^^
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ship.drawShip(rightPressed,leftPressed);
  ball.drawBall(ship);
  missile.drawMissile(upPressed,ship);
  invader.drawInvaders();
  let updateScore = invader.collisionDetection(missile,score);
  score = updateScore === true ? score+1 : score;
  // collisionDetection();
  // drawScore();
  document.getElementById("score").innerHTML = "Score: " + score;
  // if (gameOver() === true) {
  //   document.getElementById("modal-score").innerHTML = "Game over!  You destroyed " + score + " invaders!";
  //   modal.style.display = "block";
  // }
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

function speedBall(){
  if (ballDX > 0) {
    ballDX +=0.03;
  }else {
    ballDX -=0.03;
  }

  if (ballDY > 0) {
    ballDY+=0.03;
  }else {
    ballDY-=0.03;
  }
}

const begin = document.getElementById("begin");
begin.addEventListener("click", beginGame);

function beginGame(){
  setInterval(draw,10);
  // setInterval(speedBall,5000);
}
// setInterval(draw,10);


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    document.location.reload();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
