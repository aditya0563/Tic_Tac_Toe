import { Player, getBestMove } from "../minimax";

export const getImpossibleMove = (board: Player[]): number => {
  return getBestMove(board);
};