// const winningBoard = require('./winning-board');
import winningBoard from './winning-board';

class TicTacToe {
  constructor(size = 9) {
    // Check for size being an odd number & not a prime //
    if (size % 2 === 0 || !Number.isInteger(Math.sqrt(size))) {
      throw new Error('Invalid board size');
    }
    this.size = size;
    this.board = this.createBoard();
    this.boardSize = Math.sqrt(size);
    this.mark = 'O';
    this.inProgress = true;
  }

  createBoard() {
    // Create an array of the size indicated //
    const board = new Array(this.size);
    // Fill it with empty strings //
    board.fill('');
    return board;
  }

  changeMark(mark) {
    // If the mark is 'O' set it to 'X' and vice versa //
    mark === 'O' ? (this.mark = 'X') : (this.mark = 'O');
  }

  getBoard() {
    return this.board;
  }

  markSpot(index) {
    // If the game is not in progress return an error string //
    if (!this.inProgress) {
      return 'Sorry the game is over';
    }
    // If the index is not an empty string it is an invalid move //
    if (this.board[index] !== '') {
      return 'Invalid position';
    }
    // Set the string at the index to the current mark //
    this.board[index] = this.mark;

    // If the board is winning end the game and return who won //
    if (this.checkBoard()) {
      this.inProgress = false;
      return `${this.mark} has won the Game!`;
    }
    // Change the mark //
    this.changeMark(this.mark);
    // Return a new board //
    return this.getBoard();
  }

  checkBoard() {
    return winningBoard(this.board, this.boardSize);
  }
}

export default TicTacToe;

// const board = new TicTacToe();

// console.log(board.markSpot(2));
// console.log(board.markSpot(5));
// board.markSpot(4);
// board.markSpot(3);
// console.log(board.markSpot(6));
// console.log(board.markSpot(1));

// console.log(board.checkBoard());
