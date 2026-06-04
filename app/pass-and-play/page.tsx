import Link from 'next/link';

export default function PassAndPlay() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-8 text-slate-100 font-sans">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-8">
          Pass & Play
        </h1>
        
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-16 mb-12 shadow-lg backdrop-blur-sm">
          <p className="text-xl text-slate-400 italic">Game board and logic will go here.</p>
        </div>
        
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white transition-all duration-200 border border-slate-700 hover:border-slate-600 shadow-sm"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
