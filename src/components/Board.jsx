import React, {useEffect, useState} from 'react';
import 'tailwindcss/tailwind.css';

import Square from './Square';
import TicTacToe from '../utils/game-board/tic-tac-toe';

const Board = () => {
  const [game, setGame] = useState(new TicTacToe)
  const [board, setBoard] = useState([]);

  useEffect(() => { setBoard(game.getBoard())}, []);
  useEffect(() => console.log(game), [board])

  const markBoard = (index) => game.markSpot(index);

  return (
    <div className='board' style={{gridTemplateColumns: `repeat(${game.boardSize}, 1fr)`}}>
      {board.map((piece, index) => (
        <Square
          piece={piece}
          key={index}
          index={index}
          setBoard={setBoard}
          markSpot={markBoard}
        />
      ))}
    </div>
  );
};

export default Board;
