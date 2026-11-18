import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaTooth } from "react-icons/fa6";

const quickLinks = [
  "Home",
  "About Us",
  "Services",
  "New Patients",
  "Blog",
];

const services = [
  "Preventive Care",
  "Cosmetic Dentistry",
  "Restorative Dentistry",
  "Orthodontics",
  "Dental Implants",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#071b4b] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <FaTooth className="text-xl text-[#57c5e8]" />
              </div>

              <div className="leading-none">
                <h2 className="text-xl font-bold tracking-wide">
                  GLOBAL DENTAL
                </h2>
                <span className="text-xs  text-white/70">
                  Root Canal & Implant Centre
                </span>
              </div>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-6 text-white/60">
              We are dedicated to providing gentle,
              high-quality dental care in a warm
              and welcoming environment.
            </p>

            <div className="mt-6 flex gap-3">
              {[
                {
                  icon: <FaFacebookF />,
                  href: "#",
                },
                {
                  icon: <FaInstagram />,
                  href: "#",
                },
                {
                  icon: <FaTwitter />,
                  href: "#",
                },
                {
                  icon: <FaLinkedinIn />,
                  href: "#",
                },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full bg-white/10
                    text-sm text-white/80
                    transition
                    hover:bg-[#57c5e8]
                    hover:text-white
                  "
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em]">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item}`}
                    className="text-sm text-white/60 transition hover:text-[#57c5e8]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Services */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em]">
              Our Services
            </h3>

            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-white/60 transition hover:text-[#57c5e8]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em]">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">
                <FaMapMarkerAlt className="mt-1 text-[#57c5e8]" />
  <a
  href="https://www.google.com/maps/dir/?api=1&destination=Global+Dental,Sector+337/D,+Near+Aakriti+Greens+Phase-2,+Salaiya,+Bhopal,+M.P,+462039"
  target="_blank"
  rel="noopener noreferrer"
  className=" items-center gap-2 transition hover:text-[#56b5da] sm:flex"
>

                <p className="hover:underline text-sm leading-6 text-white/60">
                  Sector 337/D, 
                  <br />
                  Near Aakriti Greens Phase-2, Salaiya, 
                  <br />
                  Bhopal, M.P, 462039
                </p>
</a>
              </div>


              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#57c5e8]" />

                <Link href="tel:918107047722" className="hover:underline text-sm text-white/60">
                  +91 8107047722
                </Link>
              </div>


              <div className="hover:underline flex items-center gap-4">
                <FaEnvelope className="text-[#57c5e8]" />

                <p className="text-sm text-white/60">
                 itee.sinha22@gmail.com
                 Drsandeep8071@gmail.com
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>


      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-center text-sm text-white/50 sm:flex-row sm:justify-between lg:px-8">

          <p>
            © {new Date().getFullYear()} GLOBAL Dental. All rights reserved.
          </p>

          <div className="flex justify-center gap-6">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}
