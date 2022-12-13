const grid = document.querySelector(".grid");
const message = document.getElementById("message");

let game = new TicTacToe();

function intializeGame() {
  grid.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    const rowEl = document.createElement("div");
    rowEl.classList.add("row");
    rowEl.id = `row-${i}`;
    for (let j = 0; j < 3; j++) {
      const colEl = document.createElement("div");
      colEl.classList.add("col");
      colEl.id = `cell-${i}-${j}`;
      colEl.onclick = (e) => fillCell(e, i, j);
      rowEl.append(colEl);
    }
    grid.append(rowEl);
  }
  game = new TicTacToe();
  message.className = "info";
  message.innerText = `${game.currentPlayer}'s turn`;
}

function fillCell(e, row, col) {
  try {
    const { currentPlayer } = game;
    const winResult = game.fill(row + 1, col + 1);
    e.target.innerText = currentPlayer;
    if (winResult.isWinner) {
      message.className = "success";
      message.innerText = `${game.currentPlayer} won`;
      winResult.winnerCells.forEach((cell) =>
        document
          .getElementById(`cell-${cell.r}-${cell.c}`)
          .classList.add("winning-cell")
      );
      return;
    } else if (game.finished) {
      message.className = "info";
      message.innerText = `Game Draw`;
      return;
    }
    message.className = "info";
    message.innerText = `${game.currentPlayer}'s turn`;
  } catch (err) {
    message.className = "error";
    message.innerText = err.message;
  }
}

intializeGame();
