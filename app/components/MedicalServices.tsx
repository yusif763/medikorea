"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  Plus,
  ArrowRight
} from 'lucide-react';

const medicalServices = [
  {
    title: "Diagnostics & Preventive Health",
    icon: Stethoscope,
    gradient: "from-indigo-500 to-blue-600",
    image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=1200&h=600&fit=crop',
    services: [
      { name: "Full Health Check-Up", slug: "full-health-checkup" },
      { name: "Comprehensive Eye Examination", slug: "comprehensive-eye-examination" },
      { name: "DNA & Genetic Testing", slug: "dna-genetic-testing" },
      { name: "Vitamin & Nutrient Deficiency Testing", slug: "vitamin-nutrient-testing" },
      { name: "Hair Tissue Mineral Analysis (HTMA)", slug: "htma" },
      { name: "Oncology Screening", slug: "oncology-screening" },
      { name: "Infertility Diagnostics", slug: "infertility-diagnostics" },
      { name: "Obesity & Nutritional Assessment", slug: "obesity-nutritional-assessment" }
    ]
  },
  {
    title: "Regenerative & Advanced Therapies",
    icon: Zap,
    gradient: "from-indigo-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&h=400&fit=crop",
    services: [
      { name: "Stem Cell Therapy", slug: "stem-cell-therapy" },
      { name: "Wellness & Anti-Aging Programs", slug: "wellness-anti-aging" },
      { name: "Rehabilitation & Physical Therapy", slug: "rehabilitation-physical-therapy" },
      { name: "Integrative Medicine Programs", slug: "integrative-medicine" }
    ]
  },
  {
    title: "Specialist Medical Services",
    icon: Heart,
    gradient: "from-indigo-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
    services: [
      { name: "Gynecology & Urology", slug: "gynecology-urology" },
      { name: "Infertility Treatment", slug: "infertility-treatment" },
      { name: "Oncology", slug: "oncology" },
      { name: "Cardiology", slug: "cardiology" },
      { name: "Neurology", slug: "neurology" },
      { name: "Hematology", slug: "hematology" },
      { name: "Endocrinology", slug: "endocrinology" },
      { name: "Orthopedics", slug: "orthopedics" },
      { name: "Dentistry", slug: "dentistry" },
      { name: "Ophthalmology", slug: "ophthalmology" },
      { name: "ENT (Ear, Nose & Throat) Surgery", slug: "ent-surgery" },
      { name: "Spine, Back & Vascular Health", slug: "spine-back-vascular" }
    ]
  },
  {
    title: "Aesthetic & Feminine Health",
    icon: Sparkles,
    gradient: "from-indigo-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop",
    services: [
      { name: "Plastic Surgery", slug: "plastic-surgery" },
      { name: "Cosmetology & Dermatology", slug: "cosmetology-dermatology" },
      { name: "Scar & Burn Treatment", slug: "scar-burn-treatment" },
      { name: "Vaginal Rejuvenation (Laser & Non-Surgical)", slug: "vaginal-rejuvenation" },
      { name: "Voice Feminization & Laryngoplasty", slug: "voice-feminization" },
      { name: "Hair Transplant & Scalp Health", slug: "hair-transplant" },
      { name: "Weight Management & Diet Programs", slug: "weight-management" }
    ]
  },
  {
    title: "Therapies & Holistic Care",
    icon: Flower2,
    gradient: "from-indigo-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1544991875-5dc1b05f607d?w=600&h=400&fit=crop",
    services: [
      { name: "Acupuncture & Traditional Korean Medicine", slug: "acupuncture-traditional-medicine" },
      { name: "Physical Therapy", slug: "physical-therapy" }
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
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-slate-50 overflow-hidden">
      {/* Soft background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-gray-100/30 to-slate-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-slate-100/25 to-gray-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Elegant medical cross pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 50px 50px, #64748b 2px, transparent 2px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-transparent via-gray-100/30 to-transparent blur-xl"></div>
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
        <div className="grid grid-cols-1 gap-8">
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
                {/* Main Card */}
                <div className={`relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-gray-200/50 transition-all duration-300 ${
                  isExpanded ? 'shadow-2xl border-[#0641c9]/30' : 'hover:shadow-2xl hover:border-[#0641c9]/20'
                }`}>
                  
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t  opacity-80`}></div>
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-6 left-6">
                      <div className={`bg-white/20 backdrop-blur-sm rounded-full p-4 shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl font-light text-white mb-2 leading-tight tracking-wide">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    {/* Services Preview */}
                    <div className="space-y-3 mb-6">
                      {category.services.slice(0, 3).map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          href={`/services/${service.slug}`}
                          className="flex items-center justify-between p-3 rounded-xl bg-gray-50/50 hover:bg-gray-100/50 transition-all duration-200 group/service"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 bg-gradient-to-r ${category.gradient} rounded-full`}></div>
                            <span className="text-gray-700 font-medium group-hover/service:text-[#0641c9] transition-colors">
                              {service.name}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover/service:text-[#0641c9] transition-colors" />
                        </Link>
                      ))}
                    </div>

                    {/* Expand Button */}
                    {category.services.length >= 3 && (<button 
                      onClick={() => toggleCard(index)}
                      className={`w-full py-3 px-6 bg-gradient-to-r ${category.gradient} text-white rounded-2xl font-medium tracking-wide transition-all duration-200 hover:shadow-lg transform hover:scale-105`}
                    >
                      {isExpanded ? 'Show Less' : `View All ${category.services.length} Services`}
                    </button>)}

                    {/* Expanded Services */}
                    <div className={`overflow-scroll transition-all duration-500 ${
                      isExpanded ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-6 border-t border-gray-200/50">
                        <div className="space-y-2">
                          {category.services.slice(3).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={`/services/${service.slug}`}
                              className="flex items-center justify-between p-3 rounded-xl bg-gray-50/50 hover:bg-gray-100/50 transition-all duration-200 group/service"
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 bg-gradient-to-r ${category.gradient} rounded-full`}></div>
                                <span className="text-gray-700 font-medium group-hover/service:text-[#0641c9] transition-colors">
                                  {service.name}
                                </span>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover/service:text-[#0641c9] transition-colors" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
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