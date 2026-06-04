"use client";

import BackToDashboard from "./BackToDashboard";

export type DifficultyLevel = "easy" | "medium" | "hard" | "impossible";

interface DifficultySelectorProps {
  onSelect: (difficulty: DifficultyLevel) => void;
}

export default function DifficultySelector({ onSelect }: DifficultySelectorProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 dark:bg-gray-950">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Select AI Difficulty
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Choose your opponent
        </p>
      </div>

      <div className="grid w-full max-w-md grid-cols-1 gap-4 sm:grid-cols-2 mb-10">
        <button
          onClick={() => onSelect("easy")}
          className="rounded-xl bg-green-500/10 border border-green-500/20 px-6 py-6 text-xl font-bold text-green-600 transition-all hover:bg-green-500 hover:text-white hover:scale-105 hover:shadow-lg dark:text-green-400 dark:hover:text-white"
        >
          Easy
        </button>
        <button
          onClick={() => onSelect("medium")}
          className="rounded-xl bg-yellow-500/10 border border-yellow-500/20 px-6 py-6 text-xl font-bold text-yellow-600 transition-all hover:bg-yellow-500 hover:text-white hover:scale-105 hover:shadow-lg dark:text-yellow-400 dark:hover:text-white"
        >
          Medium
        </button>
        <button
          onClick={() => onSelect("hard")}
          className="rounded-xl bg-orange-500/10 border border-orange-500/20 px-6 py-6 text-xl font-bold text-orange-600 transition-all hover:bg-orange-500 hover:text-white hover:scale-105 hover:shadow-lg dark:text-orange-400 dark:hover:text-white"
        >
          Hard
        </button>
        <button
          onClick={() => onSelect("impossible")}
          className="rounded-xl bg-purple-500/10 border border-purple-500/20 px-6 py-6 text-xl font-bold text-purple-600 transition-all hover:bg-purple-500 hover:text-white hover:scale-105 hover:shadow-lg dark:text-purple-400 dark:hover:text-white"
        >
          Impossible
        </button>
      </div>
      
      <BackToDashboard />
    </main>
  );
}