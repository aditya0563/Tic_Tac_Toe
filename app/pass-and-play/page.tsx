"use client";

import { useState } from "react";
import Board, { BoardState } from "../../components/Board";
import GameLayout from "../../components/GameLayout";

const checkWinner = (squares: BoardState) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  if (!squares.includes(null)) return 'Draw';
  return null;
};

export default function PassAndPlay() {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);

  const result = checkWinner(board);
  const winner = result === 'Draw' ? null : result;
  const isDraw = result === 'Draw';
  const gameOver = !!winner || isDraw;

  const handleSquareClick = (index: number) => {
    if (board[index] || gameOver) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  let statusText = `Turn: Player ${isXNext ? "1 (X)" : "2 (O)"}`;
  if (winner) {
    statusText = `Winner: Player ${winner} 🏆`;
  } else if (isDraw) {
    statusText = "It's a Draw! 🤝";
  }

  return (
    <GameLayout 
      title="Pass and Play" 
      turnText={statusText}
      onReset={resetGame}
    >
      <Board board={board} onSquareClick={handleSquareClick} size={3} disabled={gameOver} />
    </GameLayout>
  );
}