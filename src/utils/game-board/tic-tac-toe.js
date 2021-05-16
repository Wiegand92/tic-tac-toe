// const winningBoard = require('./winning-board');
import winningBoard from './winning-board';

class TicTacToe {
  constructor(size = 9) {
    // Check for size being an odd number & not a prime //
    if (size % 2 === 0 || !Number.isInteger(Math.sqrt(size))) {
      throw new Error('Invalid board size');
    }
    this.board = this.createBoard(size);
    this.boardSize = Math.sqrt(size);
    this.inProgress = true;
    this.legalMoves = this.board.map((piece, index) => {if(piece === '') return index})
    this.mark = 'O';
    this.players = 1;
    this.size = size;
    this.turns = 0;
  }
  
  createBoard(size) {
    // Create an array of the size indicated //
    const board = new Array(size);
    // Fill it with empty strings //
    board.fill('');
    return board;
  }
  
  changeMark(mark) {
    // If the mark is 'O' set it to 'X' and vice versa //
    mark === 'O' ? (this.mark = 'X') : (this.mark = 'O');
  }

  checkBoard() {
    return winningBoard(this.board, this.boardSize);
  }
  
  getBoard() {
    return this.board;
  }

  getLegalMoves(board){
    const newLegalMoves = []
    board.forEach((piece, index) => {if(piece === '') newLegalMoves.push(index)})
    return newLegalMoves
  }

  incrementMoves() {
    this.turns += 1
  }

  markSpot(index) {
    // If the game is not in progress return an error string //
    if (!this.inProgress) {
      return 'Sorry the game is over';
    };
    // If the index is not an empty string it is an invalid move //
    if (!this.legalMoves.includes(index)) {
      return 'Invalid position';
    };
    this.incrementMoves();
    // Set the string at the index to the current mark //
    this.board[index] = this.mark;
    
    // Game can only be won after boardSize * 2 - 1 turns
    if(this.turns >= this.boardSize * 2 - 1){
      // If the board is winning end the game and return who won //
      if (this.checkBoard()) {
        this.inProgress = false;
        return {board: this.board, message:`${this.mark} has won the Game!`};
      }
      if (!this.board.includes('') && !this.checkBoard()) {
        return {board: this.board, message:'The game was a tie!'};
      }
    };
    // Update legal moves //
    this.legalMoves = [...this.getLegalMoves(this.board)];
    // Change the mark //
    this.changeMark(this.mark);
    // Return a new board //
    return this.getBoard();
  }
}

export default TicTacToe;
