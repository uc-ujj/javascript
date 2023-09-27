let gameBoard = document.getElementById('game-board');
let scoreElement = document.getElementById('score');
let increaseLevelButton = document.getElementById('increase-level');
let decreaseLevelButton = document.getElementById('decrease-level');

let score = 0;
let level = 1;
let gameBlocks = [];

// Function to create a new game block
function createBlock() {
  let block = document.createElement('div');
  block.style.width = '30px';
  block.style.height = '30px';
  block.style.background = getRandomColor();
  gameBoard.appendChild(block);
  gameBlocks.push(block);
}

// Function to get a random color
function getRandomColor() {
  let colors = ['purple', 'green', 'yellow', 'skyblue'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Function to update the score
function updateScore() {
  score++;
  scoreElement.textContent = score;
}

// Event listeners for the level buttons
increaseLevelButton.addEventListener('click', function() {
  level++;
});

decreaseLevelButton.addEventListener('click', function() {
  if (level > 1) {
    level--;
  }
});

// Start the game
setInterval(createBlock, 1000 / level);