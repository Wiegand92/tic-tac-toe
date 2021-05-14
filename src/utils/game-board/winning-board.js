const winningBoard = (array, boardSize) => {
  let win = false;
  // Check if the game is winning by diagonals first //
  win = winByRTLDiag(array, boardSize);
  // If the game is not winning check by left to right diagonal //
  if (!win) {
    win = winByLTRDiag(array, boardSize);
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

const winByLTRDiag = (array, boardSize) => {
  // Assume the game is losing initially //
  let win;
  // Start checking the game at index 0 //
  let checkIndex = 0;
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
    checkIndex += boardSize + 1;
  }
  // Return wether or not the game is winning //
  return win;
};

const winByRTLDiag = (array, boardSize) => {
  // Assume the game is losing initially //
  let win;
  // Start checking the game at index 0 //
  let checkIndex = boardSize - 1;
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
    checkIndex += boardSize - 1;
  }
  // Return wether or not the game is winning //
  return win;
};

// export default winningBoard;
module.exports = winningBoard;
