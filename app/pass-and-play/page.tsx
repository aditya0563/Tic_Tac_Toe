'use client';

import { useState } from 'react';
import Link from 'next/link';
import { calculateWinner, Player } from '../../utils/minimax';

export default function PassAndPlay() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const winner = calculateWinner(board);
  const currentPlayer = xIsNext ? 'X' : 'O';

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full flex flex-col items-center gap-8">
        
        {/* Header */}
        <div className="w-full flex justify-between items-center">
          <Link 
            href="/"
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors font-medium flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back
          </Link>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">
            Pass & Play
          </h1>
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>

        {/* Status */}
        <div className="text-xl font-semibold h-8 flex items-center justify-center text-center">
          {winner ? (
            winner === 'Draw' ? (
              <span className="text-slate-400">It's a Draw!</span>
            ) : (
              <span className="text-emerald-400">Player {winner} Wins!</span>
            )
          ) : (
            <span className="text-slate-300">
              Player <span className={xIsNext ? 'text-blue-400' : 'text-rose-400'}>{currentPlayer}</span>'s Turn
            </span>
          )}
        </div>

        {/* Board */}
        <div className="grid grid-cols-3 gap-3 p-4 bg-slate-800/50 rounded-2xl shadow-xl border border-slate-700/50 backdrop-blur-sm">
          {board.map((cell, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              disabled={!!cell || !!winner}
              className={`w-24 h-24 sm:w-28 sm:h-28 text-5xl flex items-center justify-center rounded-xl bg-slate-800 shadow-inner transition-all duration-200
                ${!cell && !winner ? 'hover:bg-slate-700 cursor-pointer active:scale-95' : 'cursor-default'}
                ${cell === 'X' ? 'text-blue-400' : 'text-rose-400'}
              `}
            >
              {cell}
            </button>
          ))}
        </div>

        {/* Reset */}
        <button
          onClick={handleReset}
          className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold rounded-xl shadow-lg shadow-indigo-900/20 transition-all active:scale-95"
        >
          Reset Game
        </button>

      </div>
    </div>
  );
}
