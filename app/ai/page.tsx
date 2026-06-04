'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PlayWithAI() {
  const [difficulty, setDifficulty] = useState<string>('medium');

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-8 text-slate-100 font-sans overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-6xl w-full flex flex-col items-center relative z-10">
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 -z-10 rounded-full" />
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 tracking-tight mb-4 drop-shadow-sm">
            Play with AI
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-medium tracking-wide">Can you beat the machine?</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start justify-center w-full mb-16">
          
          {/* Tic Tac Toe Board */}
          <div className="flex flex-col items-center">
            <div className="bg-slate-900/60 border border-slate-700/50 rounded-[2.5rem] p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative group transition-transform duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] pointer-events-none" />
              <div className="grid grid-cols-3 gap-3 sm:gap-4 relative z-10">
                {Array(9).fill(null).map((_, i) => (
                  <button
                    key={i}
                    disabled
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-slate-800/80 rounded-2xl flex items-center justify-center text-4xl sm:text-5xl cursor-default transition-all duration-300 shadow-inner border border-slate-700/50"
                  >
                    {/* Placeholder for X or O */}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Control Panel */}
          <div className="w-full max-w-sm bg-slate-900/60 border border-slate-700/50 rounded-[2.5rem] p-8 shadow-2xl backdrop-blur-xl flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full pointer-events-none" />
            
            <h2 className="text-2xl font-bold mb-8 text-slate-200 tracking-wide relative z-10 flex items-center">
              <svg className="w-6 h-6 mr-3 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Select Difficulty
            </h2>
            
            <div className="flex flex-col gap-4 relative z-10">
              {[
                { id: 'easy', label: 'Easy', color: 'from-emerald-400 to-teal-500', shadow: 'rgba(52, 211, 153, 0.4)' },
                { id: 'medium', label: 'Medium', color: 'from-blue-400 to-indigo-500', shadow: 'rgba(96, 165, 250, 0.4)' },
                { id: 'hard', label: 'Hard', color: 'from-orange-400 to-rose-500', shadow: 'rgba(251, 146, 60, 0.4)' },
                { id: 'impossible', label: 'Impossible', color: 'from-purple-500 to-fuchsia-600', shadow: 'rgba(192, 38, 211, 0.4)' }
              ].map((level) => (
                <button
                  key={level.id}
                  onClick={() => setDifficulty(level.id)}
                  className={`relative overflow-hidden group px-6 py-4 rounded-2xl transition-all duration-300 w-full text-left ${
                    difficulty === level.id 
                      ? 'bg-slate-800 border-transparent shadow-lg scale-[1.02]' 
                      : 'bg-slate-800/40 border border-slate-700/60 hover:bg-slate-800/80 hover:border-slate-600/80 hover:scale-[1.01]'
                  }`}
                  style={{
                    boxShadow: difficulty === level.id ? `0 0 20px ${level.shadow}, inset 0 1px 0 rgba(255,255,255,0.1)` : 'none'
                  }}
                >
                  {difficulty === level.id && (
                    <div className={`absolute inset-0 opacity-15 bg-gradient-to-r ${level.color} blur-xl`} />
                  )}
                  <div className="relative flex items-center justify-between z-10">
                    <span className={`font-semibold text-lg ${difficulty === level.id ? 'text-white' : 'text-slate-400 group-hover:text-slate-300 transition-colors'}`}>
                      {level.label}
                    </span>
                    <div 
                      className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                        difficulty === level.id 
                          ? `bg-gradient-to-r ${level.color} shadow-[0_0_10px_rgba(255,255,255,0.5)] scale-100` 
                          : 'bg-slate-700 scale-75 group-hover:scale-100'
                      }`} 
                    />
                  </div>
                </button>
              ))}
            </div>
            
            <button className="mt-10 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white font-bold text-lg hover:from-purple-400 hover:to-fuchsia-500 transition-all duration-300 shadow-[0_0_20px_rgba(192,38,211,0.3)] hover:shadow-[0_0_30px_rgba(192,38,211,0.5)] hover:-translate-y-1 relative z-10 overflow-hidden group">
              <span className="relative z-10">Start Game</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </button>
          </div>
          
        </div>
        
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300 border border-slate-700/80 hover:border-slate-500 shadow-lg backdrop-blur-md group relative z-10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          <svg className="w-5 h-5 mr-3 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span className="font-medium">Back to Dashboard</span>
        </Link>
      </div>
    </div>
  );
}
