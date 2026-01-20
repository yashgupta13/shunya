import React from 'react';
import { ArrowRight, Fingerprint, Gavel } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col gap-8 lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900">
              Secure Data Erasure You Can Actually Prove
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Shunya goes beyond software-level deletion by executing cryptographically verified, firmware-based data wiping — ensuring data is permanently destroyed across both visible and hidden areas of your storage devices.
            </p>
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Built to align with NIST SP 800-88 guidelines, Shunya helps organizations meet audit, compliance, and legal defense requirements with verifiable proof of erasure — not screenshots.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="group gap-2 pl-8 pr-6" 
                onClick={scrollToContact}
              >
                Request Early Access
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Abstract Illustration */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-square rounded-3xl bg-gradient-to-br from-white to-slate-100 border border-slate-200 shadow-2xl flex items-center justify-center overflow-hidden">
              {/* Pattern Background */}
              <div 
                className="absolute inset-0 opacity-[0.03]" 
                style={{ 
                  backgroundImage: `radial-gradient(#135bec 1px, transparent 1px)`, 
                  backgroundSize: '24px 24px' 
                }} 
              />
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-50/50 rounded-full blur-3xl" />
              
              {/* Main Graphics */}
              <div className="relative z-10 flex items-center justify-center">
                {/* Background Gavel Ghost */}
                <Gavel className="absolute text-slate-200/50 rotate-12" size={240} strokeWidth={1} />
                
                {/* Center Fingerprint Card */}
                <div className="relative bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100">
                  <div className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-slate-50 border border-slate-100">
                    <Fingerprint className="text-primary" size={64} strokeWidth={1.5} />
                    {/* Scan line animation */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 animate-[scan_2s_ease-in-out_infinite]" />
                  </div>
                  
                  {/* Decorative lines representing data */}
                  <div className="mt-6 space-y-2 w-32">
                    <div className="h-2 w-full bg-slate-100 rounded-full" />
                    <div className="h-2 w-2/3 bg-slate-100 rounded-full" />
                    <div className="h-2 w-3/4 bg-slate-100 rounded-full" />
                  </div>

                  <div className="absolute -bottom-3 -right-3">
                     <div className="bg-green-100 text-green-700 p-1.5 rounded-full border border-white shadow-sm">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { top: 10%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 90%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};