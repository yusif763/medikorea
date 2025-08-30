// app/services/[slug]/not-found.js - 404 Page for Services

import Link from 'next/link';
import { ArrowLeft, Search, Heart } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="w-32 h-32 bg-gradient-to-br from-[#0641c9]/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-16 h-16 text-[#0641c9]" />
          </div>
          
          <h1 className="text-6xl font-light text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-light text-gray-800 mb-6">Service Not Found</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            We couldn't find the medical service you're looking for. It may have been moved, 
            renamed, or doesn't exist in our current offerings.
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 mb-8">
          <h3 className="text-2xl font-light text-gray-900 mb-6 flex items-center justify-center gap-2">
            <Heart className="w-6 h-6 text-[#0641c9]" />
            Available Medical Services
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div>
              <h4 className="font-semibold text-[#0641c9] mb-2">Diagnostics & Preventive Health</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li><Link href="/services/full-health-checkup" className="hover:text-[#0641c9]">Full Health Check-Up</Link></li>
                <li><Link href="/services/comprehensive-eye-examination" className="hover:text-[#0641c9]">Eye Examination</Link></li>
                <li><Link href="/services/dna-genetic-testing" className="hover:text-[#0641c9]">DNA & Genetic Testing</Link></li>
                <li><Link href="/services/oncology-screening" className="hover:text-[#0641c9]">Oncology Screening</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-[#0641c9] mb-2">Advanced Therapies</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li><Link href="/services/stem-cell-therapy" className="hover:text-[#0641c9]">Stem Cell Therapy</Link></li>
                <li><Link href="/services/plastic-surgery" className="hover:text-[#0641c9]">Plastic Surgery</Link></li>
                <li><Link href="/services/vitamin-nutrient-testing" className="hover:text-[#0641c9]">Vitamin Testing</Link></li>
                <li><Link href="/services/htma" className="hover:text-[#0641c9]">Hair Tissue Analysis</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-gradient-to-r from-[#0641c9] to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="border-2 border-[#0641c9] text-[#0641c9] px-8 py-4 rounded-2xl font-semibold hover:bg-[#0641c9] hover:text-white transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}