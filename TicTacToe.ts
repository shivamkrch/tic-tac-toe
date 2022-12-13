interface WinResult {
  isWinner: boolean;
  winnerCells?: { r: number; c: number }[];
}

export default class TicTacToe {
  private _grid: string[][];
  private _currentPlayer: string;
  private _finished: boolean;

  constructor() {
    this._grid = Array(3)
      .fill([])
      .map((_) => Array(3).fill("-"));
    this._currentPlayer = "X";
    this._finished = false;
  }

  get currentPlayer() {
    return this._currentPlayer;
  }

  get finished() {
    return this._finished;
  }

  /**
   * Fill a cell and check if the current player wins or not
   * @param row Row of cell to fill
   * @param col Column of cell to fill
   * @returns If the current player is winner or not
   */
  fill(row: number, col: number): WinResult {
    if (row < 1 || row > 3 || col < 1 || col > 3)
      throw new Error("Row and column should be in range 1-3");

    if (this._finished) throw new Error("Game finished.");

    if (this._grid[row - 1][col - 1] !== "-")
      throw new Error("Cell already filled");

    this._grid[row - 1][col - 1] = this._currentPlayer;
    const winResult = this._isCurrentPlayerWinner(row - 1, col - 1);
    if (winResult.isWinner) {
      this._finished = true;
      return winResult;
    }
    this._updateCurrentPlayer();
    this._finished = this._grid.every((row) =>
      row.every((cell) => cell !== "-")
    );
    return winResult;
  }

  private _isCurrentPlayerWinner(row: number, col: number): WinResult {
    const rowWise = this._grid[row].every(
      (cell) => cell === this._currentPlayer
    );
    if (rowWise) {
      return {
        isWinner: true,
        winnerCells: Array(3)
          .fill({})
          .map((_, i) => ({ r: row, c: i }))
      };
    }

    const colWise = this._grid.every((row) => row[col] === this._currentPlayer);
    if (colWise) {
      return {
        isWinner: true,
        winnerCells: Array(3)
          .fill({})
          .map((_, i) => ({ r: i, c: col }))
      };
    }
    if (
      ((row === 0 || row === 2) && (col === 0 || col === 2)) ||
      (row === 1 && col === 1)
    ) {
      const diagonals = [
        [
          { r: 0, c: 0 },
          { r: 1, c: 1 },
          { r: 2, c: 2 }
        ],
        [
          { r: 0, c: 2 },
          { r: 1, c: 1 },
          { r: 2, c: 0 }
        ]
      ];

      if (
        diagonals[0].every(
          (cell) => this._grid[cell.r][cell.c] === this._currentPlayer
        )
      ) {
        return {
          isWinner: true,
          winnerCells: diagonals[0]
        };
      }

      if (
        diagonals[1].every(
          (cell) => this._grid[cell.r][cell.c] === this._currentPlayer
        )
      ) {
        return {
          isWinner: true,
          winnerCells: diagonals[1]
        };
      }
    }

    return { isWinner: false };
  }

  private _updateCurrentPlayer() {
    if (this._currentPlayer === "X") this._currentPlayer = "O";
    else this._currentPlayer = "X";
  }

  printGrid() {
    this._grid.forEach((row) => console.log(row.join(" ")));
  }
}
