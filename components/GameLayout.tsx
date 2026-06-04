import { ReactNode } from "react";
import RestartButton from "./RestartButton";
import BackToDashboard from "./BackToDashboard";

interface GameLayoutProps {
  title: string;
  turnText: string;
  onReset: () => void;
  children: ReactNode;
}

export default function GameLayout({ title, turnText, onReset, children }: GameLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 dark:bg-gray-950">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          {title}
        </h1>
        <div className="text-xl font-medium text-gray-800 dark:text-gray-200">
          {turnText}
        </div>
      </div>

      <div className="mb-8">
        {/* Your grid component renders here */}
        {children}
      </div>

      {/* Button Controls Container */}
      <div className="flex flex-col items-center gap-5 mt-2">
        <RestartButton onReset={onReset} />
        <BackToDashboard />
      </div>
    </main>
  );
}