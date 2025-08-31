// app/services/[slug]/page.js - Next.js App Router SSR Page

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Star, Shield, CheckCircle, Calendar } from 'lucide-react';
import { getServiceData, getAllServiceSlugs } from '@/lib/serviceData';

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const service = getServiceData(params.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found - MediHelp Korea',
    };
  }

  return {
    title: `${service.title} - MediHelp Korea`,
    description: service.description,
    openGraph: {
      title: `${service.title} - MediHelp Korea`,
      description: service.description,
      images: [service.heroImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} - MediHelp Korea`,
      description: service.description,
      images: [service.heroImage],
    }
  };
}

// Generate static paths for all services
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  
  return slugs.map((slug) => ({
    slug,
  }));
}

// Helper function to flatten data for display
function getFlattenedItems(service) {
  let items: string[] = [];
  let title = '';

  if (service.canReveal && Array.isArray(service.canReveal)) {
    items = service.canReveal;
    title = 'What Can Be Revealed';
  } else if (service.canDetect && Array.isArray(service.canDetect)) {
    items = service.canDetect;
    title = 'What Can Be Detected';
  } else if (service.canImprove && Array.isArray(service.canImprove)) {
    items = service.canImprove;
    title = 'What Can Be Improved';
  } else if (service.benefits && Array.isArray(service.benefits)) {
    items = service.benefits;
    title = 'Benefits';
  } else if (service.treatmentsOffered && Array.isArray(service.treatmentsOffered)) {
    items = service.treatmentsOffered;
    title = 'Treatments Offered';
  } else if (service.proceduresOffered && Array.isArray(service.proceduresOffered)) {
    items = service.proceduresOffered;
    title = 'Procedures Offered';
  } else if (service.conditionsAddressed && Array.isArray(service.conditionsAddressed)) {
    items = service.conditionsAddressed;
    title = 'Conditions Addressed';
  } else if (service.conditionsTreated) {
    if (Array.isArray(service.conditionsTreated)) {
      items = service.conditionsTreated;
      title = 'Conditions Treated';
    } else if (typeof service.conditionsTreated === 'object') {
      // Handle nested objects like gynecology-urology
      items = [];
      Object.keys(service.conditionsTreated).forEach(key => {
        if (Array.isArray(service.conditionsTreated[key])) {
          items.push(`${key.charAt(0).toUpperCase() + key.slice(1)}:`);
          items.push(...service.conditionsTreated[key]);
        }
      });
      title = 'Conditions Treated';
    }
  }

  return { items, title };
}

// Main SSR page component
export default function ServicePage({ params }) {
  const service = getServiceData(params.slug);

  if (!service) {
    notFound();
  }

  const { items: flattenedItems, title: sectionTitle } = getFlattenedItems(service);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-blue-200 mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-blue-300">Services</span>
              <span>/</span>
              <span className="text-white">{service.title}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-wide">
              {service.title}
            </h1>
            <p className="text-xl text-gray-200 font-light leading-relaxed mb-8 max-w-3xl">
              {service.description}
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-300" />
                <span>{service.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span>{service.rating}/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span>International Standards</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <Link
          href="/"
          className="absolute top-20 left-6 z-20 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-200 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16 space-y-16">
        
        {/* Why Do We Need This Section */}
        {service.whyNeed && (
          <section>
            <h2 className="text-4xl font-light text-gray-900 mb-8 text-center">
              Why Do We Need {service.title}?
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
              <div className="space-y-4">
                {service.whyNeed.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#0641c9] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Why Korea Section */}
        {service.whyKorea && (
          <section>
            <h2 className="text-4xl font-light text-gray-900 mb-8 text-center">
              Why Korea is Famous for {service.title}
            </h2>
            <div className="bg-gradient-to-br from-[#0641c9]/5 to-blue-600/5 rounded-3xl p-8 shadow-xl border border-gray-200/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.whyKorea.map((advantage, index) => (
                  <div key={index} className="bg-white/70 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#0641c9] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-gray-800 leading-relaxed font-medium">{advantage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Step by Step Process */}
        {(service.stepProcess || service.process) && (
          <section>
            <h2 className="text-4xl font-light text-gray-900 mb-8 text-center">
              Step-by-Step Process
            </h2>
            <div className="space-y-6">
              {(service.stepProcess || service.process).map((step, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#0641c9] to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-gray-800 leading-relaxed font-medium">{step}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* What Can Be Revealed/Detected/Treated */}
        {flattenedItems.length > 0 && (
          <section>
            <h2 className="text-4xl font-light text-gray-900 mb-8 text-center">
              {sectionTitle}
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {flattenedItems.map((item, index) => {
                  // Check if item is a category header (ends with colon)
                  const isHeader = typeof item === 'string' && item.endsWith(':');
                  
                  return (
                    <div 
                      key={index} 
                      className={`flex items-center gap-3 p-4 rounded-xl ${
                        isHeader 
                          ? 'bg-[#0641c9]/10 col-span-full border-l-4 border-[#0641c9]' 
                          : 'bg-gradient-to-r from-[#0641c9]/5 to-blue-600/5'
                      }`}
                    >
                      {!isHeader && <CheckCircle className="w-5 h-5 text-[#0641c9]" />}
                      <span className={`text-gray-800 ${isHeader ? 'font-bold text-lg' : 'font-medium'}`}>
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* MediHelp Korea Advantage */}
        {service.advantage && (
          <section>
            <h2 className="text-4xl font-light text-gray-900 mb-8 text-center">
              The MediHelp Korea Advantage
            </h2>
            <div className="bg-gradient-to-r from-[#0641c9]/10 to-blue-600/5 rounded-3xl p-8 shadow-xl border border-gray-200/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.advantage.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Star className="w-6 h-6 text-[#0641c9] flex-shrink-0" />
                    <p className="text-gray-800 leading-relaxed font-medium">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Pricing Section */}
        <section className="text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 max-w-2xl mx-auto">
            <h3 className="text-3xl font-light text-gray-900 mb-6">Pricing Information</h3>
            <div className="text-5xl font-light text-[#0641c9] mb-4">
              Contact for Quote
            </div>
            <p className="text-gray-600 mb-6">
              Prices may vary based on individual requirements and selected clinic
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Medical consultation included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Personal translator provided</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Comprehensive aftercare</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Airport pickup available</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0641c9] to-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Begin Your Health Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get personalized consultation and start your transformation with Korea's leading medical experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-[#0641c9] px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-colors duration-200 inline-flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}