const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");

obstacle.classList.add("obstacle-move");

function jump() {
  if (!player.classList.contains("jump")) {
    player.classList.add("jump");
    
    setTimeout(function () {
      player.classList.remove("jump");
    }, 500);
  }
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Space" || event.key === " ") {
    event.preventDefault();
    jump();
  }
});

document.addEventListener("click", function () {
  jump();
});

setInterval(function () {
  let playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
  let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

  if (obstacleLeft > 50 && obstacleLeft < 90 && playerBottom <= 40) {
    obstacle.classList.remove("obstacle-move");
    alert("Game Over!");
    obstacle.classList.add("obstacle-move");
  }
}, 10);
