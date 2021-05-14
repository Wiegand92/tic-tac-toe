import React from 'react';

const Square = ({piece, index, markSpot, setBoard}) => {
  const handleClick = () => {
    const newBoard = markSpot(index);
    if (Array.isArray(newBoard)) {
      setBoard([...newBoard]);
    }
  };

  return <div onClick={handleClick} className="square">{piece}</div>;
};

export default Square;
