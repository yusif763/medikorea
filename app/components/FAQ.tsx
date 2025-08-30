'use client'
import React, { useState, useEffect } from 'react';
import { Plus, Minus, MessageCircle, Shield, Globe, Heart, Calendar, Languages, Stethoscope, Building2, UserCheck, CreditCard, DollarSign, Headphones } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: "What is MediHelp Korea?",
    answer: "MediHelp Korea is a premium medical concierge agency based in Seoul, connecting international clients with Korea's leading hospitals and clinics. We specialize in plastic surgery, wellness programs, full check-ups, regenerative medicine, and advanced medical care.",
    icon: Heart,
    category: "About Us"
  },
  {
    id: 2,
    question: "Is MediHelp Korea Fully Licensed and Government Approved?",
    answer: "Yes. We are a legally registered agency in South Korea, authorized to support international patients and collaborate with accredited medical institutions.",
    icon: Shield,
    category: "Credentials"
  },
  {
    id: 3,
    question: "Why Should I Use a Medical Concierge Agency?",
    answer: "Navigating a foreign medical system can be overwhelming. We simplify the process by helping you: Choose the right doctor or clinic, Translate medical information accurately, Handle bookings, transportation, and aftercare, Avoid misunderstandings or hidden costs. With us, your experience is safe, smooth, and fully supported.",
    icon: UserCheck,
    category: "Services"
  },
  {
    id: 4,
    question: "Do you help with visa support and travel planning?",
    answer: "Yes, we provide guidance on medical visa applications, KETA application, airport transfers, hotel recommendations, and full itinerary planning if needed.",
    icon: Globe,
    category: "Travel Support"
  },
  {
    id: 5,
    question: "Can you arrange an interpreter for my visit?",
    answer: "Absolutely. We provide professional medical interpreters in English, Russian, Arabic and other languages.",
    icon: Languages,
    category: "Language Support"
  },
  {
    id: 6,
    question: "What types of treatments do you offer?",
    answer: "We cover a wide range of services, including: Full medical check-ups, Plastic & aesthetic surgery, Regenerative medicine (stem cells, anti-aging), Scar and burn treatment, Dental, dermatology, orthopedics, and more.",
    icon: Stethoscope,
    category: "Treatments"
  },
  {
    id: 7,
    question: "Do you only work with certain clinics or hospitals?",
    answer: "We partner with carefully selected, certified hospitals and doctors known for their safety, innovation, and excellent outcomes.",
    icon: Building2,
    category: "Partners"
  },
  {
    id: 8,
    question: "Can I choose my own clinic or doctor?",
    answer: "Yes. We offer recommendations, but you're always free to choose your preferred doctor or facility.",
    icon: UserCheck,
    category: "Choice"
  },
  {
    id: 9,
    question: "How do I get started?",
    answer: "Just send us a message on WhatsApp, Instagram, or through our website's contact form. We'll respond within 24 hours.",
    icon: MessageCircle,
    category: "Getting Started"
  },
  {
    id: 10,
    question: "Do I need to pay in advance?",
    answer: "Some clinics require a deposit to reserve a treatment slot. We'll guide you through safe and secure payment options.",
    icon: CreditCard,
    category: "Payment"
  },
  {
    id: 11,
    question: "How much does treatment cost?",
    answer: "Prices vary by treatment, clinic, and doctor. We always provide transparent quotes before you travel, with no hidden costs.",
    icon: DollarSign,
    category: "Pricing"
  },
  {
    id: 12,
    question: "What happens after my treatment?",
    answer: "We provide aftercare support, including post-op check-ups, recovery recommendations, and follow-up coordination even after you return home.",
    icon: Headphones,
    category: "Aftercare"
  }
];

export default function FAQSection() {
  const [expandedItems, setExpandedItems] = useState(new Set());
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            const itemIndex = parseInt(entry.target.dataset.faqIndex);
            setVisibleItems(prev => new Set([...prev, itemIndex]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const faqElements = document.querySelectorAll('[data-faq-index]');
    faqElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleItem = (id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-indigo-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-indigo-100/25 to-blue-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Question mark pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230641c9' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4">
        {/* Luxury Header */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent blur-xl"></div>
            <h2 className="relative text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-wide">
              Frequently Asked <span className="text-[#0641c9] font-normal italic">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto mb-8">
              Everything you need to know about your medical journey to Korea
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#0641c9]"></div>
              <div className="w-3 h-3 bg-[#0641c9] rotate-45"></div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#0641c9]"></div>
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const IconComponent = faq.icon;
            const isExpanded = expandedItems.has(faq.id);
            const isVisible = visibleItems.has(index);

            return (
              <div
                key={faq.id}
                data-faq-index={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* FAQ Card */}
                <div className={`relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-[#0641c9]/20 ${
                  isExpanded ? 'shadow-xl border-[#0641c9]/30' : ''
                }`}>
                  
                  {/* Question Header */}
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#0641c9]/20 rounded-2xl transition-all duration-200"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`flex-shrink-0 mt-1 transition-all duration-300 ${
                        isExpanded ? 'transform scale-110' : ''
                      }`}>
                        <div className="bg-gradient-to-r from-[#0641c9] to-blue-600 rounded-full p-2.5 shadow-lg">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Question Text */}
                      <div className="flex-grow">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-tight mb-2">
                          {faq.question}
                        </h3>
                        {/* Category Badge */}
                        <span className="inline-block bg-[#0641c9]/10 text-[#0641c9] text-xs font-medium px-3 py-1 rounded-full">
                          {faq.category}
                        </span>
                      </div>

                      {/* Toggle Icon */}
                      <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                        isExpanded ? 'transform rotate-180' : ''
                      }`}>
                        <div className="bg-gray-100 hover:bg-[#0641c9]/10 rounded-full p-2 transition-colors duration-200">
                          {isExpanded ? (
                            <Minus className="w-5 h-5 text-[#0641c9]" />
                          ) : (
                            <Plus className="w-5 h-5 text-gray-600" />
                          )}
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Answer Content */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6">
                      <div className="pl-16 border-l-2 border-[#0641c9]/20 ml-2">
                        <p className="text-gray-700 leading-relaxed font-light text-base whitespace-pre-line">
                          {faq.answer.split('•').map((part, i) => 
                            i === 0 ? part : (
                              <span key={i}>
                                <br />• {part}
                              </span>
                            )
                          )}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Luxury accent line */}
                  {isExpanded && (
                    <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#0641c9]/30 to-transparent"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-20">
          <div className="inline-block bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-200/50">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Still Have <span className="text-[#0641c9] font-normal">Questions?</span>
            </h3>
            <p className="text-gray-600 font-light mb-6 max-w-md mx-auto">
              Our medical coordinators are here to help you 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#0641c9] to-blue-600 text-white px-8 py-4 rounded-2xl font-light tracking-wide transition-all duration-200 hover:shadow-xl transform hover:scale-105">
                WhatsApp Us
              </button>
              <button className="bg-white border-2 border-[#0641c9] text-[#0641c9] px-8 py-4 rounded-2xl font-light tracking-wide transition-all duration-200 hover:bg-[#0641c9] hover:text-white">
                Email Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}