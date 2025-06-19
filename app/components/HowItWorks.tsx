// components/HowItWorks.js
'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const steps = [
  {
    title: 'Contact Us',
    subtitle: 'Initial Contact',
    text: 'Send us an email or WhatsApp message to get started.',
  },
  {
    title: 'Same-Day Reply',
    subtitle: 'We Respond Quickly',
    text: 'Our coordinator will respond with details and necessary documents.',
  },
  {
    title: 'Consultation',
    subtitle: 'Discussing Options',
    text: 'We consult top clinics and present the best treatment options.',
  },
  {
    title: 'Trip Planning',
    subtitle: 'Planning your trip to Korea',
    text: 'We arrange clinic registration, accommodation, and airport pickup.',
  },
];

export default function HowItWorks() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (pathRef.current) {
        const pathLength = pathRef.current.getTotalLength();
        const scrollPosition = window.scrollY + window.innerHeight;
        const sectionTop = pathRef.current.getBoundingClientRect().top + window.scrollY;
        const progress = Math.min((scrollPosition - sectionTop) / window.innerHeight, 1);
        pathRef.current.style.strokeDasharray = `${pathLength}`;
        pathRef.current.style.strokeDashoffset = `${pathLength - pathLength * progress}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-white text-gray-900 py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-wider">
            How It Works
          </h2>
          <hr className="w-16 h-1 bg-gray-300 mx-auto mt-4" />
        </div>
        <div className="relative">
          {/* Gradient snake-like path */}
          <svg
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 400"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0641c9" /> {/* Elegant purple */}
                <stop offset="25%" stopColor="#E2CFC9" /> {/* Soft blue */}
                <stop offset="50%" stopColor="#0641c9" /> {/* Fresh green */}
                <stop offset="75%" stopColor="#E2CFC9" /> {/* Light yellow */}
                <stop offset="100%" stopColor="#0641c9" /> {/* Warm pink */}
              </linearGradient>
            </defs>
            <path
              ref={pathRef}
              d="M50 0 Q75 50 50 100 T50 200 T50 300 T50 400"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              style={{
                strokeDasharray: '0',
                strokeDashoffset: '0',
                transition: 'stroke-dashoffset 0.3s ease',
              }}
            />
          </svg>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative md:w-1/2 ${
                  index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-white p-6 border border-gray-200 shadow-lg rounded-lg m-3">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 border border-gray-300 rounded-full text-center">
                    <span className="text-sm uppercase text-gray-500">{step.title}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-2 mt-6">
                    {step.subtitle}
                  </h4>
                  <p className="text-gray-600">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

