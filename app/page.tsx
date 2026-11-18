"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Description from "../components/Description";
import InfoCard from "../components/InfoCard";
import Socials from "../components/Socials";
import Image from "next/image";
import Link from "next/link";
import {
  FaTooth,
  FaChevronDown,
  FaBars,
  FaPhoneAlt,
  FaCalendarAlt,
  FaClock,
  FaChevronRight,
  FaWhatsapp,
} from "react-icons/fa";
import SmileTransformations from "../components/SmileTransformation";
import ContactHighlight from "@/components/FaqSection";
import Footer from "@/components/Footer";
import GooglePatientsBadge from "@/components/GoogleBadge";
import GoogleMembershipCard from "@/components/GoogleCard";

const nav = ["HOME", "SERVICES", "DOCTORS", "REVIEWS", "CONTACT"];

const desktopImages = [
  "/images/owner-headshot.png",
  "/images/owner2.png",
  "/images/chair.png",
];

const mobileImages = ["/images/owner-headshot.png", "/images/chair.png"];

export default function Home() {
  const landingRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [topbarActive, setTopbarActive] = useState(false);

  

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    // setActive(0);

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // Background
      tl.from(bgRef.current, {
        opacity: 0,
        scale: 1.08,
        duration: 1,
        ease: "power2.out",
      });

      // Navbar container
      tl.fromTo(
        navRef.current,
        {
          autoAlpha: 0,
          y: -18,
          scale: 0.985,
          filter: "blur(6px)",
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.95,
          ease: "power2.out",
          clearProps: "filter",
        },
        "-=0.7",
      );

      // Navbar links staggerconst navLinks = navLinksRef.current?.children;
      const navLinks = navLinksRef.current?.children;
      if (navLinks && navLinks.length) {
        tl.fromTo(
          Array.from(navLinks),
          {
            autoAlpha: 0,
            y: 14,
            filter: "blur(8px)",
          },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.85,
            ease: "power2.out",
            stagger: {
              each: 0.12,
              from: "start",
              ease: "power2.inOut",
            },
            clearProps: "filter",
          },
          "-=0.6",
        );
      }
      // Hero text
      const heroChildren = heroRef.current?.children;

      if (heroChildren && heroChildren.length) {
        tl.fromTo(
          Array.from(heroChildren),
          {
            autoAlpha: 0,
            y: 24,
            filter: "blur(8px)",
          },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power2.out",
            stagger: {
              each: 0.14,
              from: "start",
              ease: "power1.inOut",
            },
            clearProps: "filter",
          },
          "-=0.25",
        );
      }
    }, landingRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={landingRef}
      className="relative flex  flex-col items-center justify-center bg-dark-blue dark:bg-transparent"
    >
      <div className="fixed inset-0 mt-8 -z-10 overflow-hidden">
        {images.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={`Hero ${index + 1}`}
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-1000 ${
              active === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-[linear-gradient(290deg,#0000000A_0%,#000000_100%)] opacity-90" />
      </div>

      <div ref={navRef} className="absolute top-0 left-0 right-0 z-10 ">
        <Socials   topbarActive={topbarActive}
  setTopbarActive={setTopbarActive}/>
        <header className="border-b-gray-100/10 border-b w-full mt-3 ">
          <div className="mx-auto flex max-w-[1200px] gap-26 items-center justify-between px-5 py-5 text-white">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label="TruSmile Home"
            >
              <FaTooth className={`text-4xl text-white  ${
    topbarActive ? "hidden" : ""
  }`} />
              {/* <Image
                src="/images/logo.jpg"
                alt="Global Dental logo"
                width={30}
                height={30}
                className="h-9 w-9 object-contain sm:h-8 sm:w-8 lg:h-[30px] lg:w-[30px]"
              /> */}

              <span    className={`text-3xl font-semibold tracking-[0.12em] leading-none ${
    topbarActive ? "hidden" : ""
  }`}>
                GLOBAL <span className="text-brand-blue">DENTAL</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              ref={navLinksRef}
              className="hidden items-center gap-8 lg:flex z-50"
              aria-label="Main navigation"
            >
              {nav.map((item, index) => (
                <Link
                  key={item}
                  href="#Faq"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-[12px]
                    font-semibold
                    tracking-[0.18em]
                    text-white
                    transition-colors
                    duration-300
                    hover:text-[#56b5da]
                  "
                >
                  {item}

                  {index < nav.length - 1 && (
                    <FaChevronDown
                      size={8}
                      className="
        text-white/60
        transition-colors
        duration-300
        group-hover:text-[#56b5da]
      "
                    />
                  )}
                </Link>
              ))}

              <Link
                href="tel:+918109770778"
                className="
                  inline-flex
                  items-center
                  justify-center
                  whitespace-nowrap
                  rounded-sm
                  bg-white
                  px-6
                  py-3
                  text-[12px]
                  font-semibold
                  tracking-[0.18em]
                  text-slate-900
                  shadow-md
                  transition
                  duration-300
                  hover:bg-brand-blue
                  hover:text-white
                "
              >
                CALL NOW
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="rounded-md p-2 lg:hidden"
              aria-label="Open menu"
            >
              <FaBars size={20} />
            </button>
          </div>
        </header>
      </div>

      {/* Hero content */}
    <div
  id="Home"
  ref={heroRef}
  className="relative z-5 flex min-h-screen w-full items-center"
>
  <div className="mx-auto w-full max-w-[1200px] px-5 md:px-10 lg:px-20 mt-28">
    <div className="text-left md:mt-0">
      <p className="text-sm font-light uppercase tracking-[0.25em] text-white/80 md:text-base">
        Dental Care For
      </p>

      <h1 className="mt-3 text-4xl font-light leading-[1.05] tracking-wide text-white md:text-7xl 2xl:text-8xl">
        YOUR <span className="font-semibold">NEW</span> <br />
        <span className="font-semibold text-brand-blue">SMILE</span>
      </h1>

      {/* Doctor Credentials */}
      <div className="mt-7 flex items-center gap-4">
        <div className="h-11 w-px bg-brand-blue shadow-[0_0_12px_rgba(37,99,235,0.5)]" />

        <div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-sm font-semibold tracking-wide text-white md:text-base">
            Dr. Itee Sinha & Dr. Sandeep Shrivastava
            </span>

            <span className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.15em] text-white/75 backdrop-blur-sm">
              MDS 
            </span>
          </div>

          <div className="mt-1 flex items-center gap-2 text-[11px] text-white/60 md:text-xs">
            <span>Dentist</span>
            <span className="text-white/25">•</span>
            <span>10+ Years of Clinical Experience</span>
          </div>
        </div>
      </div>
          <GooglePatientsBadge googleReviewsUrl={"https://maps.app.goo.gl/2gt7LGDvpdsX5JAv5"} />

      {/* Trust detail */}
      <div className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-white/45 md:text-[11px]">
        <span className="size-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
        Experienced Care
        <span className="size-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_rgba(37,99,235,0.8)]"></span>
        Personalised Dentistry
      </div>
    </div>
  </div>

          <GoogleMembershipCard googleReviewsUrl={"https://maps.app.goo.gl/2gt7LGDvpdsX5JAv5"} />
</div>

      {/* info card 
      monday –Saturday : 10:30 AM to 1 PM
5PM to 8PM

Sunday: 10:30 AM to 1 PM*/}
      <div className="bottom-0  grid gap-px overflow-hidden rounded-sm shadow-soft backdrop-blur-sm lg:grid-cols-3 rounded-2xl">
        <InfoCard
          title="Working Hours"
          subtitle=""
        value={
  <div className="mt-4 space-y-3 text-sm">
    <div>
      <span className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.18em] text-white/50 sm:text-[11px]">
        Monday – Saturday
      </span>

      <div className="whitespace-nowrap text-white/90">
        <span>05:30 PM – 8:00 PM</span>
        {/* <span className="mx-2 text-white/25">|</span>
        <span>5:00 PM – 8:00 PM</span> */}
      </div>
    </div>

    <div className="border-t border-white/10 pt-3">
      <span className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.18em] text-white/50 sm:text-[11px]">
        Sunday
      </span>

      <span className="text-white/90">10:30 AM – 1:00 PM</span>
    </div>
  </div>
}
          icon={<FaClock size={22} />}
        />

        <InfoCard
          title="Book an Appointment"
          subtitle="Schedule your visit"
          value={
            <Link
              href="https://wa.me/918107047722?text=Hello%20Global%20Dental%2C%20I%20would%20like%20to%20book%20a%20dentist%20appointment.%20Could%20you%20please%20share%20the%20available%20time%20slots%3F"
              target="_blank"
              rel="noopener noreferrer"
className="
  inline-flex
  items-center
  justify-center
  gap-2
  whitespace-nowrap
  rounded-xl
  border
  border-cyan-500
  bg-cyan-500/10
  px-5
  py-3
  text-[12px]
  font-semibold
  tracking-[0.12em]
  text-white
  shadow-md
  transition-all
  duration-300
  hover:-translate-y-1
  hover:border-cyan-500
  hover:bg-cyan-500
  sm:shadow-none
  sm:backdrop-blur-md
"              >
              <span
                className="
      rounded-full
      bg-white/20
      p-2
      transition-transform
      duration-300
      ease-out
      group-hover:translate-x-1
    "
              >
                <FaChevronRight size={13} />
              </span>
              Book Now
            </Link>
          }
          icon={<FaCalendarAlt size={22} />}
          center
        />
        <InfoCard
          title="Emergency Service"
          subtitle="+91 8107047722"
          value={
            <div className="my-8 flex flex-col gap-3 ">
              {/* Call */}
              {/* <p>+918107047722</p> */}
              <Link
                href="tel:+91 8107047722"
className="
  inline-flex
  items-center
  justify-center
  gap-2
  whitespace-nowrap
  rounded-xl
  border
  border-cyan-500
  bg-cyan-500/10
  px-5
  py-3
  text-[12px]
  font-semibold
  tracking-[0.12em]
  text-white
  shadow-md
  transition-all
  duration-300
  hover:-translate-y-1
  hover:border-cyan-500
  hover:bg-cyan-500
"              >
                <FaPhoneAlt className="text-[13px]" />
                CALL NOW
              </Link>

              {/* WhatsApp */}
              <Link
                href="https://wa.me/918107047722?text=Hello%20Global%20Dental%2C%20I%20would%20like%20to%20book%20a%20dentist%20appointment.%20Could%20you%20please%20share%20the%20available%20time%20slots%3F"
                target="_blank"
className="
  inline-flex
  items-center
  justify-center
  gap-2
  whitespace-nowrap
  rounded-xl
  border
  border-[#25D366]
  bg-[#25D366]/10
  px-5
  py-3
  text-[12px]
  font-semibold
  tracking-[0.12em]
  text-white
  shadow-md
  transition-all
  duration-300
  hover:-translate-y-1
  hover:border-[#25D366]
  hover:bg-[#25D366]
"              >
                <FaWhatsapp className="text-[15px]" />
                via WHATSAPP
              </Link>
            </div>
          }
          icon={<FaPhoneAlt size={22} />}
        />
      </div>

      <section
        id="About Us"
        className="mt-24 relative z-40 min-h-screen bg-white w-full"
      >
        <Description />
      </section>
      <section
        id="Services"
        className="relative z-40 min-h-screen bg-white  w-full"
      >
        <SmileTransformations />
      </section>
      {/* <section className="relative z-40 min-h-screen bg-white  w-full">
        <MembershipSection />
      </section> */}
      <section id="Faq" className="relative z-40 min-h-screen bg-white  w-full">
        <ContactHighlight />
      </section>
      <section className="relative z-40  bg-white  w-full">
        <Footer />
      </section>
    </div>
  );
}
