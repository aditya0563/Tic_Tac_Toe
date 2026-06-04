import React from "react";

export type BoardState = (string | null)[];

interface BoardProps {
  board: BoardState;
  onSquareClick: (index: number) => void;
  size?: number;
  disabled?: boolean;
}

export default function Board({ board, onSquareClick, size = 3, disabled = false }: BoardProps) {
  // Map sizes to Tailwind classes to ensure they are picked up at build time.
  // Tailwind cannot parse dynamic strings like `grid-cols-${size}`.
  const gridColsClass = {
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7",
  }[size] || "grid-cols-3";

  return (
    <div className={`grid ${gridColsClass} gap-2 sm:gap-3 bg-gray-300 dark:bg-gray-700 p-2 sm:p-3 rounded-xl shadow-lg w-fit mx-auto`}>
      {board.map((value, index) => (
        <button
          key={index}
          onClick={() => onSquareClick(index)}
          disabled={!!value || disabled}
          className={`
            flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-lg bg-white 
            text-5xl font-bold shadow-sm transition-colors duration-200
            dark:bg-gray-800 
            ${value === "X" ? "text-blue-500" : "text-red-500"}
            ${!value && !disabled ? "hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer" : "cursor-default"}
          `}
          aria-label={`Square ${index}`}
        >
          {value}
        </button>
      ))}
    </div>
  );
}
