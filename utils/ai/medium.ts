import { Player, getBestMove } from "../minimax";
import { getEasyMove } from "./easy";

export const getMediumMove = (board: Player[]): number => {
  if (Math.random() > 0.5) {
    return getBestMove(board);
  }
  return getEasyMove(board);
};