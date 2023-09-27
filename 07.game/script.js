const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

// Game variables
const BALL_SIZE = 10;
const BALL_COLORS = ["purple", "green", "yellow", "skyblue"];
const DROP_SPEED = 10; // milliseconds
const LEVEL_MULTIPLIER = 1.5;

// Game state
let level = 1;
let score = 0;
let gameOver = false;

// Game objects
let balls = [];

// Initialize the game
function init() {
  balls = [];
  for (let i = 0; i < 10; i++) {
    // Create a new ball
    const ball = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      color: BALL_COLORS[Math.floor(Math.random() * BALL_COLORS.length)],
    };
    // Add the ball to the game state
    balls.push(ball);
  }
}

// Update the game state
function update() {
  // Move the balls down
  for (const ball of balls) {
    ball.y += DROP_SPEED * level;
  }

  // Check for collisions
  for (const ball of balls) {
    // Check if the ball has hit the bottom of the screen
    if (ball.y + BALL_SIZE > canvas.height) {
      gameOver = true;
    }

    // Check if the ball has hit another ball
    for (const otherBall of balls) {
      if (
        ball !== otherBall &&
        ball.x === otherBall.x &&
        ball.y === otherBall.y
      ) {
        // Remove both balls from the game state
        balls.splice(balls.indexOf(ball), 1);
        balls.splice(balls.indexOf(otherBall), 1);

        // Increase the score
        score++;

        // Check if there are any balls left
        if (balls.length === 0) {
          gameOver = true;
        }
      }
    }
  }
}

// Render the game state
function render() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the balls
  for (const ball of balls) {
    ctx.fillStyle = ball.color;
    ctx.fillRect(ball.x, ball.y, BALL_SIZE, BALL_SIZE);
  }

  // Display the score
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText(`Score: ${score}`, 10, 20);
}

// Game loop
function gameLoop() {
  update();
  render();

  if (!gameOver) {
    requestAnimationFrame(gameLoop);
  } else {
    alert(`Game over! Your score is ${score}`);
  }
}

// Start the game
init();
gameLoop();

// Handle keyboard events
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowRight":
      // Move the balls to the right
      for (const ball of balls) {
        ball.x += 10;
      }
      break;
    case "ArrowLeft":
      // Move the balls to the left
      for (const ball of balls) {
        ball.x -= 10;
      }
      break;
    case "ArrowDown":
      // Increase the drop speed of the balls
      level *= LEVEL_MULTIPLIER;
      break;
  }
});
