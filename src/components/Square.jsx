import React from 'react';

const Square = ({piece, index, markSpot, setBoard, message, setMessage}) => {
  const handleClick = () => {
    const result = markSpot(index);
    if (Array.isArray(result)) {
      console.log('hello')
      if(message) {
        setMessage('')
      }
      setBoard([...result]);
    } else if (typeof result === 'string') {
      console.log('message')
      setMessage(result)
    } else {
      console.log('win')
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
