"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Menu, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (menu: string) =>
    setActiveDropdown(activeDropdown === menu ? null : menu);

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

          <div>
            <button
              onClick={() => toggleDropdown("dnaTesting")}
              className="flex justify-between items-center w-full"
            >
              <span className="font-bold">DNA TESTING</span>
              <ChevronDown
                size={20}
                className={`transition-transform ${
                  activeDropdown === "dnaTesting" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeDropdown === "dnaTesting" && (
              <ul className="pl-4 text-gray-500 text-base font-normal space-y-2">
                <li><Link href="/dna-testing/premium">DNA Test Premium</Link></li>
                <li><Link href="/dna-testing/health">DNA Test Health</Link></li>
                <li><Link href="/dna-testing/lifestyle">DNA Test Lifestyle</Link></li>
                <li><Link href="/dna-testing/platinum">DNA Test Platinum</Link></li>
              </ul>
            )}
          </div>

          <Link href="/doctors">DOCTORS</Link>
          <Link href="/education-in-healthcare">EDUCATION IN HEALTHCARE</Link>

          {/* Diagnostics & Preventive Health */}
          <div>
            <button
              onClick={() => toggleDropdown("diagnostics")}
              className="flex justify-between items-center w-full"
            >
              <span className="font-bold">DIAGNOSTICS & PREVENTIVE HEALTH</span>
              <ChevronDown
                size={20}
                className={`transition-transform ${
                  activeDropdown === "diagnostics" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeDropdown === "diagnostics" && (
              <ul className="pl-4 text-gray-500 text-base font-normal space-y-2">
                <li><Link href="/services/full-health-checkup">Full Health Check-Up</Link></li>
                <li><Link href="/services/comprehensive-eye-examination">Comprehensive Eye Examination</Link></li>
                <li><Link href="/services/dna-genetic-testing">DNA & Genetic Testing</Link></li>
                <li><Link href="/services/vitamin-nutrient-testing">Vitamin & Nutrient Deficiency Testing</Link></li>
                <li><Link href="/services/htma">Hair Tissue Mineral Analysis (HTMA)</Link></li>
                <li><Link href="/services/oncology-screening">Oncology Screening</Link></li>
                <li><Link href="/services/infertility-diagnostics">Infertility Diagnostics</Link></li>
                <li><Link href="/services/obesity-assessment">Obesity & Nutritional Assessment</Link></li>
              </ul>
            )}
          </div>

          {/* Regenerative & Advanced Therapies */}
          <div>
            <button
              onClick={() => toggleDropdown("regenerative")}
              className="flex justify-between items-center w-full"
            >
              <span className="font-bold">REGENERATIVE & ADVANCED THERAPIES</span>
              <ChevronDown
                size={20}
                className={`transition-transform ${
                  activeDropdown === "regenerative" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeDropdown === "regenerative" && (
              <ul className="pl-4 text-gray-500 text-base font-normal space-y-2">
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
              onClick={() => toggleDropdown("specialist")}
              className="flex justify-between items-center w-full"
            >
              <span className="font-bold">SPECIALIST MEDICAL SERVICES</span>
              <ChevronDown
                size={20}
                className={`transition-transform ${
                  activeDropdown === "specialist" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeDropdown === "specialist" && (
              <ul className="pl-4 text-gray-500 text-base font-normal space-y-2">
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
              onClick={() => toggleDropdown("aesthetic")}
              className="flex justify-between items-center w-full"
            >
              <span className="font-bold">AESTHETIC & FEMININE HEALTH</span>
              <ChevronDown
                size={20}
                className={`transition-transform ${
                  activeDropdown === "aesthetic" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeDropdown === "aesthetic" && (
              <ul className="pl-4 text-gray-500 text-base font-normal space-y-2">
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
              onClick={() => toggleDropdown("holistic")}
              className="flex justify-between items-center w-full"
            >
              <span className="font-bold">THERAPIES & HOLISTIC CARE</span>
              <ChevronDown
                size={20}
                className={`transition-transform ${
                  activeDropdown === "holistic" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeDropdown === "holistic" && (
              <ul className="pl-4 text-gray-500 text-base font-normal space-y-2">
                <li><Link href="/services/acupuncture-korean-medicine">Acupuncture & Traditional Korean Medicine</Link></li>
                <li><Link href="/services/physical-therapy">Physical Therapy</Link></li>
              </ul>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleDropdown("galleries")}
              className="flex justify-between items-center w-full"
            >
              <span className="font-bold">GALLERIES</span>
              <ChevronDown
                size={20}
                className={`transition-transform ${
                  activeDropdown === "galleries" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeDropdown === "galleries" && (
              <ul className="pl-4 text-gray-500 text-base font-normal space-y-2">
                <li><Link href="/galleries/photo">Photo Gallery</Link></li>
                <li><Link href="/galleries/video">Video Gallery</Link></li>
              </ul>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleDropdown("hospitals")}
              className="flex justify-between items-center w-full"
            >
              <span className="font-bold">HOSPITALS</span>
              <ChevronDown
                size={20}
                className={`transition-transform ${
                  activeDropdown === "hospitals" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeDropdown === "hospitals" && (
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

          <Link href="#">LATEST NEWS</Link>
          <Link href="#">MEDONLINE 24/7</Link>
          <Link href="#">PATIENT TESTIMONIALS</Link>

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