import React from 'react';
import Hero3D from './components/Hero3D';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Signup from './components/Signup';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <a href="#home" className="font-semibold tracking-tight">
            <span className="text-indigo-400">Prompt</span> Pro
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#signup" className="rounded-lg bg-white/10 px-4 py-2 font-semibold text-white hover:bg-white/15">Sign up</a>
          </nav>
          <a href="#signup" className="sm:hidden rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/15">Start</a>
        </div>
      </header>

      {/* Sections */}
      <Hero3D />
      <Pricing />
      <Signup />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} Prompt Pro. All rights reserved.</p>
            <div className="flex items-center gap-5 text-sm text-slate-400">
              <a href="#pricing" className="hover:text-white">Pricing</a>
              <a href="#contact" className="hover:text-white">Contact</a>
              <a href="#signup" className="hover:text-white">Sign up</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
