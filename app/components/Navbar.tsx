"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Menu, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMainDropdown, setActiveMainDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleMainDropdown = (menu: string) => {
    setActiveMainDropdown(activeMainDropdown === menu ? null : menu);
    setActiveSubDropdown(null); // Close sub dropdowns when main changes
  };
  const toggleSubDropdown = (menu: string) =>
    setActiveSubDropdown(activeSubDropdown === menu ? null : menu);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 w-full flex justify-center items-center p-3 bg-[#0641c9] backdrop-blur-md shadow-md z-50 h-14">
        <button onClick={toggleMenu} className="text-white absolute left-3 top-3 sm:top-auto">
          <Menu size={28} />
        </button>
        <div className="text-xl font-bold">
          <Link href="/">
            <img
              src="/white_logo_transparent_background.png"
              width="150"
              alt="Logo"
              className="h-20 inline-block"
            />
          </Link>
        </div>
        <div className="absolute right-3"></div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[85%] sm:w-1/2 h-full bg-white p-6 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button onClick={toggleMenu} className="mb-6">
          <X size={28} />
        </button>

        <div className="flex flex-col gap-4 text-black font-semibold text-lg">
          <Link href="/about">ABOUT US</Link>
          <Link href="/doctors">DOCTORS</Link>

          {/* Services Main Menu */}
          <div>
            <button
              onClick={() => toggleMainDropdown("services")}
              className="flex justify-between items-center w-full"
            >
              <span className="font-bold">SERVICES</span>
              <ChevronDown
                size={20}
                className={`transition-transform ${
                  activeMainDropdown === "services" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeMainDropdown === "services" && (
              <div className="pl-4 space-y-3">
                
                {/* Diagnostics & Preventive Health */}
                <div>
                  <button
                    onClick={() => toggleSubDropdown("diagnostics")}
                    className="flex justify-between items-center w-full text-gray-700 text-base font-semibold"
                  >
                    <span>Diagnostics & Preventive Health</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        activeSubDropdown === "diagnostics" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeSubDropdown === "diagnostics" && (
                    <ul className="pl-4 text-gray-500 text-sm font-normal space-y-1 mt-2">
                      <li><Link href="/services/full-health-checkup">Full Health Check-Up</Link></li>
                      <li><Link href="/services/comprehensive-eye-examination">Comprehensive Eye Examination</Link></li>
                      <li><Link href="/services/dna-genetic-testing">DNA & Genetic Testing</Link></li>
                      <li><Link href="/services/vitamin-nutrient-testing">Vitamin & Nutrient Deficiency Testing</Link></li>
                      <li><Link href="/services/htma">Hair Tissue Mineral Analysis (HTMA)</Link></li>
                      <li><Link href="/services/oncology-screening">Oncology Screening</Link></li>
                      <li><Link href="/services/infertility-diagnostics">Infertility Diagnostics</Link></li>
                      <li><Link href="/services/obesity-nutritional-assessment">Obesity & Nutritional Assessment</Link></li>
                    </ul>
                  )}
                </div>

                {/* Regenerative & Advanced Therapies */}
                <div>
                  <button
                    onClick={() => toggleSubDropdown("regenerative")}
                    className="flex justify-between items-center w-full text-gray-700 text-base font-semibold"
                  >
                    <span>Regenerative & Advanced Therapies</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        activeSubDropdown === "regenerative" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeSubDropdown === "regenerative" && (
                    <ul className="pl-4 text-gray-500 text-sm font-normal space-y-1 mt-2">
                      <li><Link href="/services/stem-cell-therapy">Stem Cell Therapy</Link></li>
                      <li><Link href="/services/wellness-anti-aging">Wellness & Anti-Aging Programs</Link></li>
                      <li><Link href="/services/rehabilitation-physical-therapy">Rehabilitation & Physical Therapy</Link></li>
                      <li><Link href="/services/integrative-medicine">Integrative Medicine Programs</Link></li>
                    </ul>
                  )}
                </div>

                {/* Specialist Medical Services */}
                <div>
                  <button
                    onClick={() => toggleSubDropdown("specialist")}
                    className="flex justify-between items-center w-full text-gray-700 text-base font-semibold"
                  >
                    <span>Specialist Medical Services</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        activeSubDropdown === "specialist" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeSubDropdown === "specialist" && (
                    <ul className="pl-4 text-gray-500 text-sm font-normal space-y-1 mt-2">
                      <li><Link href="/services/gynecology-urology">Gynecology & Urology</Link></li>
                      <li><Link href="/services/infertility-treatment">Infertility Treatment</Link></li>
                      <li><Link href="/services/oncology">Oncology</Link></li>
                      <li><Link href="/services/cardiology">Cardiology</Link></li>
                      <li><Link href="/services/neurology">Neurology</Link></li>
                      <li><Link href="/services/hematology">Hematology</Link></li>
                      <li><Link href="/services/endocrinology">Endocrinology</Link></li>
                      <li><Link href="/services/orthopedics">Orthopedics</Link></li>
                      <li><Link href="/services/dentistry">Dentistry</Link></li>
                      <li><Link href="/services/ophthalmology">Ophthalmology</Link></li>
                      <li><Link href="/services/ent-surgery">ENT (Ear, Nose & Throat) Surgery</Link></li>
                      <li><Link href="/services/spine-back-vascular">Spine, Back & Vascular Health</Link></li>
                    </ul>
                  )}
                </div>

                {/* Aesthetic & Feminine Health */}
                <div>
                  <button
                    onClick={() => toggleSubDropdown("aesthetic")}
                    className="flex justify-between items-center w-full text-gray-700 text-base font-semibold"
                  >
                    <span>Aesthetic & Feminine Health</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        activeSubDropdown === "aesthetic" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeSubDropdown === "aesthetic" && (
                    <ul className="pl-4 text-gray-500 text-sm font-normal space-y-1 mt-2">
                      <li><Link href="/services/plastic-surgery">Plastic Surgery</Link></li>
                      <li><Link href="/services/cosmetology-dermatology">Cosmetology & Dermatology</Link></li>
                      <li><Link href="/services/scar-burn-treatment">Scar & Burn Treatment</Link></li>
                      <li><Link href="/services/vaginal-rejuvenation">Vaginal Rejuvenation (Laser & Non-Surgical)</Link></li>
                      <li><Link href="/services/voice-feminization">Voice Feminization & Laryngoplasty</Link></li>
                      <li><Link href="/services/hair-transplant">Hair Transplant & Scalp Health</Link></li>
                      <li><Link href="/services/weight-management">Weight Management & Diet Programs</Link></li>
                    </ul>
                  )}
                </div>

                {/* Therapies & Holistic Care */}
                <div>
                  <button
                    onClick={() => toggleSubDropdown("holistic")}
                    className="flex justify-between items-center w-full text-gray-700 text-base font-semibold"
                  >
                    <span>Therapies & Holistic Care</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        activeSubDropdown === "holistic" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeSubDropdown === "holistic" && (
                    <ul className="pl-4 text-gray-500 text-sm font-normal space-y-1 mt-2">
                      <li><Link href="/services/acupuncture-traditional-medicine">Acupuncture & Traditional Korean Medicine</Link></li>
                      <li><Link href="/services/physical-therapy">Physical Therapy</Link></li>
                    </ul>
                  )}
                </div>

              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleMainDropdown("galleries")}
              className="flex justify-between items-center w-full"
            >
              <span className="font-bold">GALLERIES</span>
              <ChevronDown
                size={20}
                className={`transition-transform ${
                  activeMainDropdown === "galleries" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeMainDropdown === "galleries" && (
              <ul className="pl-4 text-gray-500 text-base font-normal space-y-2">
                <li><Link href="/galleries/photo">Photo Gallery</Link></li>
                <li><Link href="/galleries/video">Video Gallery</Link></li>
              </ul>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleMainDropdown("hospitals")}
              className="flex justify-between items-center w-full"
            >
              <span className="font-bold">HOSPITALS</span>
              <ChevronDown
                size={20}
                className={`transition-transform ${
                  activeMainDropdown === "hospitals" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeMainDropdown === "hospitals" && (
              <ul className="pl-4 text-gray-500 text-base font-normal space-y-2">
                <li><Link href="/hospitals/horovice">Horovice Hospital</Link></li>
                <li><Link href="/hospitals/beroun">Beroun Rehabilitation Hospital</Link></li>
                <li><Link href="/hospitals/prague-diagnostic">Diagnostic Centres in Prague</Link></li>
                <li><Link href="/hospitals/oncological-centre">Oncological Centre Multiscan</Link></li>
                <li><Link href="/hospitals/mental-rehabilitation">Mental Rehabilitation Centre</Link></li>
                <li><Link href="/hospitals/cliniq-dejvice">Cliniq Dejvice</Link></li>
                <li><Link href="/hospitals/europe-ivf">The Europe IVF+</Link></li>
              </ul>
            )}
          </div>

          <Link href="#">PATIENT TESTIMONIALS</Link>
          <Link href="#">LATEST NEWS</Link>

          <Link href="/contact">
            <button className="mt-6 px-4 py-2 bg-[#0641c9] text-white rounded-full w-full text-center">
              CONTACT US
            </button>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div onClick={toggleMenu} className="fixed inset-0 bg-black opacity-30 z-40" />
      )}
    </>
  );
}