'use client'
import React, { useState, useEffect } from 'react';
import { Quote, Award, Globe, Heart, Users, Star } from 'lucide-react';

export default function CeoSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector('[data-ceo-section]');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      data-ceo-section
      className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden"
    >
      {/* Elegant background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-indigo-100/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-indigo-100/15 to-blue-100/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Subtle geometric pattern */}
        <div className="absolute top-40 left-1/4 w-32 h-32 border border-blue-100 rotate-45 rounded-3xl opacity-30"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 border-2 border-indigo-200 rotate-12 rounded-2xl opacity-25"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* CEO Image */}
          <div className="relative lg:order-2">
            <div className="relative">
              {/* Elegant frame effect */}
              <div className="absolute -inset-8 bg-gradient-to-br from-[#0641c9]/20 via-transparent to-indigo-200/30 rounded-3xl blur-2xl"></div>
              <div className="absolute -inset-4 bg-white/50 backdrop-blur-sm rounded-3xl border border-gray-200/50"></div>
              
              {/* Image container */}
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
                <img
                  src="/ceo.png"
                  alt="Dina Shin - CEO & Founder of MediHelp Korea"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                
                {/* Floating badge */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-[#0641c9] to-blue-600 text-white px-6 py-3 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    <span className="font-light text-sm tracking-wide">Founder & CEO</span>
                  </div>
                </div>
              </div>

              {/* Floating achievements */}
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200/50">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-[#0641c9] to-blue-600 rounded-full p-2">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">10+ Years</p>
                    <p className="text-xs text-gray-600">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CEO Information */}
          <div className="lg:order-1 space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-[#0641c9]"></div>
                <p className="text-[#0641c9] font-light tracking-widest uppercase text-sm">
                  Chief Executive Officer & Founder
                </p>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-light text-gray-900 tracking-wide">
                DINA <span className="text-[#0641c9] font-normal">SHIN</span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                As the founder and CEO of MediHelp Korea, I lead with one goal: to redefine the global 
                standard of personalized medical care. With over a decade of experience in international 
                healthcare coordination, I've built a bridge between South Korea's world-class medical 
                system and patients around the globe.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                I'm passionate about creating tailored health journeys, building strategic partnerships with 
                top hospitals, and ensuring every client feels seen, supported, and cared for — from 
                consultation to recovery.
              </p>
            </div>

            {/* Quote */}
            <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
              <Quote className="absolute top-4 left-4 w-6 h-6 text-[#0641c9] opacity-50" />
              <blockquote className="text-xl font-light text-gray-800 italic leading-relaxed pl-8">
                "Excellence begins with empathy — and innovation follows."
              </blockquote>
              <div className="flex items-center justify-end mt-4">
                <div className="w-16 h-px bg-[#0641c9] opacity-50"></div>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-gradient-to-r from-[#0641c9] to-blue-600 rounded-full p-3 w-fit mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl font-light text-gray-900">1000+</p>
                <p className="text-sm text-gray-600 font-light">Patients Served</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-[#0641c9] to-blue-600 rounded-full p-3 w-fit mx-auto mb-3">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl font-light text-gray-900">50+</p>
                <p className="text-sm text-gray-600 font-light">Hospital Partners</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-[#0641c9] to-blue-600 rounded-full p-3 w-fit mx-auto mb-3">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl font-light text-gray-900">98%</p>
                <p className="text-sm text-gray-600 font-light">Satisfaction Rate</p>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="bg-gradient-to-r from-[#0641c9]/10 to-blue-600/5 rounded-2xl p-6 border border-[#0641c9]/20">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-[#0641c9] to-blue-600 rounded-full p-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Global Healthcare Expertise</h4>
                  <p className="text-gray-600 font-light">
                    10+ years in medical tourism, concierge care, and strategic healthcare solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}