import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    description: 'For exploring and getting started',
    features: [
      '100 prompt runs / month',
      'Basic optimizer',
      'Community templates',
    ],
    cta: 'Start Free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$19',
    description: 'For creators and indie hackers',
    features: [
      'Unlimited prompt runs',
      'Advanced optimizer + variants',
      'A/B testing & history',
      'Team collaboration',
    ],
    cta: 'Go Pro',
    highlight: true,
  },
  {
    name: 'Business',
    price: '$49',
    description: 'For teams shipping at scale',
    features: [
      'All Pro features',
      'Custom guardrails',
      'Usage analytics',
      'Priority support',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative w-full bg-slate-950 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-300">Choose the plan that fits your flow. Upgrade or cancel anytime.</p>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-6 backdrop-blur transition ${
                tier.highlight
                  ? 'border-indigo-500/40 bg-indigo-500/10 shadow-xl shadow-indigo-500/20'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
              <p className="mt-1 text-slate-300">{tier.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">{tier.price}</span>
                {tier.price !== '$0' && <span className="text-sm text-slate-400">/month</span>}
              </div>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-200">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#signup"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition ${
                  tier.highlight
                    ? 'bg-white text-slate-900 hover:opacity-90'
                    : 'border border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
