import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-slate-900 mb-2">
              <ShieldCheck className="text-primary" size={24} />
              <span className="font-bold text-lg">Shunya</span>
            </div>
            <p className="text-sm text-slate-500">Audit-defensible proof of data erasure.</p>
          </div>

          {/* <div className="flex flex-col items-center md:items-end gap-2">
            <a href="mailto:contact@erasureproof.com" className="text-sm font-medium text-slate-900 hover:text-primary transition-colors">
              contact@erasureproof.com
            </a>
            <p className="text-xs text-slate-400">© 2023 ErasureProof Inc. All rights reserved.</p>
          </div> */}

        </div>
      </div>
    </footer>
  );
};