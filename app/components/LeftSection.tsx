"use client";

import { usePathname } from "next/navigation";

export default function LeftSection() {
  const pathname = usePathname();

  const leftSectionData = (() => {
    switch (pathname) {
      case "/":
        return {
          backgroundImage: '/background.jpg',
          header: 'Welcome to MediHelp Korea',
          description: 'Your trusted partner for medical tourism in Korea. Discover the best services tailored for you.',
          buttonText: 'Contact Us',
          buttonLink: '/contact',
        };
      case "/contact":
        return {
          backgroundImage: 'https://plus.unsplash.com/premium_photo-1658506646178-e4ef5810361b?q=80&w=2372&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          header: 'Get in Touch',
          description: 'We are here to assist you. Reach out to us for any inquiries or support.',
          buttonText: 'Send Message',
          buttonLink: '/contact-form',
        };
      case "/about":
        return {
          backgroundImage: '/about-bg.png',
          header: 'About MediHelp Korea',
          description: 'Learn more about our mission, vision, and the services we provide.',
          buttonText: 'Learn More',
          buttonLink: '/about',
        };
      default:
        return {
          backgroundImage: '/background.jpg',
          header: 'Welcome',
          description: 'Explore our services and offerings tailored to your needs.',
          buttonText: 'Explore',
          buttonLink: '/',
        };
    }
  })();

  return (
    <div className="relative w-1/2 bg-cover bg-center text-white p-10 flex flex-col justify-center  shadow-lg overflow-hidden" style={{ backgroundImage: `url(${leftSectionData.backgroundImage})` }}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
      {/* Content */}
      <div className="relative flex flex-col justify-center z-10">
        <h1 className="text-5xl text-center font-extrabold mb-6 leading-tight">{leftSectionData.header}</h1>
        <p className="text-lg text-center mb-8 text-gray-200">{leftSectionData.description}</p>
        <div className="flex justify-center">
        <a
          href={leftSectionData.buttonLink}
          className="inline-block bg-[#0641c9] text-white px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-blue-700 transition"
        >
          {leftSectionData.buttonText}
        </a>
        </div>

      </div>
    </div>
  );
}
