import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const images = [
  // "/background-home.jpg",
  "/images/owner-headshotv2.png",
  "/images/owner2-landscape.png",
];


export default function Description() {
const [current, setCurrent] = useState(0);

  useEffect(() => {
  const id = setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, 3500);

  return () => clearInterval(id);
}, []);

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 py-10">
      <div className="relative mx-auto w-full max-w-[520px]">
       

       <div className="relative overflow-hidden rounded-4xl border-8 border-white shadow-soft">
  {images.map((image, index) => (
    <Image
      key={image}
      src={image}
      alt="Global Dental Clinic"
      width={700}
      height={700}
      priority={index === 0}
      className={`absolute  h-full w-full object-cover transition-opacity ease-in-out duration-900 ${
        current === index ? "opacity-100" : "opacity-0"
      }`}
    />
  ))}

  {/* Keeps the container height */}
  <div className="aspect-4/3" />
</div>

      </div>

      <div className="px-8">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2ea3cc]">
          About Our Clinic
        </span>

        <h2 className="mt-4 font-display text-[38px] leading-tight text-[#1f2c3c] lg:text-[44px]">
          Welcome to <br />
          <span className="text-blue-400 uppercase">Global Dental</span>
        </h2>

        <p className="mt-6 max-w-[520px] text-[15px] leading-8 text-slate-600">
  At <strong>Global Dental</strong>, we are dedicated to creating healthy,
  confident smiles through personalized care, modern technology, and
  advanced dental treatments in a safe and comfortable environment.
</p>
<p className="mt-5 max-w-[520px] text-[15px] leading-7 text-slate-600">
  Our clinic is led by experienced specialists:
  <br /><br />
  <strong className="text-slate-800">Dr. Sandeep Shrivastava</strong>
  <br />
  MDS – Orthodontics & Dentofacial Orthopaedics
  <br />
  Government College of Dentistry, Indore.
  <br /><br />
  <strong className="text-slate-800">Dr. Itee Sinha</strong>
  <br />
  MDS - Conservative Dentistry & Endodontics
  <br />
  People&apos;s College of Dental Sciences (PCDS), Bhopal
  <br />
  Government Medical Officer.
</p>
       <div className="my-8 flex flex-col gap-4 sm:flex-row ">
  {/* Call */}
  <Link
    href="tel:+918107047722"
    className="
      inline-flex
      flex-1
      min-w-fit
      whitespace-nowrap
      items-center
      justify-center
      rounded-[3px]
      border
      border-[#2ea3cc]
      bg-white
      px-6
      py-3.5
      text-[13px]
      font-semibold
      tracking-[0.08em]
      text-[#2ea3cc]
      shadow-md
      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:bg-[#2ea3cc]
      hover:text-white
      hover:shadow-lg
    "
  >
    <FaPhoneAlt className="mr-2 shrink-0" />
    BOOK APPOINTMENT VIA CALL
  </Link>

  {/* WhatsApp */}
  <Link
    href="https://wa.me/918107047722?text=Hello%20Global%20Dental%2C%20I%20would%20like%20to%20book%20a%20dentist%20appointment.%20Could%20you%20please%20share%20the%20available%20time%20slots%3F"
    target="_blank"
    className="
      inline-flex
      flex-1
      min-w-fit
      whitespace-nowrap
      items-center
      justify-center
      rounded-[3px]
      bg-[#25D366]
      px-6
      py-3.5
      text-[13px]
      font-semibold
      tracking-[0.08em]
      text-white
      shadow-md
      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:bg-[#1EBE5D]
      hover:shadow-lg
    "
  >
    <FaWhatsapp className="mr-2 shrink-0" />
    BOOK VIA WHATSAPP
  </Link>
</div>


      </div>
    </div>
  );
}
