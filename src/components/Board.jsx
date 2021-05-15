import React, {useEffect, useState} from 'react';
import {CSSTransition} from 'react-transition-group';

import Square from './Square';
import TicTacToe from '../utils/game-board/tic-tac-toe';

const Board = () => {
  const [game, setGame] = useState(new TicTacToe());
  const [board, setBoard] = useState([]);
  const [message, setMessage] = useState('');
  const [boardSize, setBoardSize] = useState(9);
  const [inProp, setInProp] = useState(false)

  useEffect(() => { setBoard(game.getBoard()); setMessage('')}, [game] )
  // useEffect(() => setInProp(false), [game])

  const markBoard = (index) => game.markSpot(index);

  return (
    <div className="container">
      <CSSTransition
        in={inProp}
        timeout={500}
        classNames="board"
        onEntered={() => setInProp(false)}
      >
        <div className='board' key="board" style={{gridTemplateColumns: `repeat(${game.boardSize}, 1fr)`}}>
          {board.map((piece, index) => (
            <Square
              piece={piece}
              key={index}
              index={index}
              setBoard={setBoard}
              markSpot={markBoard}
              message={message}
              setMessage={setMessage}
            />
          ))}
        </div>
      </CSSTransition>
      <p>{message}</p>
      <div className="new-game">
        <button onClick={() => {setGame(new TicTacToe(boardSize)); setInProp(true);}}>New Game</button>
        <select value={boardSize} onChange={e=>setBoardSize(Number.parseInt(e.target.value))}>
          <option value='9'>3 x 3</option>
          <option value='25'>5 x 5</option>
          <option value='49'>7 x 7</option>
          <option value="81">9 x 9</option>
          <option value="121">11 x 11</option>
        </select>
      </div>
    </div>
  );
};

export default Board;
