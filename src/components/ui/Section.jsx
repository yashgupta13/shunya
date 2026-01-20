import React from 'react';

export const Section = ({ 
  children, 
  className = '', 
  id, 
  dark = false 
}) => {
  return (
    <section 
      id={id} 
      className={`py-20 lg:py-28 px-4 md:px-6 ${dark ? 'bg-slate-900 text-white' : ''} ${className}`}
    >
      <div className="container mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
};