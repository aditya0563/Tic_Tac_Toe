import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 dark:bg-gray-950">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
          Tic-Tac-Toe Hub
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Choose your game mode and start playing!
        </p>
      </div>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Pass and Play */}
        <Link 
          href="/pass-and-play" 
          className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700"
        >
          <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors group-hover:text-blue-500">
            Pass and Play
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Play locally with a friend on the same device. Perfect for quick matches side-by-side.
          </p>
        </Link>

        {/* Play with AI */}
        <Link 
          href="/ai" 
          className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700"
        >
          <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors group-hover:text-purple-500">
            Play with AI
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Test your skills against our unbeatable Minimax AI engine. Can you force a draw?
          </p>
        </Link>

        {/* Multiplayer Online */}
        <Link 
          href="/online" 
          className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700"
        >
          <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors group-hover:text-emerald-500">
            Multiplayer Online
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Match up with random players around the world in real-time online matches.
          </p>
        </Link>

        {/* Play with Friends */}
        <Link 
          href="/play-with-friends" 
          className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700"
        >
          <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors group-hover:text-rose-500">
            Play with Friends
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Create a private room and invite your friends via a shareable link for custom matches.
          </p>
        </Link>
      </div>
    </main>
  );
}