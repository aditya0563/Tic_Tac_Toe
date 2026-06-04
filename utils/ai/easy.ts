import { Player } from "../minimax";

export const getEasyMove = (board: Player[]): number => {
  const availableSpots = board
    .map((cell, index) => (cell === null ? index : -1))
    .filter((index) => index !== -1);

  if (availableSpots.length === 0) return -1;
  
  const randomIndex = Math.floor(Math.random() * availableSpots.length);
  return availableSpots[randomIndex];
};