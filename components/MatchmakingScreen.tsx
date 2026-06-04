"use client";

import BackToDashboard from "./BackToDashboard";

// We export this type so we can use it in the main page too
export type MatchState = "idle" | "searching" | "playing";

interface MatchmakingScreenProps {
  matchState: MatchState;
  onStartSearch: () => void;
  onCancelSearch: () => void;
}

export default function MatchmakingScreen({ 
  matchState, 
  onStartSearch, 
  onCancelSearch 
}: MatchmakingScreenProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 dark:bg-gray-950">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
          Multiplayer Online
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {matchState === "searching" ? "Looking for an opponent..." : "Match up with random players globally"}
        </p>
      </div>

      <div className="mb-10 min-h-[100px] flex flex-col items-center justify-center">
        {matchState === "idle" ? (
          <button
            onClick={onStartSearch}
            className="rounded-full bg-emerald-600 px-8 py-4 text-xl font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-emerald-700 hover:shadow-xl"
          >
            Find Match
          </button>
        ) : (
          <div className="flex flex-col items-center gap-6">
            {/* Tailwind Loading Spinner */}
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
            <button 
              onClick={onCancelSearch}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Cancel Search
            </button>
          </div>
        )}
      </div>

      <BackToDashboard />
    </main>
  );
}