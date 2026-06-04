export type Player = 'X' | 'O' | null;

export function calculateWinner(squares: Player[]): Player | 'Draw' {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  if (!squares.includes(null)) {
    return 'Draw';
  }
  return null;
}

export function minimax(board: Player[], depth: number, isMaximizing: boolean): number {
  const winner = calculateWinner(board);
  if (winner === 'O') return 10 - depth;
  if (winner === 'X') return depth - 10;
  if (winner === 'Draw') return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = 'O';
        const score = minimax(board, depth + 1, false);
        board[i] = null;
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = 'X';
        const score = minimax(board, depth + 1, true);
        board[i] = null;
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
}

export function getBestMove(board: Player[]): number {
  let bestScore = -Infinity;
  let move = -1;
  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      board[i] = 'O'; // AI is 'O'
      const score = minimax(board, 0, false);
      board[i] = null;
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move;
}