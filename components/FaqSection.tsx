import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  HiOutlineCalendarDays,
  HiOutlineChevronRight,
  HiOutlinePlus,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineHeart,
} from "react-icons/hi2";

const faqs = [
  {
    question: "Do you accept new patients?",
    answer:
      "Yes. We welcome new patients of all ages and provide comprehensive dental care tailored to your needs.",
  },
  {
    question: "Are dental procedures pain-free?",
    answer:
      "Absolutely. We use modern techniques and gentle dentistry to ensure your treatment is as comfortable as possible.",
  },
  {
    question: "How often should I get a dental cleaning?",
    answer:
      "Most patients benefit from a professional cleaning every six months, although your dentist may recommend a different schedule.",
  },
  {
    question: "Do you provide emergency dental care?",
    answer:
      "Yes. We offer emergency appointments for dental pain, broken teeth, infections, and other urgent dental concerns.",
  },
];

const highlights = [
  {
    icon: <HiOutlineShieldCheck size={22} />,
    title: "Experienced Dentists",
    desc: "Trusted care from qualified professionals.",
  },
  {
    icon: <HiOutlineSparkles size={22} />,
    title: "Modern Technology",
    desc: "Advanced equipment for precise treatments.",
  },
  {
    icon: <HiOutlineHeart size={22} />,
    title: "Comfort First",
    desc: "Gentle, patient-focused experience every visit.",
  },
];

const reviews = [
  {
    name: "Sachin",
    designation: "Samvidhan Live",
    phone: "+91 98XXXXXX21",
    text: "Amazing experience. The doctor explained everything clearly and the treatment was completely painless.",
    image: "/images/reviews/1.png",
    link: "https://maps.app.goo.gl/51ByG5hGYK28riJV7",
  },
  {
    name: "Manas Agarwal",
    designation: "Business Owner",
    phone: "+91 97XXXXXX45",
    text: "Very professional clinic with modern equipment. Highly recommended for family dental care.",
    image: "/images/reviews/2.png",
    link: "https://maps.app.goo.gl/rxsWZCmY5BGVm8z29",
  },
  {
    name: "Sweta Singh",
    designation: "Happy Client. Happy Smile",
    phone: "+91 97XXXXXX67",
    text: "Dr. Richa is a good dentist with great knowledge and experience.",
    image: "/images/reviews/3.png",
    link: "https://maps.app.goo.gl/ZbKhfTDJ26Kb1vCz6",
  },
  {
    name: "Mayuri Agarwal",
    designation: "Happy Client. Happy Smile",
    phone: "+91 96XXXXXX58",
    text: "Highly Recommended. She is an honest dentist who genuinely prioritises her patients health",
    image: "/images/reviews/4.png",
    link: "https://maps.app.goo.gl/jYQWrJA6MiZRMUkF9",
  },
  {
    name: "Nidhi Bhalerao",
    designation: "Happy Client. Happy Smile",
    phone: "+91 97XXXXXX88",
    text: "Excellent Braces Care & Guidance.",
    image: "/images/reviews/5.png",
    link: "https://maps.app.goo.gl/AsGciFQSat7SjATT9",
  },
  {
    name: "Nirmesh Gupta",
    designation: "Happy Client. Happy Smile",
    phone: "+91 98XXXXXX46",
    text: "A Doctor Who Truly Cares! Dr. Richa Took Follow-ups even after the Treatment",
    image: "/images/reviews/6.png",
    link: "https://maps.app.goo.gl/sQUA71w145smdpybA",
  },
  {
    name: "Akshat Agarwal",
    designation: "Happy Client. Happy Smile",
    phone: "+91 98XXXXXX77",
    text: "Not Just Treatment, The Right Treatment",
    image: "/images/reviews/7.png",
    link: "https://maps.app.goo.gl/qX53hxdGciqcSh1j9",
  },
  {
    name: "Priyanka B.",
    designation: "Happy Client. Happy Smile",
    phone: "+91 96XXXXXX84",
    text: "I have done my kids treatment here. She manages kids perfectly.",
    image: "/images/reviews/8.png",
    link: "https://maps.app.goo.gl/J6jLJYe8TX2Q6xTNA",
  },
  {
    name: "Kavita Agrawal",
    designation: "Happy Client. Happy Smile",
    phone: "+91 95XXXXXX36",
    text: "Very Humble and Hardworking. Dr. Richa Carries Perfection",
    image: "/images/reviews/9.png",
    link: "https://maps.app.goo.gl/L9fmF5RPsWmWE6nHA",
  },
  {
    name: "CONFEREX SOLUTION",
    designation: "Owner with a Happy Smile",
    phone: "+91 96XXXXXX47",
    text: "Where Expertise Meets Humility.",
    image: "/images/reviews/10.png",
    link: "https://maps.app.goo.gl/JyN6r2KYvYLm31MP8",
  },
  {
    name: "Arpit Agrawal",
    designation: "Happy Client. Happy Smile.",
    phone: "+91 96XXXXXX57",
    text: "Expert Knowledge, Proven Experience",
    image: "/images/reviews/11.png",
    link: "https://maps.app.goo.gl/noJ2SpQpM24Bg4W36",
  },
  {
    name: "Anuradha Singh",
    designation: "Happy Client. Happy Smile.",
    phone: "+91 98XXXXXX67",
    text: "wonderful experience.The dentist was incredible kind , friendly,and professional,which made me feel comfortable.",
    image: "/images/reviews/12.png",
    link: "https://maps.app.goo.gl/JbZ7VsGAkKMMvRdj9",
  },
  {
    name: "Bhoomika Agrawal",
    designation: "Happy Client. Happy Smile.",
    phone: "+91 98XXXXXX58",
    text: "Humble and Honest.",
    image: "/images/reviews/13.png",
    link: "https://maps.app.goo.gl/cBDArGLcENVX5k1aA",
  },
  {
    name: "Sanjeev Nayak",
    designation: "Happy Client. Happy Smile.",
    phone: "+91 97XXXXXX38",
    text: "I feel comfortable throughout the procedure. I highly recommend her.",
    image: "/images/reviews/14.png",
    link: "https://maps.app.goo.gl/hFSJs9hxy2zaL3iw6",
  },
  {
    name: "Shivansh",
    designation: "Happy Client. Happy Smile.",
    phone: "+91 98XXXXXX37",
    text: "Must Visit for Dental Problems.",
    image: "/images/reviews/15.png",
    link: "https://maps.app.goo.gl/8jMqmWuz4mmveBBL7",
  },
  {
    name: "Rohit Gupta",
    designation: "Happy Client. Happy Smile.",
    phone: "+91 99XXXXXX77",
    text: "5 Stars as Always.",
    image: "/images/reviews/16.png",
    link: "https://maps.app.goo.gl/kn8xPuqRqjqvbhiX6",
  },
  {
    name: "All Customers",
    designation: "Happy Clients. Happy Smiles.",
    phone: "+91 99XXXXXX77",
    text: "Overall Reviews Summary.",
    image: "/images/reviews/17.png",
    link: "https://www.google.com/maps/place/Global+Dental+Root+canal+and+Implant+centre/@23.1630734,77.4474187,17z/data=!4m8!3m7!1s0x397c4300584e814f:0x5c3f860cc70bf199!8m2!3d23.1630685!4d77.4499936!9m1!1b1!16s%2Fg%2F11myx_v49p?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D",
  },
];

const images = [
  "/images/chair.png",
  "/images/owner-headshot.png",
  "/images/owner.jpg",
];

type View = {
  src: string;
  label: string;
};

const views = {
  map: {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14672.781482356102!2d77.4309391871582!3d23.16306849999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4300584e814f%3A0x5c3f860cc70bf199!2sGlobal%20Dental%20Root%20canal%20and%20Implant%20centre!5e0!3m2!1sen!2sin!4v1786104089566!5m2!1sen!2sin",
    label: "Location",
  },
  street: {
    src: "https://www.google.com/maps/embed?pb=!4v1786183824382!6m8!1m7!1swGtkEPh2PJyYNgnxn9r6cA!2m2!1d23.16302318933053!2d77.4500396209084!3f23.30192188964648!4f18.51739298756401!5f0.7820865974627469",
    label: "360° View",
  },
} satisfies Record<string, View>;

type ViewKey = keyof typeof views;


export default function ContactHighlight() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [active, setActive] = useState(0);
  const [main, setMain] = useState<ViewKey>("map");
const imageIndex = active % images.length;
const reviewIndex = active % reviews.length;
const pip: ViewKey = main === "map" ? "street" : "map";

const swap = () => {
  setMain(pip);
};

  useEffect(() => {
  const interval = setInterval(() => {
    setActive((prev) => prev + 1);
  }, 5000);

  return () => clearInterval(interval);
}, []);
  return (
    <section className="bg-[#f7f9fd] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* FAQ */}
          <div className="rounded-[26px] bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-100">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2ea3cc]">
              Questions?
            </span>

            <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
              We&apos;ve Got Answers
            </h2>

            <div className="mt-6 divide-y divide-slate-100">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={faq.question}>
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    >
                      <span className="text-sm font-medium text-slate-800 sm:text-base">
                        {faq.question}
                      </span>

                      <HiOutlinePlus
                        size={18}
                        className={`shrink-0 text-black/50 transition-transform duration-300 ${
                          isOpen ? "rotate-45 text-[#2ea3cc]" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid overflow-hidden transition-all duration-300 ${
                        isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pr-2 text-sm leading-7 text-slate-500">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="#"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#2ea3cc]"
            >
              View all FAQs
              <HiOutlineChevronRight />
            </Link>
          </div>

          {/* Image Carousel */}
          <div>
            <div className="relative h-[320px] overflow-hidden rounded-[26px] shadow-sm sm:h-[420px] lg:h-full lg:min-h-[520px]">
              {images.map((image, index) => (
                <Image
                  key={image}
                  src={image}
                  alt="Global Dental Clinic"
                  fill
                  // sizes="(max-width: 1024px) 100vw, 33vw"
                  className={`object-cover transition-all duration-700 ${
                    imageIndex === index
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 py-5">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  aria-label={`Show image ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    imageIndex === index
                      ? "w-8 bg-[#2ea3cc]"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
          <div>
            {/* Review Card */}
            <div
              className="
      relative
      h-full
      overflow-hidden
      rounded-[26px]
      bg-white
      p-6
      shadow-sm
      ring-1
      ring-slate-100
      transition-all
      duration-500
      sm:min-h-[420px]
      min-h-[520px]
    "
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={`
          absolute inset-0 flex flex-col p-6
          transition-all duration-700
          ${
            reviewIndex === index
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }
        `}
                >
                  {/* User */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div
                      className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-blue-500
              to-cyan-400
              text-lg
              font-bold
              text-white
            "
                    >
                      {review.name.charAt(0)}
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {review.name}
                      </h3>

                      <p className="text-xs text-slate-500">
                        {review.designation}
                      </p>

                      <p className="text-xs text-slate-400">{review.phone}</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="mt-5 flex gap-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p
                    className="
            mt-5
            text-sm
            leading-7
            text-slate-600
          "
                  >
                    “{review.text}”
                  </p>

                  {/* Google Screenshot */}
                  <div
                    className="
            mt-auto
            overflow-hidden
            rounded-xl
            border
            border-slate-100
            bg-slate-50
          "
                  >
                    <Image
                      src={review.image}
                      alt="Google Review"
                      width={600}
                      height={300}
                      className="
              h-full
              w-full
              object-contain
            "
                    />
                  </div>

                  {/* Link */}
                  <a
                    href={review.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
            mt-4
            inline-flex
            items-center
            justify-center
            rounded-lg
            bg-blue-50
            py-2.5
            text-sm
            font-semibold
            text-blue-600
            transition
            hover:bg-blue-600
            hover:text-white
          "
                  >
                    View Google Review
                  </a>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 py-5">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  aria-label={`Show review ${index + 1}`}
                  className={`
          rounded-full
          transition-all
          duration-300
          ${
            reviewIndex === index
              ? "h-2.5 w-8 bg-[#2ea3cc]"
              : "h-2.5 w-2.5 bg-slate-300 hover:bg-slate-400"
          }
        `}
                />
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          {/* <div className="rounded-[26px] bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-100">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2ea3cc]">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
            Exceptional Care,
            <br />
            Every Visit
          </h2>

          <div className="mt-8 space-y-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eef8fc] text-[#2ea3cc] sm:h-12 sm:w-12">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-8 w-full rounded-lg bg-[#2ea3cc] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2495bd] sm:w-auto">
            Learn More
          </button>
        </div> */}
        </div>

        {/* CTA */}
        <div className="mt-18 rounded-[28px] bg-gradient-to-r from-[#2b63f0] to-[#4a53e6] px-5 py-7 shadow-xl sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="inline-flex shrink-0 items-center justify-center rounded-full bg-white p-3.5 text-[#2b63f0] sm:p-5">
                <HiOutlineCalendarDays className="text-[26px] sm:text-[38px]" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                  Ready to Love Your Smile?
                </h3>

                <p className="mt-2  max-w-xl text-sm leading-6 text-white/80 sm:text-2xs">
                  Schedule your appointment today and take the first step toward
                  a healthier, more confident smile with personalized dental
                  care.
                </p>
              </div>
            </div>

            <div className="my-8 flex flex-col gap-4 sm:flex-row ">
              <Link
                href="tel:918107047722"
                className="w-full rounded-xl bg-white px-8 py-4 font-semibold text-[#2b63f0] transition hover:scale-[1.03] sm:w-auto text-center"
              >
                Book Your Appointment
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
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl mt-3 bg-white shadow-lg ring-1 ring-slate-100">
          {/* Header */}
          <div className="flex flex-col gap-3 border-b border-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2ea3cc]">
                Find Us
              </span>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Visit Our Dental Clinic
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Global Dental Root Canal & Implant Centre
              </p>
            </div>

            <a
              href="https://www.google.com/maps/dir/23.1768064,77.4144/Global+Dental+Root+canal+and+Implant+centre,+sector+video+salaiya+337%2FD,+near+Aakriti+Greens,+Phase+2,+Misrod,+Bhopal,+Madhya+Pradesh+462039/@23.1693753,77.4116078,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x397c4300584e814f:0x5c3f860cc70bf199!2m2!1d77.4499936!2d23.1630685?entry=ttu&g_ep=EgoyMDI2MDgwNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="
        inline-flex
        items-center
        justify-center
        rounded-full
        bg-blue-50
        px-5
        py-2.5
        text-sm
        font-semibold
        text-[#2b63f0]
        transition
        hover:bg-[#2b63f0]
        hover:text-white
      "
            >
              Get Directions
            </a>
          </div>

     <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
  {/* Mobile: stacked views */}
  <div className="flex flex-col md:hidden">
    {/* Main / Location */}
    <div className="h-[280px] w-full">
      <iframe
        src={views[main].src}
        title={views[main].label}
        className="h-full w-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>

    {/* Secondary / 360 */}
    <div className="h-[280px] w-full border-t border-gray-200">
      <iframe
        src={views[pip].src}
        title={views[pip].label}
        className="h-full w-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  </div>

  {/* Desktop: Main + PIP */}
  <div className="relative hidden h-[420px] w-full md:block lg:h-[480px]">
    {/* Main view */}
    <iframe
      src={views[main].src}
      title={views[main].label}
      className="h-full w-full border-0"
      loading="lazy"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
    />

    {/* PIP */}
    <button
      type="button"
      onClick={swap}
      className="
        absolute bottom-4 right-4
        h-32 w-48
        overflow-hidden
        rounded-xl
        border-2 border-white
        bg-black
        shadow-xl
        transition
        hover:scale-[1.03]
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        lg:h-58 lg:w-94
      "
      aria-label={`Switch to ${views[pip].label}`}
    >
      <iframe
        src={views[pip].src}
        title={views[pip].label}
        className="pointer-events-none h-full w-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />

      <span className="absolute bottom-2 left-2 rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
        {views[pip].label}
      </span>
    </button>
  </div>
</div>

          {/* Footer Info */}
          <div className="flex flex-col gap-3 bg-slate-50 px-6 py-5 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Sector 337/D, Near Aakriti Greens Phase-2,
              <br className=" sm:block" />
              Bhopal, M.P - 462039
            </p>

            <div className="font-semibold text-[#2ea3cc]">
              Open Today · 10:30 AM - 8:00 PM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
