import TicTacToe from "./TicTacToe";

const game = new TicTacToe();

game.fill(1, 1);
game.fill(1, 2);
game.fill(1, 3);
game.fill(2, 1);
game.fill(2, 2);
game.fill(2, 3);
game.fill(3, 2);
game.fill(3, 3);
game.fill(3, 1);

game.printGrid();
