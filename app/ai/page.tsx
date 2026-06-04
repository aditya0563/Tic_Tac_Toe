"use client";

import { useState, useEffect } from "react";
import Board, { BoardState } from "../../components/Board";
import { calculateWinner, getBestMove, Player } from "../../utils/minimax";

export default function AI() {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
  const [isHumanTurn, setIsHumanTurn] = useState<boolean>(true); // Human is 'X', AI is 'O'

  const result = calculateWinner(board as Player[]);
  const winner = result === 'Draw' ? null : result;
  const isDraw = result === 'Draw';
  const gameOver = !!winner || isDraw;

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
        const bestMoveIndex = getBestMove(board as Player[]);
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
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 dark:bg-gray-950">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Tic-Tac-Toe AI
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Powered by the Minimax Algorithm
        </p>
      </div>

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

      <Board board={board} onSquareClick={handleSquareClick} size={3} disabled={gameOver || !isHumanTurn} />

      {/* Reset Button */}
      <button
        onClick={resetGame}
        className="mt-8 rounded-lg bg-indigo-600 px-6 py-2 text-white font-medium shadow hover:bg-indigo-700 transition-colors"
      >
        Restart Game
      </button>
    </main>
  );
}
