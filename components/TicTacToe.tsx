"use client";

import React, { useState, useEffect } from 'react';
import { Player, calculateWinner, getBestMove } from '../utils/minimax';

export default function TicTacToe() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isHumanTurn, setIsHumanTurn] = useState<boolean>(true);
  const [winner, setWinner] = useState<Player | 'Draw' | null>(null);

  useEffect(() => {
    const currentWinner = calculateWinner(board);
    if (currentWinner) {
      setWinner(currentWinner);
      return;
    }

    if (!isHumanTurn) {
      const timer = setTimeout(() => {
        const aiMove = getBestMove([...board]);
        if (aiMove !== -1) {
          const newBoard = [...board];
          newBoard[aiMove] = 'O';
          setBoard(newBoard);
          setIsHumanTurn(true);
        }
      }, 500); // slight delay for better UX
      return () => clearTimeout(timer);
    }
  }, [board, isHumanTurn]);

  const handleCellClick = (index: number) => {
    if (board[index] || winner || !isHumanTurn) return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsHumanTurn(false);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsHumanTurn(true);
    setWinner(null);
  };

  return (
    <div className="game-container">
      <div className="game-card">
        <h1 className="game-title">Unbeatable Tic-Tac-Toe</h1>
        
        <div className="status-board">
          {winner ? (
            <div className={`status ${winner === 'Draw' ? 'draw' : winner === 'X' ? 'win-x' : 'win-o'}`}>
              {winner === 'Draw' ? "It's a Draw!" : `Player ${winner} Wins!`}
            </div>
          ) : (
            <div className={`status turn ${!isHumanTurn ? 'ai-turn' : ''}`}>
              {isHumanTurn ? "Your Turn (X)" : "AI's Turn (O)..."}
            </div>
          )}
        </div>

        <div className="board">
          {board.map((cell, index) => (
            <button
              key={index}
              className={`cell ${cell ? `cell-${cell.toLowerCase()}` : ''}`}
              onClick={() => handleCellClick(index)}
              disabled={!!cell || !!winner || !isHumanTurn}
            >
              <span className="cell-content">{cell}</span>
            </button>
          ))}
        </div>

        <button className="reset-button" onClick={resetGame}>
          Restart Game
        </button>
      </div>
    </div>
  );
}
