import React from 'react';
import { BadgeCheck, Shield, Lock } from 'lucide-react';
import { Section } from './ui/Section';

export const PhilosophySection = () => {
  const points = [
    {
      title: "Proof Over Process",
      description: "We don’t just claim data is erased. We generate cryptographically verifiable certificates that mathematically prove when, how, and where erasure occurred.",
      icon: <BadgeCheck size={32} className="text-primary" />,
    },
    {
      title: "Compliance by Design",
      description: "Every action is structured to support audit trails, chain of custody, and enterprise standards — reducing risk across legal, IT, and security teams.",
      icon: <Shield size={32} className="text-primary" />,
    },
    {
      title: "Immutability",
      description: "Once created, records cannot be altered or deleted. Our logs are write-once, read-many, preserving long-term integrity and trust.",
      icon: <Lock size={32} className="text-primary" />,
    }
  ];

  return (
    <Section id="philosophy" dark className="bg-slate-900">
      <div className="text-center mb-16">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-primary/30">
          Philosophy
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          This Is Not Another Data Wiping Tool
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Shunya is engineered as a trust and verification layer first, a wiping tool second — ensuring every data deletion stands up to audits, regulators, and legal review.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {points.map((point, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 shadow-inner ring-1 ring-white/10">
              {point.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{point.title}</h3>
            <p className="text-slate-400 leading-relaxed px-4">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};