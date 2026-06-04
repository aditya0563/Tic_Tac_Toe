"use client";

import Link from "next/link";

export default function BackToDashboard() {
  return (
    <Link
      href="/"
      className="inline-flex items-center justify-center rounded-full bg-gray-900/80 px-6 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-xl dark:bg-white/10 dark:text-gray-100 dark:hover:bg-white/20 border border-transparent dark:border-white/10"
    >
      &larr; Back to Dashboard
    </Link>
  );
}