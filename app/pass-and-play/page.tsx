"use client";

import { useState } from "react";
import Board, { BoardState } from "../../components/Board";

// We copy the simple 3x3 checkWinner logic here or import from minimax. 
// For flexibility on pass-and-play, keeping it self-contained is easy,
// but since the board handles rendering, we just manage state.
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 dark:bg-gray-950">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Pass and Play
        </h1>
      </div>

      <div className="mb-6 h-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
        {winner ? (
          <span className="text-green-600 dark:text-green-400">Winner: Player {winner}</span>
        ) : isDraw ? (
          <span className="text-orange-500">Draw!</span>
        ) : (
          <span>Turn: Player {isXNext ? "1 (X)" : "2 (O)"}</span>
        )}
      </div>

      <Board board={board} onSquareClick={handleSquareClick} size={3} disabled={gameOver} />

      <button
        onClick={resetGame}
        className="mt-8 rounded-lg bg-indigo-600 px-6 py-2 text-white font-medium shadow hover:bg-indigo-700 transition-colors"
      >
        Restart Game
      </button>
    </main>
  );
}
