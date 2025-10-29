import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero3D = () => {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* 3D Scene */}
      <div className="relative h-[520px] md:h-[640px]">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient overlay that doesn't block pointer events */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto -mt-24 px-4 pb-20 sm:-mt-32">
        <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur sm:p-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
                <Rocket className="h-3.5 w-3.5" />
                <span>Prompt Pro • AI Prompt Assistant</span>
              </div>
              <h1 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Craft better prompts. Ship faster. Make magic.
              </h1>
              <p className="mt-4 max-w-2xl text-slate-300">
                Supercharge your workflow with an interactive, modern prompt optimization tool. Build, test, and iterate your prompts with confidence.
              </p>
            </div>
            <div className="flex w-full flex-shrink-0 items-center gap-3 md:w-auto">
              <a
                href="#signup"
                className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400 md:w-auto"
              >
                Get Started Free
              </a>
              <a
                href="#pricing"
                className="inline-flex w-full items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:border-white/20 hover:bg-white/10 md:w-auto"
              >
                See Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
