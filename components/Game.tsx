"use client";

import { useState, useEffect } from "react";
// We will create these two functions in the next step!
import { calculateWinner, getBestMove } from "../utils/minimax";

export type BoardState = (string | null)[];

export default function Game() {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
  const [isHumanTurn, setIsHumanTurn] = useState<boolean>(true); // Human is 'X', AI is 'O'

  const result = calculateWinner(board as any); // Cast needed due to their BoardState type
  const winner = result === 'Draw' ? null : result;
  const isDraw = result === 'Draw';
  const gameOver = winner || isDraw;

  // Handle Human Click
  const handleSquareClick = (index: number) => {
    // Prevent clicking if the square is filled, game is over, or it's not the human's turn
    if (board[index] || gameOver || !isHumanTurn) return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setIsHumanTurn(false);
  };

  // Trigger AI Turn
  useEffect(() => {
    if (!isHumanTurn && !gameOver) {
      // Small timeout to make the AI feel more "natural" instead of instant
      const timer = setTimeout(() => {
        const bestMoveIndex = getBestMove(board as any);
        if (bestMoveIndex !== -1) {
          const newBoard = [...board];
          newBoard[bestMoveIndex] = "O";
          setBoard(newBoard);
          setIsHumanTurn(true);
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isHumanTurn, board, gameOver]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsHumanTurn(true);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Game Status */}
      <div className="mb-6 h-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
        {winner ? (
          <span className="text-green-600 dark:text-green-400">Winner: {winner}</span>
        ) : isDraw ? (
          <span className="text-orange-500">Draw!</span>
        ) : (
          <span>Turn: {isHumanTurn ? "You (X)" : "AI (O)"}</span>
        )}
      </div>

      {/* 3x3 Grid */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 bg-gray-300 dark:bg-gray-700 p-2 sm:p-3 rounded-xl shadow-lg">
        {board.map((value, index) => (
          <button
            key={index}
            onClick={() => handleSquareClick(index)}
            disabled={!!value || !!gameOver || !isHumanTurn}
            className={`
              flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-lg bg-white 
              text-5xl font-bold shadow-sm transition-colors duration-200
              dark:bg-gray-800 
              ${value === "X" ? "text-blue-500" : "text-red-500"}
              ${!value && !gameOver && isHumanTurn ? "hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer" : "cursor-default"}
            `}
            aria-label={`Square ${index}`}
          >
            {value}
          </button>
        ))}
      </div>

      {/* Reset Button */}
      <button
        onClick={resetGame}
        className="mt-8 rounded-lg bg-indigo-600 px-6 py-2 text-white font-medium shadow hover:bg-indigo-700 transition-colors"
      >
        Restart Game
      </button>
    </div>
  );
}