import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! We will get back to you shortly.');
  };

  return (
    <section id="contact" className="w-full bg-slate-950 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
            <Mail className="h-3.5 w-3.5" /> Contact
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Let’s talk</h2>
          <p className="mt-2 text-slate-300">
            Questions about features, trials, pricing, or anything else? Our team is ready to help.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="mb-2 block text-sm font-medium text-slate-200">Name</label>
            <input
              type="text"
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none ring-0 transition focus:border-indigo-500/50"
              placeholder="Jane Doe"
            />
          </div>
          <div className="sm:col-span-1">
            <label className="mb-2 block text-sm font-medium text-slate-200">Email</label>
            <input
              type="email"
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none ring-0 transition focus:border-indigo-500/50"
              placeholder="you@example.com"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-200">Message</label>
            <textarea
              required
              rows={5}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none ring-0 transition focus:border-indigo-500/50"
              placeholder="Tell us a bit about what you need..."
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400 sm:w-auto"
            >
              Send Message
            </button>
            {status && <p className="mt-3 text-sm text-emerald-400">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
