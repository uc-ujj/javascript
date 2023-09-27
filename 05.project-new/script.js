const grid = document.querySelector(".grid");
const score = document.getElementById("score");

let width = 10;

for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  grid.prepend(div);
}

const squares = document.querySelectorAll(".grid div");
console.log(squares);

// const balls = []

let currentPosition = 4;

function createBall() {
  squares[currentPosition].classList.add("ball");
}

createBall();

function removeBall() {
  squares[currentPosition].classList.remove("ball");
}

// Moving the ball down
const timerId = setInterval(moveDown, 500);

function moveDown() {
  removeBall();
  currentPosition += width;
  createBall();
  freeze();
}

for (let i = 0; i < 10; i++) {
  const div = document.createElement("div");
  div.classList = "reserved";
  grid.appendChild(div);
}

function freeze() {
  if (squares[currentPosition + width].classList === "reserved") {
    squares[currentPosition].classList.add("reserved");

    currentPosition = 4;
    createBall();
  }

  squares.forEach((square) => {
    if (square.classList === "reserved") {
    }
  });
}


// Increasing the Level
function increaseLevel() {
  let currLevel = Number(level.textContent);
  currLevel += 1;
  level.textContent = currLevel;
  //   console.log(level.textContent);
}

function decreaseLevel() {
  let currLevel = Number(level.textContent);
  if (currLevel > 0) {
    currLevel -= 1;
    level.textContent = currLevel;
  }
}

// Level Button Event Listeners
incLevelBtn.addEventListener("click", () => {
  increaseLevel();
});

decLevelBtn.addEventListener("click", () => {
  decreaseLevel();
});

//assign functions to keys
function control(e) {
  if (e.keyCode === 37) {
    moveLeft();
  } else if (e.keyCode === 39) {
    moveRight();
  } else if (e.keyCode === 40) {
    moveDown();
  }
}
document.addEventListener("keyup", control);