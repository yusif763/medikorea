"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Menu, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMainDropdown, setActiveMainDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  useEffect(() => {
    // Find the right section by ID (more reliable)
    const rightSection = document.getElementById('main-content');
    
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target && target.scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (rightSection) {
      rightSection.addEventListener("scroll", handleScroll);
      return () => rightSection.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleMainDropdown = (menu: string) => {
    setActiveMainDropdown(activeMainDropdown === menu ? null : menu);
    setActiveSubDropdown(null);
  };
  const toggleSubDropdown = (menu: string) =>
    setActiveSubDropdown(activeSubDropdown === menu ? null : menu);

  return (
    <>
      {/* Top Navbar - Changes based on scroll */}
      {!isScrolled ? (
        // Initial navbar - expanded with menu items
        <nav className="fixed top-0 w-full z-50 transition-all duration-500 ease-in-out">
          <div className="bg-white/80 backdrop-blur-sm shadow-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                  <img
                    src="/base_logo_transparent_background.png"
                    alt="Logo"
                    className="h-16 transition-all duration-300"
                  />
                </Link>

                {/* Desktop Menu Items */}
                <div className="hidden md:flex items-center space-x-8">
                  <Link 
                    href="/about" 
                    className="text-[#0641c9] font-semibold hover:text-[#0533a3] transition-colors duration-200"
                  >
                    ABOUT US
                  </Link>
                  
                  {/* Services with Dropdown */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsServicesHovered(true)}
                    onMouseLeave={() => setIsServicesHovered(false)}
                  >
                    <button 
                      className="text-[#0641c9] font-semibold hover:text-[#0533a3] transition-colors duration-200 flex items-center gap-1"
                    >
                      SERVICES
                      <ChevronDown 
                        size={18} 
                        className={`transition-transform duration-200 ${isServicesHovered ? 'rotate-180' : ''}`}
                      />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isServicesHovered && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white backdrop-blur-md shadow-xl rounded-lg py-4 px-2 max-h-[70vh] overflow-y-auto">
                        <div className="space-y-3">
                          {/* Diagnostics & Preventive Health */}
                          <div className="px-3">
                            <h3 className="text-[#0641c9] font-bold text-sm mb-2">Diagnostics & Preventive Health</h3>
                            <ul className="space-y-1.5 text-xs">
                              <li><Link href="/services/full-health-checkup" className="text-gray-700 hover:text-[#0641c9] block py-1">Full Health Check-Up</Link></li>
                              <li><Link href="/services/comprehensive-eye-examination" className="text-gray-700 hover:text-[#0641c9] block py-1">Comprehensive Eye Examination</Link></li>
                              <li><Link href="/services/dna-genetic-testing" className="text-gray-700 hover:text-[#0641c9] block py-1">DNA & Genetic Testing</Link></li>
                              <li><Link href="/services/vitamin-nutrient-testing" className="text-gray-700 hover:text-[#0641c9] block py-1">Vitamin & Nutrient Testing</Link></li>
                              <li><Link href="/services/htma" className="text-gray-700 hover:text-[#0641c9] block py-1">Hair Tissue Mineral Analysis</Link></li>
                              <li><Link href="/services/oncology-screening" className="text-gray-700 hover:text-[#0641c9] block py-1">Oncology Screening</Link></li>
                              <li><Link href="/services/infertility-diagnostics" className="text-gray-700 hover:text-[#0641c9] block py-1">Infertility Diagnostics</Link></li>
                              <li><Link href="/services/obesity-nutritional-assessment" className="text-gray-700 hover:text-[#0641c9] block py-1">Obesity & Nutritional Assessment</Link></li>
                            </ul>
                          </div>
                          
                          <div className="border-t border-gray-200"></div>
                          
                          {/* Regenerative & Advanced Therapies */}
                          <div className="px-3">
                            <h3 className="text-[#0641c9] font-bold text-sm mb-2">Regenerative & Advanced Therapies</h3>
                            <ul className="space-y-1.5 text-xs">
                              <li><Link href="/services/stem-cell-therapy" className="text-gray-700 hover:text-[#0641c9] block py-1">Stem Cell Therapy</Link></li>
                              <li><Link href="/services/wellness-anti-aging" className="text-gray-700 hover:text-[#0641c9] block py-1">Wellness & Anti-Aging Programs</Link></li>
                              <li><Link href="/services/rehabilitation-physical-therapy" className="text-gray-700 hover:text-[#0641c9] block py-1">Rehabilitation & Physical Therapy</Link></li>
                              <li><Link href="/services/integrative-medicine" className="text-gray-700 hover:text-[#0641c9] block py-1">Integrative Medicine Programs</Link></li>
                            </ul>
                          </div>
                          
                          <div className="border-t border-gray-200"></div>
                          
                          {/* Specialist Medical Services */}
                          <div className="px-3">
                            <h3 className="text-[#0641c9] font-bold text-sm mb-2">Specialist Medical Services</h3>
                            <ul className="space-y-1.5 text-xs">
                              <li><Link href="/services/gynecology-urology" className="text-gray-700 hover:text-[#0641c9] block py-1">Gynecology & Urology</Link></li>
                              <li><Link href="/services/infertility-treatment" className="text-gray-700 hover:text-[#0641c9] block py-1">Infertility Treatment</Link></li>
                              <li><Link href="/services/oncology" className="text-gray-700 hover:text-[#0641c9] block py-1">Oncology</Link></li>
                              <li><Link href="/services/cardiology" className="text-gray-700 hover:text-[#0641c9] block py-1">Cardiology</Link></li>
                              <li><Link href="/services/neurology" className="text-gray-700 hover:text-[#0641c9] block py-1">Neurology</Link></li>
                              <li><Link href="/services/hematology" className="text-gray-700 hover:text-[#0641c9] block py-1">Hematology</Link></li>
                              <li><Link href="/services/endocrinology" className="text-gray-700 hover:text-[#0641c9] block py-1">Endocrinology</Link></li>
                              <li><Link href="/services/orthopedics" className="text-gray-700 hover:text-[#0641c9] block py-1">Orthopedics</Link></li>
                              <li><Link href="/services/dentistry" className="text-gray-700 hover:text-[#0641c9] block py-1">Dentistry</Link></li>
                              <li><Link href="/services/ophthalmology" className="text-gray-700 hover:text-[#0641c9] block py-1">Ophthalmology</Link></li>
                              <li><Link href="/services/ent-surgery" className="text-gray-700 hover:text-[#0641c9] block py-1">ENT Surgery</Link></li>
                              <li><Link href="/services/spine-back-vascular" className="text-gray-700 hover:text-[#0641c9] block py-1">Spine & Vascular Health</Link></li>
                            </ul>
                          </div>
                          
                          <div className="border-t border-gray-200"></div>
                          
                          {/* Aesthetic & Feminine Health */}
                          <div className="px-3">
                            <h3 className="text-[#0641c9] font-bold text-sm mb-2">Aesthetic & Feminine Health</h3>
                            <ul className="space-y-1.5 text-xs">
                              <li><Link href="/services/plastic-surgery" className="text-gray-700 hover:text-[#0641c9] block py-1">Plastic Surgery</Link></li>
                              <li><Link href="/services/cosmetology-dermatology" className="text-gray-700 hover:text-[#0641c9] block py-1">Cosmetology & Dermatology</Link></li>
                              <li><Link href="/services/scar-burn-treatment" className="text-gray-700 hover:text-[#0641c9] block py-1">Scar & Burn Treatment</Link></li>
                              <li><Link href="/services/vaginal-rejuvenation" className="text-gray-700 hover:text-[#0641c9] block py-1">Vaginal Rejuvenation</Link></li>
                              <li><Link href="/services/voice-feminization" className="text-gray-700 hover:text-[#0641c9] block py-1">Voice Feminization</Link></li>
                              <li><Link href="/services/hair-transplant" className="text-gray-700 hover:text-[#0641c9] block py-1">Hair Transplant</Link></li>
                              <li><Link href="/services/weight-management" className="text-gray-700 hover:text-[#0641c9] block py-1">Weight Management</Link></li>
                            </ul>
                          </div>
                          
                          <div className="border-t border-gray-200"></div>
                          
                          {/* Therapies & Holistic Care */}
                          <div className="px-3">
                            <h3 className="text-[#0641c9] font-bold text-sm mb-2">Therapies & Holistic Care</h3>
                            <ul className="space-y-1.5 text-xs">
                              <li><Link href="/services/acupuncture-traditional-medicine" className="text-gray-700 hover:text-[#0641c9] block py-1">Acupuncture & Traditional Medicine</Link></li>
                              <li><Link href="/services/physical-therapy" className="text-gray-700 hover:text-[#0641c9] block py-1">Physical Therapy</Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <Link href="/contact">
                    <button className="px-6 py-2 bg-[#0641c9] hover:bg-[#0533a3] text-white font-semibold rounded-full transition-colors duration-200 shadow-md hover:shadow-lg">
                      CONTACT US
                    </button>
                  </Link>
                </div>

                {/* Mobile menu button - hidden initially */}
                <button 
                  onClick={toggleMenu} 
                  className="md:hidden text-[#0641c9]"
                >
                  <Menu size={28} />
                </button>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        // Scrolled navbar - compact with hamburger menu
        <nav className="fixed top-0 w-full flex justify-center items-center p-3 bg-[#0641c9] backdrop-blur-md shadow-md z-50 h-14 transition-all duration-500 ease-in-out">
          <button 
            onClick={toggleMenu} 
            className="text-white absolute left-3 top-3"
          >
            <Menu size={28} />
          </button>
          
          <div className="text-xl font-bold">
            <Link href="/">
              <img
                src="/white_logo_transparent_background.png"
                alt="Logo"
                className="h-16 inline-block transition-all duration-300"
              />
            </Link>
          </div>
          
          <div className="absolute right-3">
          
          </div>
        </nav>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[85%] sm:w-1/2 h-full bg-white p-6 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button onClick={toggleMenu} className="mb-6 hover:rotate-90 transition-transform duration-200">
          <X size={28} />
        </button>

        <div className="flex flex-col gap-4 text-black font-semibold text-lg">
          <Link href="/about" className="hover:text-[#0641c9] transition-colors duration-200">
            ABOUT US
          </Link>

          {/* Services Main Menu */}
          <div>
            <button
              onClick={() => toggleMainDropdown("services")}
              className="flex justify-between items-center w-full hover:text-[#0641c9] transition-colors duration-200"
            >
              <span className="font-bold">SERVICES</span>
              <ChevronDown
                size={20}
                className={`transition-transform duration-200 ${
                  activeMainDropdown === "services" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeMainDropdown === "services" && (
              <div className="pl-4 space-y-3 mt-2">
                
                {/* Diagnostics & Preventive Health */}
                <div>
                  <button
                    onClick={() => toggleSubDropdown("diagnostics")}
                    className="flex justify-between items-center w-full text-gray-700 text-base font-semibold hover:text-[#0641c9] transition-colors duration-200"
                  >
                    <span>Diagnostics & Preventive Health</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        activeSubDropdown === "diagnostics" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeSubDropdown === "diagnostics" && (
                    <ul className="pl-4 text-gray-500 text-sm font-normal space-y-1 mt-2">
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/full-health-checkup">Full Health Check-Up</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/comprehensive-eye-examination">Comprehensive Eye Examination</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/dna-genetic-testing">DNA & Genetic Testing</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/vitamin-nutrient-testing">Vitamin & Nutrient Deficiency Testing</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/htma">Hair Tissue Mineral Analysis (HTMA)</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/oncology-screening">Oncology Screening</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/infertility-diagnostics">Infertility Diagnostics</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/obesity-nutritional-assessment">Obesity & Nutritional Assessment</Link></li>
                    </ul>
                  )}
                </div>

                {/* Regenerative & Advanced Therapies */}
                <div>
                  <button
                    onClick={() => toggleSubDropdown("regenerative")}
                    className="flex justify-between items-center w-full text-gray-700 text-base font-semibold hover:text-[#0641c9] transition-colors duration-200"
                  >
                    <span>Regenerative & Advanced Therapies</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        activeSubDropdown === "regenerative" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeSubDropdown === "regenerative" && (
                    <ul className="pl-4 text-gray-500 text-sm font-normal space-y-1 mt-2">
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/stem-cell-therapy">Stem Cell Therapy</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/wellness-anti-aging">Wellness & Anti-Aging Programs</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/rehabilitation-physical-therapy">Rehabilitation & Physical Therapy</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/integrative-medicine">Integrative Medicine Programs</Link></li>
                    </ul>
                  )}
                </div>

                {/* Specialist Medical Services */}
                <div>
                  <button
                    onClick={() => toggleSubDropdown("specialist")}
                    className="flex justify-between items-center w-full text-gray-700 text-base font-semibold hover:text-[#0641c9] transition-colors duration-200"
                  >
                    <span>Specialist Medical Services</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        activeSubDropdown === "specialist" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeSubDropdown === "specialist" && (
                    <ul className="pl-4 text-gray-500 text-sm font-normal space-y-1 mt-2">
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/gynecology-urology">Gynecology & Urology</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/infertility-treatment">Infertility Treatment</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/oncology">Oncology</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/cardiology">Cardiology</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/neurology">Neurology</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/hematology">Hematology</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/endocrinology">Endocrinology</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/orthopedics">Orthopedics</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/dentistry">Dentistry</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/ophthalmology">Ophthalmology</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/ent-surgery">ENT (Ear, Nose & Throat) Surgery</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/spine-back-vascular">Spine, Back & Vascular Health</Link></li>
                    </ul>
                  )}
                </div>

                {/* Aesthetic & Feminine Health */}
                <div>
                  <button
                    onClick={() => toggleSubDropdown("aesthetic")}
                    className="flex justify-between items-center w-full text-gray-700 text-base font-semibold hover:text-[#0641c9] transition-colors duration-200"
                  >
                    <span>Aesthetic & Feminine Health</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        activeSubDropdown === "aesthetic" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeSubDropdown === "aesthetic" && (
                    <ul className="pl-4 text-gray-500 text-sm font-normal space-y-1 mt-2">
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/plastic-surgery">Plastic Surgery</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/cosmetology-dermatology">Cosmetology & Dermatology</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/scar-burn-treatment">Scar & Burn Treatment</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/vaginal-rejuvenation">Vaginal Rejuvenation (Laser & Non-Surgical)</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/voice-feminization">Voice Feminization & Laryngoplasty</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/hair-transplant">Hair Transplant & Scalp Health</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/weight-management">Weight Management & Diet Programs</Link></li>
                    </ul>
                  )}
                </div>

                {/* Therapies & Holistic Care */}
                <div>
                  <button
                    onClick={() => toggleSubDropdown("holistic")}
                    className="flex justify-between items-center w-full text-gray-700 text-base font-semibold hover:text-[#0641c9] transition-colors duration-200"
                  >
                    <span>Therapies & Holistic Care</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        activeSubDropdown === "holistic" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeSubDropdown === "holistic" && (
                    <ul className="pl-4 text-gray-500 text-sm font-normal space-y-1 mt-2">
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/acupuncture-traditional-medicine">Acupuncture & Traditional Korean Medicine</Link></li>
                      <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/services/physical-therapy">Physical Therapy</Link></li>
                    </ul>
                  )}
                </div>

              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleMainDropdown("galleries")}
              className="flex justify-between items-center w-full hover:text-[#0641c9] transition-colors duration-200"
            >
              <span className="font-bold">GALLERIES</span>
              <ChevronDown
                size={20}
                className={`transition-transform duration-200 ${
                  activeMainDropdown === "galleries" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeMainDropdown === "galleries" && (
              <ul className="pl-4 text-gray-500 text-base font-normal space-y-2 mt-2">
                <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/galleries/photo">Photo Gallery</Link></li>
                <li className="hover:text-[#0641c9] transition-colors duration-150"><Link href="/galleries/video">Video Gallery</Link></li>
              </ul>
            )}
          </div>

          <Link href="#" className="hover:text-[#0641c9] transition-colors duration-200">
            PATIENT TESTIMONIALS
          </Link>

          <Link href="/contact">
            <button className="mt-6 px-4 py-2 bg-[#0641c9] hover:bg-[#0533a3] text-white rounded-full w-full text-center transition-colors duration-200 shadow-md hover:shadow-lg">
              CONTACT US
            </button>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div onClick={toggleMenu} className="fixed  bg-black z-40 " />
      )}
    </>
  );
}