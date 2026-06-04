"use client";

import { useState, useEffect } from "react";
import Board, { BoardState } from "../../components/Board";
import { calculateWinner, Player } from "../../utils/minimax";
import GameLayout from "../../components/GameLayout";
import DifficultySelector, { DifficultyLevel } from "../../components/DifficultySelector";

import { getEasyMove } from "../../utils/ai/easy";
import { getMediumMove } from "../../utils/ai/medium";
import { getHardMove } from "../../utils/ai/hard";
import { getImpossibleMove } from "../../utils/ai/impossible";

export default function AI() {
  const [difficulty, setDifficulty] = useState<DifficultyLevel | null>(null);
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
  const [isHumanTurn, setIsHumanTurn] = useState<boolean>(true);

  const result = calculateWinner(board as Player[]);
  const winner = result === 'Draw' ? null : result;
  const isDraw = result === 'Draw';
  const gameOver = !!winner || isDraw;

  const handleSquareClick = (index: number) => {
    if (board[index] || gameOver || !isHumanTurn) return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setIsHumanTurn(false);
  };

  useEffect(() => {
    if (!isHumanTurn && !gameOver && difficulty) {
      const timer = setTimeout(() => {
        let bestMoveIndex = -1;
        const currentBoard = board as Player[];

        switch (difficulty) {
          case "easy":
            bestMoveIndex = getEasyMove(currentBoard);
            break;
          case "medium":
            bestMoveIndex = getMediumMove(currentBoard);
            break;
          case "hard":
            bestMoveIndex = getHardMove(currentBoard);
            break;
          case "impossible":
            bestMoveIndex = getImpossibleMove(currentBoard);
            break;
        }
        
        if (bestMoveIndex !== -1) {
          const newBoard = [...board];
          newBoard[bestMoveIndex] = "O";
          setBoard(newBoard);
          setIsHumanTurn(true);
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isHumanTurn, board, gameOver, difficulty]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsHumanTurn(true);
  };

  if (!difficulty) {
    return <DifficultySelector onSelect={setDifficulty} />;
  }

  let statusText = `Turn: ${isHumanTurn ? "You (X)" : "AI (O)"}`;
  if (winner) {
    statusText = `Winner: ${winner} 🏆`;
  } else if (isDraw) {
    statusText = "It's a Draw! 🤝";
  }

  return (
    <div className="relative w-full h-full">
      <div className="absolute top-4 left-4 z-50">
        <button 
          onClick={() => {
            setDifficulty(null);
            resetGame();
          }}
          className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          &larr; Change Difficulty
        </button>
      </div>

      <GameLayout 
        title={`AI Mode: ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`} 
        turnText={statusText}
        onReset={resetGame}
      >
        <Board 
          board={board} 
          onSquareClick={handleSquareClick} 
          size={3} 
          disabled={gameOver || !isHumanTurn} 
        />
      </GameLayout>
    </div>
  );
}