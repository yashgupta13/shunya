import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { Section } from "./ui/Section";

export const TargetSection = () => {
  return (
    <Section className="bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
          {/* Built For */}
          <div className="bg-slate-50/50 p-10 lg:p-14 border-b md:border-b-0 md:border-r border-slate-200">
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle2 className="text-green-600" size={32} />
              <h3 className="text-2xl font-bold text-slate-900">Built For</h3>
            </div>
            <ul className="space-y-5">
              {[
                "Personal users who need simple, reliable data wiping",
                "IT & Security Teams managing multiple devices",
                "Compliance, Legal & Risk Teams requiring audit-ready proof",
                "IT Asset Disposal & Infrastructure Operations",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Built For */}
          <div className="bg-slate-100/50 p-10 lg:p-14">
            <div className="flex items-center gap-3 mb-8">
              <XCircle className="text-slate-400" size={32} />
              <h3 className="text-2xl font-bold text-slate-500">
                Not Built For
              </h3>
            </div>
            <ul className="space-y-5">
              {[
                "File recovery or data restoration tools",
                "System optimization or performance utilities",
                "General device maintenance software",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};