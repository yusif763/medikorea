import type { Metadata } from "next";

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
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4">About MediHelp Korea</h1>
        <p className="text-lg text-gray-600">
          We are dedicated to providing the best medical tourism services in Korea, connecting patients with world-class healthcare facilities and professionals.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Mission</h2>
        <p className="text-gray-700 text-lg">
          At MediHelp Korea, our mission is to make healthcare accessible and seamless for international patients. We aim to provide personalized care, expert guidance, and a stress-free experience.
        </p>
      </section>

      {/* Map Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Location</h2>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
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
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Phone</h3>
            <p className="text-gray-700">+82 10 1234 5678</p>
            <p className="text-gray-700">+82 10 8765 4321</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Email</h3>
            <p className="text-gray-700">
              <a href="mailto:info@medihelpkorea.com" className="text-blue-500 underline">
                info@medihelpkorea.com
              </a>
            </p>
            <p className="text-gray-700">
              <a href="mailto:support@medihelpkorea.com" className="text-blue-500 underline">
                support@medihelpkorea.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Follow Us</h2>
        <div className="flex justify-center gap-6">
          <a href="https://facebook.com/medihelpkorea" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook.svg" alt="Facebook" className="w-10 h-10" />
          </a>
          <a href="https://twitter.com/medihelpkorea" target="_blank" rel="noopener noreferrer">
            <img src="/icons/twitter.svg" alt="Twitter" className="w-10 h-10" />
          </a>
          <a href="https://instagram.com/medihelpkorea" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram.svg" alt="Instagram" className="w-10 h-10" />
          </a>
          <a href="https://linkedin.com/company/medihelpkorea" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-10 h-10" />
          </a>
        </div>
      </section>
    </div>
  );
}
