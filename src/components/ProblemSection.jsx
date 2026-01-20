import React from 'react';
import { AlertTriangle, FileX, MonitorX } from 'lucide-react';
import { Section } from './ui/Section';

export const ProblemSection = () => {
  const problems = [
    {
      title: "Factory Resets",
      description: "Often recoverable with basic forensic tools. Does not overwrite data blocks securely.",
      icon: <AlertTriangle className="text-red-600" size={24} />,
    },
    {
      title: "Unsigned PDF Reports",
      description: "Editable files. No cryptographic proof or chain of custody.",
      icon: <FileX className="text-red-600" size={24} />,
    },
    {
      title: "Manual Screenshots",
      description: "Not legally defensible. Subject to human error and manipulation.",
      icon: <MonitorX className="text-red-600" size={24} />,
    }
  ];

  return (
    <Section id="problem" className="bg-white border-y border-slate-200">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            How Data Erasure Is Handled Today
          </h2>
          <p className="text-slate-500">Common practices that fail under scrutiny.</p>
        </div>

        <div className="flex flex-col gap-4">
          {problems.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-start gap-5 p-6 rounded-xl border border-red-100 bg-red-50/50 hover:bg-red-50 transition-colors"
            >
              <div className="shrink-0 mt-1">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                <p className="text-slate-600 mt-1 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};