import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Problem', id: 'problem' },
    { label: 'Risks', id: 'risks' },
    { label: 'Philosophy', id: 'philosophy' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur shadow-sm border-slate-200' 
          : 'bg-white border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between max-w-7xl">
        <a 
          href="#" 
          onClick={handleScrollTop}
          className="flex items-center gap-3 group"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <ShieldCheck size={20} strokeWidth={2.5} />
          </div>
          <span className="text-lg font-bold text-slate-900 tracking-tight">Shunya</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button size="sm" onClick={(e) => handleScrollTo(e, 'contact')}>Request Access</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-600 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={`#${link.id}`}
              className="text-base font-medium text-slate-600 py-2"
              onClick={(e) => handleScrollTo(e, link.id)}
            >
              {link.label}
            </a>
          ))}
          <Button className="w-full" onClick={(e) => handleScrollTo(e, 'contact')}>Request Access</Button>
        </div>
      )}
    </header>
  );
};