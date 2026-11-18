import { HiArrowRight, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import BeforeAfterCard from "./ui/BeforeAfterCard";
import { FaTooth, FaWhatsapp } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { GiTooth } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const data = [
  {
    title:
      "Full-mouth or anterior teeth restoration (or fixed prosthodontics).",
    before: "/images/before/b1.jpg",
    after: "/images/after/a1.jpg",
    Icon: FaTooth,
  },
  {
    title: "Diastema Closure and Anterior Smile Makeover",
    before: "/images/before/b3.jpg",
    after: "/images/after/a3.jpg",
    Icon: GiTooth,
  },
  {
    title: "Dental Implants / Diastema Closure",
    before: "/images/before/b2-v2.png",
    after: "/images/after/a2-v2.png",
    Icon: MdMedicalServices,
  },
  {
    title: "Dental Implants with Cleaning and Cavity Filling",
    before: "/images/before/b8-v2.png",
    after: "/images/after/a8-v2.png",
    Icon: MdMedicalServices,
  },
  {
    title: "Gingivectomy (Crown Lengthening / Gum Contouring).",
    before: "/images/before/b5.jpg",
    after: "/images/after/a5.jpg",
    Icon: MdMedicalServices,
  },
  {
    title: "Teeth Cleaning",
    before: "/images/before/b6.jpg",
    after: "/images/after/a6.jpg",
    Icon: MdMedicalServices,
  },
  {
    title: "Teeth Closure & Bonding",
    before: "/images/before/b4.jpg",
    after: "/images/after/a4.jpg",
    Icon: FaTooth,
  },
  {
    title: "Deep Cleaning (Tartar & Stain Removal)",
    before: "/images/before/b7.jpg",
    after: "/images/after/a7.jpg",
    Icon: MdMedicalServices,
  },

  // Add more items here...
];

export default function SmileTransformations() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  const scrollToSlide = (index: number) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const card = container.firstElementChild as HTMLElement;

    if (!card) return;

    const gap = 32;
    const amount = card.offsetWidth + gap;

    container.scrollTo({
      left: index * amount,
      behavior: "smooth",
    });
  };

  // Keep active dot in sync with scrolling
  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const handleScroll = () => {
      const card = container.firstElementChild as HTMLElement;

      if (!card) return;

      const gap = 32;
      const amount = card.offsetWidth + gap;

      setActiveIndex(Math.round(container.scrollLeft / amount));
    };

    container.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Auto-play
  useEffect(() => {
    if (isInteracting) return;

    const id = setInterval(() => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const card = container.firstElementChild as HTMLElement;

      if (!card) return;

      const gap = 32;
      const amount = card.offsetWidth + gap;

      const next = activeIndex >= data.length - 1 ? 0 : activeIndex + 1;

      container.scrollTo({
        left: next * amount,
        behavior: "smooth",
      });

      setActiveIndex(next);
    }, 2500);

    return () => clearInterval(id);
  }, [activeIndex, isInteracting]);

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-8">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              <span className="size-1.5 rounded-full bg-blue-600" />
              Real Patient Results
            </div>

            {/* Heading */}
<h2 className="relative text-4xl  font-bold tracking-tight md:text-5xl lg:text-6xl">
  {/* Outline layer */}
  <span
    aria-hidden="true"
    className="absolute inset-0 text-transparent [-webkit-text-stroke:2px_#2563eb]"
  >
    Real Smiles.{" "}
   
  </span>

  {/* Main layer */}
  <span className="relative text-white">
    Real Smiles.{" "}
  </span>
    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
      Real Transformations.
    </span>
</h2>
            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              Explore treatment results from real patients at our clinic. Each
              transformation reflects personalised care, clinical expertise, and
              a focus on natural-looking, long-lasting results.
            </p>

            {/* Trust note */}
            <div className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-500">
              <svg
                className="size-4 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>Genuine patient cases · Real treatment outcomes</span>
            </div>
            <div className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-500">
              <svg
                className="size-4 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>Dr. Itee and Dr. Sandeep both with 10+ Years of Experience.</span>
            </div>
            <div className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-500">
              <svg
                className="size-4 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>5 Star Rating on Google. Google Reviews Below</span>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="tel:+91 8107047722"
            className="
          group
          inline-flex
          w-fit
          shrink-0
          cursor-pointer
          items-center
          gap-2.5
          rounded-full
          border
          border-blue-200
          bg-white
          px-6
          py-3
          text-sm
          font-semibold
          text-blue-700
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:border-blue-600
          hover:bg-blue-600
          hover:text-white
          hover:shadow-lg
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:ring-offset-2 uppercase
        "
          >
            BOOK Appointment
            <svg
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </Link>

          {/* WhatsApp */}
          <Link
            href="https://wa.me/918107047722?text=Hello%20Global%20Dental%2C%20I%20would%20like%20to%20book%20a%20dentist%20appointment.%20Could%20you%20please%20share%20the%20available%20time%20slots%3F"
            target="_blank"
            className="
                  rounded-xl
                    inline-flex
                    flex-1
                    min-w-fit
                    whitespace-nowrap
                    items-center
                    justify-center
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

        {/* Cases Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsInteracting(true)}
            onMouseLeave={() => setIsInteracting(false)}
            onTouchStart={() => setIsInteracting(true)}
            onTouchEnd={() => setTimeout(() => setIsInteracting(false), 1500)}
            onPointerDown={() => setIsInteracting(true)}
            onPointerUp={() => setTimeout(() => setIsInteracting(false), 1500)}
            className="
          flex
          gap-6
          overflow-x-auto
          scroll-smooth
          snap-x
          snap-mandatory
          px-1
          pb-5
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
          lg:gap-7
        "
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="
              w-[88%]
              shrink-0
              snap-start
              sm:w-[400px]
              lg:w-[410px]
            "
              >
                <BeforeAfterCard {...item} />
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="mt-8 flex items-center justify-center gap-2.5">
            {data.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollToSlide(index)}
                aria-label={`Go to case ${index + 1}`}
                aria-current={activeIndex === index}
                className={`
              rounded-full
              transition-all
              duration-300
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:ring-offset-2
              ${
                activeIndex === index
                  ? "h-2 w-7 bg-blue-600"
                  : "size-2 bg-slate-300 hover:bg-slate-400"
              }
            `}
              />
            ))}
          </div>

          {/* Reviews note */}
          <div className="mt-10 flex justify-center">
            <p className="text-center text-sm text-slate-500">
              Looking for patient experiences?{" "}
              <span className="font-semibold text-slate-700">
                Genuine reviews are below.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
