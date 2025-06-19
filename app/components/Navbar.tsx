"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Menu, ChevronDown } from "lucide-react"; // Optional: Install lucide-react for icons

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
          {/* Add top-3 for phone sizes */}
          <Menu size={28} />
        </button>
        <div className="text-xl font-bold">
          <Link   href="/">
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
        className={`fixed top-0 left-0 w-[85%] sm:w-1/2 h-full bg-white p-6 z-50 transform transition-transform duration-300 ease-in-out ${
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
              <ul className="pl-4 text-gray-500 text-base font-normal">
                <li><Link href="/dna-testing/premium">DNA Test Premium</Link></li>
                <li><Link href="/dna-testing/health">DNA Test Health</Link></li>
                <li><Link href="/dna-testing/lifestyle">DNA Test Lifestyle</Link></li>
                <li><Link href="/dna-testing/platinum">DNA Test Platinum</Link></li>
              </ul>
            )}
          </div>

          <Link href="/doctors">DOCTORS</Link>
          <Link href="/education-in-healthcare">EDUCATION IN HEALTHCARE</Link>

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
              <ul className="pl-4 text-gray-500 text-base font-normal">
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
              <ul className="pl-4 text-gray-500 text-base font-normal">
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

          <div>
            <button
              onClick={() => toggleDropdown("treatments")}
              className="flex justify-between items-center w-full"
            >
              <span className="font-bold">TREATMENTS</span>
              <ChevronDown
                size={20}
                className={`transition-transform ${
                  activeDropdown === "treatments" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeDropdown === "treatments" && (
              <ul className="pl-4 text-gray-500 text-base font-normal">
                <li><Link href="/treatments/rehabilitation">Rehabilitation</Link></li>
                <li><Link href="/treatments/diagnostics">Diagnostics</Link></li>
                <li><Link href="/treatments/orthopaedics">Orthopaedics</Link></li>
                <li><Link href="/treatments/plastic-surgery">Plastic and Aesthetic Surgery</Link></li>
                <li><Link href="/treatments/oncology">Oncology</Link></li>
                <li><Link href="/treatments/assisted-reproduction">Assisted Reproduction</Link></li>
                <li><Link href="/treatments/spinal-surgery">Spinal Surgery</Link></li>
                <li><Link href="/treatments/prosthetics">Prosthetics</Link></li>
                <li><Link href="/treatments/mental-rehabilitation">Mental Rehabilitation</Link></li>
                <li><Link href="/treatments/general-surgery">General Surgery</Link></li>
                <li><Link href="/treatments/stomatology">Stomatology and Stomatosurgery</Link></li>
                <li><Link href="/treatments/cardiac-surgery">Cardiac Surgery</Link></li>
              </ul>
            )}
          </div>

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
