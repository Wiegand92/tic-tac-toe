const winningBoard = (array, boardSize) => {
  let win = false;
  // Check if the game is winning by diagonals first //
  win = winByDiagonal(array, boardSize, 'RTL');
  // If the game is not winning check by left to right diagonal //
  if (!win) {
    win = winByDiagonal(array, boardSize, 'LTR');
  }

  if(!win) {
    win = winByColumn(array, boardSize)
  }
  // If the game is still not winning, check by row //
  if (!win) {
    win = winByRow(array, boardSize);
  }
  return win;
};

const winByRow = (array, boardSize) => {
  // Assume the game is losing initially //
  let win;
  // Start checking the game at index 0 //
  let startIndex = 0;
  // Check once for each row in the game //
  for (let i = 0; i < boardSize; i++) {
    // Break out of loop after a win has been found //
    if (win === true) {
      return win;
    }
    // Holds the first mark to appear //
    let mark;
    let endIndex = startIndex + boardSize - 1;

    // Check each index in the row //
    for (let k = startIndex; k <= endIndex; k++) {
      // Return early if index is blank //
      if (array[k] === '') {
        win = false;
        break;
        // Set mark to first appearance //
      } else if (mark === undefined) {
        mark = array[k];
        // Return if there is a mark that doesn't match //
      } else if (mark !== array[k]) {
        win = false;
        break;
        // Set win to true and keep checking //
      } else {
        win = true;
      }
    }
    // Move start index to next row //
    startIndex += boardSize;
  }
  // Return wether or not the game is winning //
  return win;
};

const winByColumn = (array, boardSize) => {
  // Assume the game is losing initially //
  let win;
  // Start checking the game at index 0 //
  let startIndex = 0;
  // Check once for each column in the game //
  for (let i = 0; i < boardSize; i++) {
    // Break out of loop after a win has been found //
    if (win === true) {
      return win;
    }
    // Holds the first mark to appear //
    let mark;
    let checkIndex = startIndex
    // Check each index in the column //
    for (let k = 0; k < boardSize; k++) {
      // Return early if index is blank //
      if (array[checkIndex] === '') {
        win = false;
        break;
        // Set mark to first appearance and keep checking //
      } else if (mark === undefined) {
        mark = array[checkIndex];
        // Return if there is a mark that doesn't match //
      } else if (mark !== array[checkIndex]) {
        win = false;
        break;
        // Set win to true and keep checking //
      } else {
        win = true;
      }
      checkIndex += boardSize
    }
    // Move start index to next column //
    startIndex += 1;
  }
  // Return wether or not the game is winning //
  return win;
};

const winByDiagonal = (array, boardSize, direction) => {
  // Assume the game is losing initially //
  let win;
  // Start checking the game at index 0 //
  let checkIndex = direction === 'LTR' ? 0 : boardSize - 1;
  // Holds the first mark to appear //
  let mark;
  // Check once for each row in the game //
  for (let i = 0; i < boardSize; i++) {
    // Return early if index is blank //
    if (array[checkIndex] === '') {
      win = false;
      break;
      // Set mark to first appearance //
    } else if (mark === undefined) {
      mark = array[checkIndex];
      // Return if there is a mark that doesn't match //
    } else if (mark !== array[checkIndex]) {
      win = false;
      break;
      // Set win to true and keep checking //
    } else {
      win = true;
    }
    // Move start index to next row //
    checkIndex += direction === 'LTR' ? boardSize + 1 : boardSize - 1;
  }
  // Return wether or not the game is winning //
  return win;
};

export default winningBoard;
// module.exports = winningBoard;
