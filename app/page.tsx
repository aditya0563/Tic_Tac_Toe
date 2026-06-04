import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-8 text-slate-100 font-sans">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-4 tracking-tight">
            Tic Tac Toe
          </h1>
          <p className="text-lg text-slate-400">Select a game mode to start playing</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/pass-and-play" className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <h2 className="text-2xl font-bold mb-3 text-blue-400 group-hover:text-blue-300 transition-colors">Pass & Play</h2>
            <p className="text-slate-400 group-hover:text-slate-300">Play locally with a friend on the same device.</p>
          </Link>

          <Link href="/ai" className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <h2 className="text-2xl font-bold mb-3 text-purple-400 group-hover:text-purple-300 transition-colors">Play with AI</h2>
            <p className="text-slate-400 group-hover:text-slate-300">Challenge our unbeatable AI to a match.</p>
          </Link>

          <Link href="/online" className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <h2 className="text-2xl font-bold mb-3 text-emerald-400 group-hover:text-emerald-300 transition-colors">Multiplayer Online</h2>
            <p className="text-slate-400 group-hover:text-slate-300">Match up with random players across the globe.</p>
          </Link>

          <Link href="/friends" className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-900/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <h2 className="text-2xl font-bold mb-3 text-orange-400 group-hover:text-orange-300 transition-colors">Play with Friends</h2>
            <p className="text-slate-400 group-hover:text-slate-300">Create a private room and invite your friends.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}