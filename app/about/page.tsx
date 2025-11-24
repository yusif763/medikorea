import type { Metadata } from "next";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About MediHelp Korea",
  description: "Learn more about MediHelp Korea and our mission to provide the best medical tourism services.",
  openGraph: {
    title: "About MediHelp Korea",
    description: "Learn more about MediHelp Korea and our mission.",
    url: "https://medihelpkorea.com/about",
    siteName: "MediHelp Korea",
    images: [
      {
        url: "/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About MediHelp Korea",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About MediHelp Korea",
    description: "Learn more about MediHelp Korea and our mission.",
    images: ["/about-og-image.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16 pt-8">
        <h1 className="text-5xl font-extrabold text-[#0641c9] mb-4 animate-fade-in">
          MediHelp Korea
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Where world-class medicine meets concierge-level care.
        </p>
      </section>

      {/* About Us Section */}
      <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-4xl font-bold text-[#0641c9] mb-6">About Us</h2>
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
          <p>
            At MediHelp Korea, we don't just book appointments — we curate entire medical experiences.
          </p>
          <p>
            We are a premium medical concierge agency based in Seoul, dedicated to guiding international clients through South Korea's most advanced clinics, doctors, and wellness solutions.
          </p>
          <p>
            Whether you're coming for a comprehensive check-up, transformative aesthetic treatment, or a complex surgical procedure — we handle everything: from clinic selection and doctor coordination to translation, aftercare, and VIP hospitality.
          </p>
          <p className="font-semibold text-[#0641c9]">
            Our service is personal. Discreet. Stylish. We speak your language, understand your priorities, and deliver results with integrity and care.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-[#0641c9] mb-8 text-center">
          Why Clients Choose MediHelp Korea
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#0641c9]">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#0641c9] rounded-full mt-2"></div>
              <p className="text-gray-700 text-lg">
                Access to South Korea's top hospitals, specialists, and cutting-edge treatments
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#0641c9]">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#0641c9] rounded-full mt-2"></div>
              <p className="text-gray-700 text-lg">
                Handled A–Z: medical planning, interpretation, transport, recovery
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#0641c9]">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#0641c9] rounded-full mt-2"></div>
              <p className="text-gray-700 text-lg">
                Multilingual support (English, Russian, Arabic)
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#0641c9]">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#0641c9] rounded-full mt-2"></div>
              <p className="text-gray-700 text-lg">
                Premium experience without clinical coldness — always elegant, always human
              </p>
            </div>
          </div>
        </div>
        <p className="text-gray-700 text-xl mt-8 text-center font-semibold text-[#0641c9]">
          Your health is personal. So is our service. Welcome to MediHelp Korea.
        </p>
      </section>

      {/* Map Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-[#0641c9] mb-8 text-center">Our Location</h2>
        <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153168!3d-37.81627974202144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1f9c2d0b9e!2sMediHelp%20Korea!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen={true}
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-[#0641c9] mb-8 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-[#0641c9] to-[#0533a3] p-8 rounded-2xl shadow-lg text-white hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-4">
              <Phone className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Phone</h3>
            </div>
            <p className="text-lg">+82 10 4440 1082</p>
          </div>
          <div className="bg-gradient-to-br from-[#0641c9] to-[#0533a3] p-8 rounded-2xl shadow-lg text-white hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-4">
              <Mail className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Email</h3>
            </div>
            <div className="space-y-2">
              <p>
                <a href="mailto:info@medihelpkorea.com" className="hover:underline">
                  info@medihelpkorea.com
                </a>
              </p>
              <p>
                <a href="mailto:support@medihelpkorea.com" className="hover:underline">
                  support@medihelpkorea.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-[#0641c9] mb-8">Follow Us</h2>
        <div className="flex justify-center gap-6">
          <a 
            href="https://www.facebook.com/medihelpkorea" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#1877f2] to-[#0c63d4] rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300">
              <Facebook className="w-8 h-8 text-white" />
            </div>
          </a>
          <a 
            href="https://twitter.com/medihelpkorea" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#1da1f2] to-[#0c85d0] rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300">
              <Twitter className="w-8 h-8 text-white" />
            </div>
          </a>
          <a 
            href="https://www.instagram.com/medihelpkorea?igsh=MXU1dXpvcDBidmpiZQ==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#e4405f] via-[#f77737] to-[#fcaf45] rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300">
              <Instagram className="w-8 h-8 text-white" />
            </div>
          </a>
          <a 
            href="https://www.linkedin.com/company/medihelpkorea" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#0077b5] to-[#005885] rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300">
              <Linkedin className="w-8 h-8 text-white" />
            </div>
          </a>
        </div>
        <p className="text-gray-600 mt-6">Connect with us on social media for updates and health tips!</p>
      </section>
    </div>
  );
}