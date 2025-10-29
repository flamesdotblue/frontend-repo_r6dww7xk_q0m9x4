import React, { useState } from 'react';
import { User } from 'lucide-react';

const Signup = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Account created! Check your email to verify.');
  };

  return (
    <section id="signup" className="w-full bg-gradient-to-b from-slate-950 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
              <User className="h-3.5 w-3.5" /> Sign up
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Create your Prompt Pro account</h2>
            <p className="mt-2 text-slate-300">No credit card required. Free forever on the Starter plan.</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">Full name</label>
              <input
                type="text"
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none ring-0 transition focus:border-indigo-500/50"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none ring-0 transition focus:border-indigo-500/50"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">Password</label>
              <input
                type="password"
                required
                minLength={6}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none ring-0 transition focus:border-indigo-500/50"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400"
            >
              Create account
            </button>
            {status && <p className="text-center text-sm text-emerald-400">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
