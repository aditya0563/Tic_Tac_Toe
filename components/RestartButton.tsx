"use client";

interface RestartButtonProps {
  onReset: () => void;
}

export default function RestartButton({ onReset }: RestartButtonProps) {
  return (
    <button
      onClick={onReset}
      className="mt-8 rounded-lg bg-indigo-600 px-6 py-2 text-white font-medium shadow hover:bg-indigo-700 transition-colors"
    >
      Restart Game
    </button>
  );
}