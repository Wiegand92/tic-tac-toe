import React from 'react';

const Square = ({piece, index, markSpot, setBoard, message, setMessage, setComputerTurn, computerTurn}) => {
  const handleClick = () => {
    if(computerTurn) return;
    const result = markSpot(index);
    if (Array.isArray(result)) {
      if(message) {
        setMessage('')
      }
      setBoard([...result]);
      setComputerTurn(prev => !prev)
    } else if (typeof result === 'string') {
      setMessage(result)
    } else {
      setMessage(result.message)
      setBoard([...result.board])
    }
  };

  return( 
    <div onClick={handleClick} className={piece === '' ? 'square valid' : 'square invalid'}>
      <p>{piece}</p>
    </div>
  );
};

export default Square;
