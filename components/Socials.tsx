import Link from "next/link";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaChevronDown,
} from "react-icons/fa";

interface SubCompProps {
  topbarActive: boolean;
  setTopbarActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Socials( {topbarActive,
  setTopbarActive,
}: SubCompProps) {

    const handleToggle = () => {
    setTopbarActive((prev) => !prev);
  };

  return (
    <div className="w-full z-40 bg-dark-blue text-white">
      <div className="mx-auto px-5">

        {/* Top Row */}
        <div className="flex h-11 items-center justify-between">

          {/* Mobile Toggle */}
          <button
            onClick={handleToggle}
            className="flex items-center gap-2 text-xs font-medium sm:hidden"
          >
            Contact
            <FaChevronDown
              className={`transition-transform duration-300 ${
                topbarActive ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Desktop Contact */}
          <div className="hidden items-center gap-6 text-xs text-white/80 sm:flex">

            <Link
              href="tel:+918107047722"
              className="flex items-center gap-2 transition hover:text-[#56b5da]"
            >
              <FaPhoneAlt />
              +91 8107047722
            </Link>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Global+Dental,Sector+337/D,+Near+Aakriti+Greens+Phase-2,+Salaiya,+Bhopal,+M.P,+462039"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-[#56b5da]"
            >
              <FaMapMarkerAlt />
              <span>
                Sector 337/D, Near Aakriti Greens Phase-2, Salaiya
              </span>
            </a>

            <a
              href="mailto:itee.sinha22@gmail.com"
              className="flex items-center gap-2 transition hover:text-white text-brand-red"
            >
              <FaEnvelope />
              itee.sinha22@gmail.com
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">

            <a
              href="#"
              className="text-pink-500 transition hover:scale-110 hover:text-white"
            >
              <FaInstagram size={14} />
            </a>

            <a
              href="#"
              className="text-blue-400 transition hover:scale-110 hover:text-white"
            >
              <FaFacebookF size={14} />
            </a>

            <a
              href="#"
              className="text-cyan-400 transition hover:scale-110 hover:text-white"
            >
              <FaTwitter size={14} />
            </a>

            <a
              href="#"
              className="text-blue-500 transition hover:scale-110 hover:text-white"
            >
              <FaLinkedinIn size={14} />
            </a>

          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 sm:hidden ${
            topbarActive ? "max-h-64 py-4" : "max-h-0"
          }`}
        >
          <div className="space-y-4 border-t border-white/10 pt-4 text-sm">

            <Link
              href="tel:++91 8107047722"
              className="flex items-center gap-3"
            >
              <FaPhoneAlt className="text-[#56b5da]" />
              +91 8107047722
              +91 9660033750

            </Link>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Global+Dental,Sector+337/D,+Near+Aakriti+Greens+Phase-2,+Salaiya,+Bhopal,+M.P,+462039"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3"
            >
              <FaMapMarkerAlt className="mt-1 shrink-0 text-[#56b5da]" />

              <span>
                Sector 337/D,
                <br />
                Near Aakriti Greens Phase-2,
                <br />
                Salaiya, Bhopal, M.P. 462039
              </span>
            </a>

            <a
              href="mailto:itee.sinha22@gmail.com"
              className="flex items-center gap-3"
            >
              <FaEnvelope className="text-[#56b5da]" />
              itee.sinha22@gmail.com
            </a>

          </div>
        </div>

      </div>
    </div>
  );
}
