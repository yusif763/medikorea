"use client";
import React, { useState, useEffect } from 'react';
import { 
  Stethoscope, 
  Eye, 
  Dna, 
  TestTube, 
  Heart, 
  Activity, 
  Baby, 
  Scale,
  Zap,
  Shield,
  Users,
  Sparkles,
  Scissors,
  Smile,
  Flame,
  Volume2,
  Weight,
  Flower2,
  Plus
} from 'lucide-react';

const medicalServices = [
  {
    title: "Diagnostics & Preventive Health",
    icon: Stethoscope,
    gradient: "from-blue-500 to-indigo-600",
    services: [
      "Full Health Check-Up",
      "Comprehensive Eye Examination", 
      "DNA & Genetic Testing",
      "Vitamin & Nutrient Deficiency Testing",
      "Hair Tissue Mineral Analysis (HTMA)",
      "Oncology Screening",
      "Infertility Diagnostics",
      "Obesity & Nutritional Assessment"
    ]
  },
  {
    title: "Regenerative & Advanced Therapies",
    icon: Zap,
    gradient: "from-indigo-500 to-blue-600",
    services: [
      "Stem Cell Therapy",
      "Wellness & Anti-Aging Programs",
      "Rehabilitation & Physical Therapy",
      "Integrative Medicine Programs"
    ]
  },
  {
    title: "Specialist Medical Services",
    icon: Heart,
    gradient: "from-blue-600 to-indigo-700",
    services: [
      "Gynecology & Urology",
      "Infertility Treatment",
      "Oncology",
      "Cardiology",
      "Neurology",
      "Hematology",
      "Endocrinology",
      "Orthopedics",
      "Dentistry",
      "Ophthalmology",
      "ENT (Ear, Nose & Throat) Surgery",
      "Spine, Back & Vascular Health"
    ]
  },
  {
    title: "Aesthetic & Feminine Health",
    icon: Sparkles,
    gradient: "from-indigo-400 to-blue-500",
    services: [
      "Plastic Surgery",
      "Cosmetology & Dermatology",
      "Scar & Burn Treatment",
      "Vaginal Rejuvenation (Laser & Non-Surgical)",
      "Voice Feminization & Laryngoplasty",
      "Hair Transplant & Scalp Health",
      "Weight Management & Diet Programs"
    ]
  },
  {
    title: "Therapies & Holistic Care",
    icon: Flower2,
    gradient: "from-blue-500 to-indigo-600",
    services: [
      "Acupuncture & Traditional Korean Medicine",
      "Physical Therapy"
    ]
  }
];

export default function MedicalServicesSection() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.cardIndex);
            setVisibleCards(prev => new Set([...prev, cardIndex]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const cardElements = document.querySelectorAll('[data-card-index]');
    cardElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Soft background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-indigo-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-indigo-100/25 to-blue-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Elegant medical cross pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 50px 50px, #0641c9 2px, transparent 2px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Luxury Header */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent blur-xl"></div>
            <h2 className="relative text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-wide">
              Medical <span className="text-[#0641c9] font-normal italic">Services</span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-8">
              Experience world-class healthcare with cutting-edge treatments and personalized care in Korea's premier medical facilities
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#0641c9]"></div>
              <div className="w-3 h-3 bg-[#0641c9] rotate-45"></div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#0641c9]"></div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1  gap-8">
          {medicalServices.map((category, index) => {
            const IconComponent = category.icon;
            const isExpanded = expandedCard === index;
            const isVisible = visibleCards.has(index);

            return (
              <div
                key={index}
                data-card-index={index}
                className={`relative group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Luxury Card */}
                <div className={`relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 transition-all duration-300 cursor-pointer ${
                  isExpanded ? 'shadow-2xl border-[#0641c9]/30 transform scale-105' : 'hover:shadow-2xl hover:border-[#0641c9]/20'
                }`}
                onClick={() => toggleCard(index)}
                >
                  {/* Luxury accent line */}
                  <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#0641c9] to-transparent rounded-full"></div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`absolute -inset-3 bg-gradient-to-br ${category.gradient} rounded-full opacity-20 animate-pulse`}></div>
                    <div className={`relative bg-gradient-to-br ${category.gradient} rounded-full p-4 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-light text-gray-900 mb-4 leading-tight tracking-wide">
                    {category.title}
                  </h3>

                  {/* Services Preview */}
                  <div className="space-y-2 mb-6">
                    {category.services.slice(0, 3).map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center gap-3 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[#0641c9] rounded-full"></div>
                        <span className="text-sm font-light">{service}</span>
                      </div>
                    ))}
                    {category.services.length > 3 && (
                      <div className="flex items-center gap-3 text-gray-500">
                        <Plus className="w-4 h-4" />
                        <span className="text-sm font-light">
                          {category.services.length - 3} more services
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Expand Button */}
                  <button className={`w-full py-3 px-6 bg-gradient-to-r ${category.gradient} text-white rounded-2xl font-light tracking-wide transition-all duration-200 hover:shadow-lg transform hover:scale-105`}>
                    {isExpanded ? 'Show Less' : 'View All Services'}
                  </button>

                  {/* Expanded Services */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    isExpanded ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-4 border-t border-gray-200/50">
                      <div className="grid gap-2">
                        {category.services.slice(3).map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center gap-3 text-gray-600">
                            <div className="w-1.5 h-1.5 bg-[#0641c9] rounded-full"></div>
                            <span className="text-sm font-light">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0641c9]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -inset-4 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${category.gradient} rounded-full opacity-40 animate-float`}
                      style={{
                        top: `${20 + i * 25}%`,
                        right: `${15 + i * 20}%`,
                        animationDelay: `${i * 0.8 + index * 0.2}s`,
                        animationDuration: '4s'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>


      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
          50% { transform: translateY(-8px) rotate(180deg); opacity: 0.8; }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}