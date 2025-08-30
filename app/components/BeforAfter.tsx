'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Award } from 'lucide-react';

// Professional placeholder images - Replace with real clinic photos
const beforeAfterCases = [
  {
    id: 1,
    clinicName: "JK Plastic Surgery",
    procedure: "Rhinoplasty",
    beforeImage: "/before.png",
    afterImage: "/after.png",
    patientType: "International Patient"
  },
  {
    id: 2,
    clinicName: "Banobagi",
    procedure: "Double Eyelid Surgery",
    beforeImage: "/before.png",
    afterImage: "/after.png",
    patientType: "Asian International"
  },
  {
    id: 3,
    clinicName: "View Plastic Surgery",
    procedure: "Facelift",
    beforeImage: "/before.png",
    afterImage: "/after.png",
    patientType: "International Patient"
  },
  {
    id: 4,
    clinicName: "ID Hospital",
    procedure: "Breast Augmentation",
    beforeImage: "/before.png",
    afterImage: "/after.png",
    patientType: "International Patient"
  },
  {
    id: 5,
    clinicName: "Nana Plastic Surgery",
    procedure: "Jawline Contouring",
    beforeImage: "/before.png",
    afterImage: "/after.png",
    patientType: "Asian International"
  },
  {
    id: 6,
    clinicName: "Etonne",
    procedure: "Liposuction",
    beforeImage: "/before.png",
    afterImage: "/after.png",
    patientType: "International Patient"
  },
  {
    id: 7,
    clinicName: "LaPrin",
    procedure: "Blepharoplasty",
    beforeImage: "/before.png",
    afterImage: "/after.png",
    patientType: "Asian International"
  },
  {
    id: 8,
    clinicName: "Woonjin",
    procedure: "Mommy Makeover",
    beforeImage: "/before.png",
    afterImage: "/after.png",
    patientType: "International Patient"
  },
  {
    id: 9,
    clinicName: "JW Plastic Surgery",
    procedure: "Brazilian Butt Lift",
    beforeImage: "/before.png",
    afterImage: "/after.png",
    patientType: "International Patient"
  },
  {
    id: 10,
    clinicName: "Girin Plastic Surgery",
    procedure: "Tummy Tuck",
    beforeImage: "/before.png",
    afterImage: "/after.png",
    patientType: "Asian International"
  },
  {
    id: 11,
    clinicName: "One Percent Plastic Surgery",
    procedure: "Arm Lift",
    beforeImage: "/before.png",
    afterImage: "/after.png",
    patientType: "International Patient"
  },
  {
    id: 12,
    clinicName: "ID Hops",
    procedure: "Thigh Lift",
    beforeImage: "/before.png",
    afterImage: "/after.png",
    patientType: "Asian International"
  }
];

// Interactive Before/After Slider Component
const BeforeAfterSlider = ({ beforeImage, afterImage, clinicName }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    
    if (isDragging) {
      document.addEventListener('mouseup', handleGlobalMouseUp);
      return () => document.removeEventListener('mouseup', handleGlobalMouseUp);
    }
  }, [isDragging]);

  return (
    <div className="relative group">
      {/* Container */}
      <div 
        className="relative w-full h-80 md:h-96 overflow-hidden rounded-2xl shadow-xl cursor-ew-resize"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {/* After Image (Right Side) */}
        <img 
          src={afterImage} 
          alt="After surgery" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Before Image (Left Side) with clip-path */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src={beforeImage} 
            alt="Before surgery" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Slider Line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center cursor-ew-resize">
            <div className="w-4 h-4 bg-[#0641c9] rounded-full flex items-center justify-center">
              <div className="flex gap-0.5">
                <div className="w-0.5 h-3 bg-white rounded-full"></div>
                <div className="w-0.5 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-light">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-light">
          After
        </div>

        {/* Clinic Name Overlay */}
        <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-[#0641c9]/90 to-blue-600/90 backdrop-blur-sm text-white p-4 rounded-xl">
          <h4 className="font-semibold text-lg">{clinicName}</h4>
        </div>
      </div>
    </div>
  );
};

export default function BeforeAfterSection() {
  const [currentCase, setCurrentCase] = useState(0);
  const [visibleCases, setVisibleCases] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            const caseIndex = parseInt(entry.target.dataset.caseIndex);
            setVisibleCases(prev => new Set([...prev, caseIndex]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const caseElements = document.querySelectorAll('[data-case-index]');
    caseElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % beforeAfterCases.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + beforeAfterCases.length) % beforeAfterCases.length);
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#0641c9]/20 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-blue-600/10 to-[#0641c9]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Luxury Header */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-transparent via-[#0641c9]/20 to-transparent blur-xl"></div>
            <h2 className="relative text-5xl md:text-7xl font-light text-white mb-6 tracking-wide">
              Before & <span className="text-[#0641c9] font-normal italic">After</span>
            </h2>
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto mb-8">
              Real transformations from Korea's leading plastic surgery clinics
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#0641c9]"></div>
              <Award className="w-6 h-6 text-[#0641c9]" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#0641c9]"></div>
            </div>
          </div>
        </div>

        {/* Main Featured Case */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Case Info */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <button 
                    onClick={prevCase}
                    className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-light text-white mb-2">
                      {beforeAfterCases[currentCase].procedure}
                    </h3>
                    <p className="text-[#0641c9] font-medium">
                      {beforeAfterCases[currentCase].patientType}
                    </p>
                  </div>
                  
                  <button 
                    onClick={nextCase}
                    className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Interactive Slider */}
              <BeforeAfterSlider
                beforeImage={beforeAfterCases[currentCase].beforeImage}
                afterImage={beforeAfterCases[currentCase].afterImage}
                clinicName={beforeAfterCases[currentCase].clinicName}
              />

              {/* Instructions */}
              <div className="text-center mt-8">
                <p className="text-gray-300 font-light text-sm">
                  ← Drag the slider to see the transformation →
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Case Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfterCases.map((caseData, index) => {
            const isVisible = visibleCases.has(index);
            
            return (
              <div
                key={caseData.id}
                data-case-index={index}
                className={`relative transition-all duration-700 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => setCurrentCase(index)}
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-xl hover:shadow-2xl hover:border-[#0641c9]/40 transition-all duration-300 hover:scale-105">
                  <BeforeAfterSlider
                    beforeImage={caseData.beforeImage}
                    afterImage={caseData.afterImage}
                    clinicName={caseData.clinicName}
                  />
                  
                  <div className="text-center mt-4">
                    <h4 className="text-white font-semibold mb-1">{caseData.procedure}</h4>
                    <p className="text-gray-300 text-sm">{caseData.patientType}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-gray-300 text-sm font-light leading-relaxed">
              <strong className="text-white">Disclaimer:</strong> Results may vary from person to person. 
              These photos are shared with patient consent for educational purposes. 
              Individual results depend on various factors including skin type, age, and healing process.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-[#0641c9] to-blue-600 text-white px-8 py-4 rounded-2xl font-light tracking-wide transition-all duration-200 hover:shadow-xl transform hover:scale-105">
            Schedule Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
}