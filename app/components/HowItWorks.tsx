'use client'
import React, { useState, useEffect } from 'react';
import { Mail, CheckCircle, Plane, DollarSign, Building2, Stethoscope, Heart } from 'lucide-react';

const steps = [
  {
    icon: Mail,
    title: 'Submit Inquiry',
    description: 'Tell us your needs with ease',
    color: 'from-blue-500 to-blue-700',
    shadowColor: 'shadow-blue-500/25',
  },
  {
    icon: CheckCircle,
    title: 'Free Consultation',
    description: 'Receive expert recommendations',
    color: 'from-blue-400 to-blue-600',
    shadowColor: 'shadow-blue-400/25',
  },
  {
    icon: Plane,
    title: 'Plan Your Visit',
    description: 'We arrange travel and schedule',
    color: 'from-indigo-500 to-blue-600',
    shadowColor: 'shadow-indigo-500/25',
  },
  {
    icon: DollarSign,
    title: 'Deposit',
    description: 'Secure your appointment',
    color: 'from-blue-600 to-indigo-700',
    shadowColor: 'shadow-blue-600/25',
  },
  {
    icon: Building2,
    title: 'Clinic Selection',
    description: 'Choose from leading facilities',
    color: 'from-indigo-400 to-blue-500',
    shadowColor: 'shadow-indigo-400/25',
  },
  {
    icon: Stethoscope,
    title: 'Treatment',
    description: 'Receive world-class care',
    color: 'from-blue-500 to-indigo-600',
    shadowColor: 'shadow-blue-500/25',
  },
  {
    icon: Heart,
    title: 'Aftercare',
    description: 'Ongoing support provided',
    color: 'from-indigo-600 to-blue-700',
    shadowColor: 'shadow-indigo-600/25',
  },
];

export default function HowItWorks() {
  const [enlargedIcon, setEnlargedIcon] = useState(null);
  const [visibleSteps, setVisibleSteps] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target?.dataset.stepIndex);
            setVisibleSteps(prev => new Set([...prev, stepIndex]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const stepElements = document.querySelectorAll('[data-step-index]');
    stepElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleIconClick = (index) => {
    setEnlargedIcon(enlargedIcon === index ? null : index);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 px-4 overflow-hidden">
      {/* Soft animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/40 to-indigo-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-100/30 to-blue-100/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-50/60 to-indigo-50/50 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header with primary color gradient */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent mb-6 tracking-tight">
              How It Works
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-700 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Animated connecting path with primary color gradient */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 1}}>
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6"/>
                <stop offset="25%" stopColor="#6366f1" stopOpacity="0.6"/>
                <stop offset="50%" stopColor="#0641c9" stopOpacity="0.8"/>
                <stop offset="75%" stopColor="#4338ca" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.6"/>
              </linearGradient>
            </defs>
            {steps.slice(0, -1).map((_, index) => {
              const isLeft = index % 2 === 0;
              const nextIsLeft = (index + 1) % 2 === 0;
              const y1 = 80 + index * 160;
              const y2 = y1 + 160;
              const x1 = isLeft ? '25%' : '75%';
              const x2 = nextIsLeft ? '25%' : '75%';
              
              return (
                <path
                  key={index}
                  d={`M ${x1} ${y1} Q 50% ${y1 + 80} ${x2} ${y2}`}
                  stroke="url(#pathGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,4"
                  className="animate-pulse"
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                />
              );
            })}
          </svg>

          {/* Steps */}
          <div className="space-y-20 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isLeft = index % 2 === 0;
              const isEnlarged = enlargedIcon === index;
              const isVisible = visibleSteps.has(index);

              return (
                <div
                  key={index}
                  data-step-index={index}
                  className={`flex items-center ${
                    isLeft ? 'justify-start md:justify-start' : 'justify-end md:justify-end'
                  } relative transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`flex items-center gap-8 ${
                      isLeft ? 'flex-row' : 'flex-row-reverse'
                    } max-w-md`}
                  >
                    {/* Icon Container */}
                    <div className="relative group">
                      {/* Animated ring with primary color */}
                      <div className={`absolute -inset-3 bg-gradient-to-r ${step.color} rounded-full opacity-75 group-hover:opacity-100 animate-pulse`}></div>
                      
                      {/* Icon */}
                      <div
                        className={`relative bg-white/80 backdrop-blur-lg rounded-full p-6 cursor-pointer transition-all duration-500 ${step.shadowColor} shadow-xl border border-gray-200/50 group-hover:border-blue-300/60 ${
                          isEnlarged 
                            ? 'transform scale-150 shadow-2xl' 
                            : 'hover:scale-110 hover:rotate-3'
                        }`}
                        onClick={() => handleIconClick(index)}
                      >
                        <IconComponent 
                          className={`text-[#0641c9] transition-all duration-500 ${
                            isEnlarged ? 'w-10 h-10' : 'w-8 h-8'
                          }`} 
                        />
                      </div>

                      {/* Floating particles with primary color */}
                      <div className="absolute -inset-6 pointer-events-none">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className={`absolute w-1 h-1 bg-gradient-to-r ${step.color} rounded-full opacity-60 animate-ping`}
                            style={{
                              top: `${20 + i * 30}%`,
                              left: `${20 + i * 25}%`,
                              animationDelay: `${i * 500}ms`,
                              animationDuration: '2s',
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/60 shadow-xl max-w-xs transition-all duration-500 hover:bg-white/95 hover:scale-105 ${
                      isLeft ? 'text-left' : 'text-right'
                    }`}>
                      <h3 className="text-xl font-bold text-gray-800 mb-3 tracking-wide">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed font-light">
                        {step.description}
                      </p>
                      
                      {/* Step number with primary color */}
                      <div className={`absolute -top-3 ${isLeft ? '-right-3' : '-left-3'} w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                        {index + 1}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}