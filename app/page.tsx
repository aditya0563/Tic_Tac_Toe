import Game from "../components/Game";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 dark:bg-gray-950">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Tic-Tac-Toe AI
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Powered by the Minimax Algorithm
        </p>
      </div>
      
      {/* Mounting the client-side Game component. 
        Ensure you have a components folder at the root with Game.tsx inside.
      */}
      <Game />
    </main>
  ); 
}