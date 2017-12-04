export const drawScore = function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: "+score, 8,20);
}

//return boolean
export const winGame = function winGame(){
  for (var i = 0; i < bricks.length; i++) {
    for (var j = 0; j < bricks[0].length; j++) {
      if (bricks[i][j].status === 1) {
        return false;
      }
    }
  }
  return true;
}
