import React from 'react';
import { FileText, Link2Off, UserX, CopyX } from 'lucide-react';
import { Section } from './ui/Section';

export const RisksSection = () => {
  const risks = [
    {
      title: "Editable Reports",
      description: "Standard logs are plain text. If they can be edited in Notepad, they can be challenged in court.",
      icon: <FileText size={24} />,
    },
    {
      title: "Broken Chain",
      description: "Without a link between the device, the erasure command, and the report, custody is lost.",
      icon: <Link2Off size={24} />,
    },
    {
      title: "Human Error",
      description: "Manual processes rely on employees remembering to log actions correctly every single time.",
      icon: <UserX size={24} />,
    },
    {
      title: "Inconsistency",
      description: "Different tools for different devices create a fragmented paper trail that auditors hate.",
      icon: <CopyX size={24} />,
    }
  ];

  return (
    <Section id="risks" className="bg-slate-50">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Why This Fails During Audits
        </h2>
        <p className="text-slate-600 text-lg">
          When the auditor asks for proof, "trust me" isn't a strategy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {risks.map((risk, idx) => (
          <div 
            key={idx} 
            className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center mb-4">
              {risk.icon}
            </div>
            <h3 className="font-bold text-lg mb-2 text-slate-900">{risk.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              {risk.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};