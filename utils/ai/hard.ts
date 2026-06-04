import { Player, getBestMove } from "../minimax";
import { getEasyMove } from "./easy";

export const getHardMove = (board: Player[]): number => {
  if (Math.random() > 0.2) {
    return getBestMove(board);
  }
  return getEasyMove(board);
};