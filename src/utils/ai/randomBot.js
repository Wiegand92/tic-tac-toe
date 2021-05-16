const randomBot = (legalMoves) => {
  const index = Math.floor(Math.random() * legalMoves.length)
  console.log(!!legalMoves[index])
  return legalMoves[index]
}

export default randomBot