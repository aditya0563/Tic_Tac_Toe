"use client";

import { useState, useEffect } from "react";
import Board, { BoardState } from "../../components/Board";
import GameLayout from "../../components/GameLayout";
import MatchmakingScreen, { MatchState } from "../../components/MatchmakingScreen";

export default function OnlineMultiplayer() {
  const [matchState, setMatchState] = useState<MatchState>("idle");
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
  
  // For the UI demo, we'll pretend you are 'X' and it's your turn
  const [isMyTurn, setIsMyTurn] = useState<boolean>(true); 
  const playerSymbol = "X";

  const handleSquareClick = (index: number) => {
    if (board[index] || !isMyTurn) return;

    const newBoard = [...board];
    newBoard[index] = playerSymbol;
    setBoard(newBoard);
    setIsMyTurn(false); 
  };

  const leaveMatch = () => {
    setBoard(Array(9).fill(null));
    setMatchState("idle");
    setIsMyTurn(true);
  };

  // Simulate waiting for a server connection when searching
  useEffect(() => {
    if (matchState === "searching") {
      const timer = setTimeout(() => {
        setMatchState("playing");
      }, 2000);
      
      // Cleanup function ensures if user clicks "Cancel", the timer stops
      return () => clearTimeout(timer);
    }
  }, [matchState]);

  // 1. Show the Matchmaking Screen if not currently playing
  if (matchState !== "playing") {
    return (
      <MatchmakingScreen 
        matchState={matchState}
        onStartSearch={() => setMatchState("searching")}
        onCancelSearch={() => setMatchState("idle")}
      />
    );
  }

  // 2. Show the Active Online Game Board
  return (
    <div className="relative h-full w-full">
      {/* Leave Match Button */}
      <div className="absolute left-4 top-4 z-50">
        <button 
          onClick={leaveMatch}
          className="text-sm font-medium text-gray-500 transition-colors hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
        >
          &larr; Leave Match
        </button>
      </div>

      <GameLayout 
        title="Online Match" 
        turnText={isMyTurn ? "Your Turn (X)" : "Waiting for Opponent..."}
        onReset={leaveMatch} 
        hideRestart={true} // Add this line
        hideBack={true}    // Add this line
      >
        <Board 
          board={board} 
          onSquareClick={handleSquareClick} 
          size={3} 
          disabled={!isMyTurn} 
        />
      </GameLayout>
    </div>
  );
}