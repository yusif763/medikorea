'use client'
import React, { useState, useEffect } from "react";

// Generate all 36 partner logos
const clientLogos = Array.from({ length: 35 }, (_, i) => ({
  logo: `/partners/partner${i + 1}.png`,
  alt: `Partner ${i + 1}`,
  id: i + 1
}));

// Create scattered positioning and styling for each logo
const getScatteredProps = (index) => {
  const sizes = [
     'w-32 h-32', 
     'w-34 h-34'
  ];
  
  
  
  const opacities = ['opacity-70', 'opacity-80', 'opacity-90', 'opacity-85'];
  
  const margins = [
    'mt-0 ml-2', 'mt-2 ml-0', 'mt-1 ml-3', 'mt-3 ml-1', 
    'mt-0 ml-1', 'mt-1 ml-2', 'mt-2 ml-3', 'mt-3 ml-0'
  ];
  
  return {
    size: sizes[index % sizes.length],
    opacity: opacities[index % opacities.length],
    margin: margins[index % margins.length]
  };
};

export default function Partners() {
  const [hoveredLogo, setHoveredLogo] = useState(null);
  const [animatedLogos, setAnimatedLogos] = useState(new Set());

  // Staggered animation effect
  useEffect(() => {
    const timer = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 36);
      setAnimatedLogos(prev => {
        const newSet = new Set(prev);
        newSet.add(randomIndex);
        setTimeout(() => {
          setAnimatedLogos(current => {
            const updatedSet = new Set(current);
            updatedSet.delete(randomIndex);
            return updatedSet;
          });
        }, 2000);
        return newSet;
      });
    }, 800);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#0641c9]/10 text-[#0641c9] text-sm font-medium mb-6 border border-[#0641c9]/20">
            <div className="w-2 h-2 bg-[#0641c9] mr-2 animate-pulse"></div>
            36 Global Partners
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Our Partners

          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            From startups to Fortune 500 companies, our partners choose us for innovative solutions and reliable results.
          </p>
        </div>

        {/* Scattered Partners Grid */}
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#0641c9]/5  blur-2xl"></div>
          <div className="absolute bottom-20 right-16 w-48 h-48 bg-[#0641c9]/5  blur-3xl"></div>
          
          {/* Main scattered layout */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 lg:gap-6 min-h-96 p-8">
            {clientLogos.map((client:any, index) => {
              const props = getScatteredProps(index);
              const isAnimated = animatedLogos.has(index);
              
              return (
                <div
                  key={client.id}
                  className={`
                    ${props.size}  ${props.margin} ${props.opacity}
                    group relative flex items-center justify-center cursor-pointer
                    transition-all duration-500 ease-out
                    ${isAnimated ? 'animate-pulse scale-110' : 'hover:scale-125'}
                    ${hoveredLogo === client.id ? 'z-10 scale-125 -rotate-0' : ''}
                  `}
                  onMouseEnter={() => setHoveredLogo(client.id)}
                  onMouseLeave={() => setHoveredLogo(null)}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Logo container with elegant styling */}
                  <div className="relative w-full h-full">
                    {/* Background with brand color accent */}
                    <div className={`
                      absolute inset-0 bg-white dark:bg-slate-800  shadow-sm
                      border border-slate-200 dark:border-slate-700
                      transition-all duration-500
                      ${hoveredLogo === client.id 
                        ? 'shadow-xl shadow-[#0641c9]/20 border-[#0641c9]/30 bg-[#0641c9]/5' 
                        : 'group-hover:shadow-lg group-hover:shadow-[#0641c9]/10 group-hover:border-[#0641c9]/20'
                      }
                    `}></div>
                    
                    {/* Logo image */}
                    <div className="relative p-3 md:p-4 w-full h-full flex items-center justify-center">
                      <img
                        src={client.logo}
                        alt={client.alt}
                        className={`
                          max-w-full max-h-full object-contain
                          transition-all duration-500
                          ${hoveredLogo === client.id 
                            ? 'filter-none opacity-100' 
                            : 'filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100'
                          }
                        `}
                        onError={(e:any) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      
                      {/* Fallback design */}
                      <div className="hidden w-full h-full bg-gradient-to-br from-[#0641c9] to-blue-600 rounded-xl items-center justify-center text-white font-bold text-xs shadow-inner">
                        P{client.id}
                      </div>
                    </div>
                    
                    {/* Elegant hover ring effect */}
                    <div className={`
                      absolute inset-0  border-2 border-[#0641c9] 
                      transition-all duration-300
                      ${hoveredLogo === client.id ? 'opacity-40 scale-105' : 'opacity-0 scale-95'}
                    `}></div>
                    
                    {/* Subtle glow on hover */}
                    <div className={`
                      absolute inset-0  bg-[#0641c9]/10 blur-sm
                      transition-opacity duration-300
                      ${hoveredLogo === client.id ? 'opacity-100' : 'opacity-0'}
                    `}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Simple stats footer */}
        <div className="flex justify-center gap-12 md:gap-16 mt-16 pt-12 border-t border-slate-200 dark:border-slate-700">
          <div className="text-center group cursor-pointer">
            <div className="text-3xl md:text-4xl font-bold text-[#0641c9] mb-2 group-hover:scale-110 transition-transform duration-300">
              36+
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Partners</div>
          </div>
          
          <div className="text-center group cursor-pointer">
            <div className="text-3xl md:text-4xl font-bold text-[#0641c9] mb-2 group-hover:scale-110 transition-transform duration-300">
              25+
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Countries</div>
          </div>
          
          <div className="text-center group cursor-pointer">
            <div className="text-3xl md:text-4xl font-bold text-[#0641c9] mb-2 group-hover:scale-110 transition-transform duration-300">
              500K+
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
}