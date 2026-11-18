"use client";

import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import {
  FaGoogle,
  FaStar,
  FaUserDoctor,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

interface GoogleMembershipCardProps {
  googleReviewsUrl: string;

  treatmentImage?: string;
  avatars?: string[];

  rating?: string;
  patientCount?: string;
  experience?: string;

  doctorName?: string;
  qualification?: string;
}

const defaultAvatars = [
  "/images/after/a2-v2.png",
  "/images/after/a2-v2.png",
  "/images/after/a3.jpg",
  "/images/after/a4.jpg",
];

export default function GoogleMembershipCard({
  googleReviewsUrl,

  treatmentImage = "/images/t2n8.png",

  avatars = defaultAvatars,

  rating = "5.0",
  patientCount = "2.5K+",
  experience = "10+ Years",

  doctorName = "Dr. Itee Sinha / Dr. Sandeep Shrivastava",
  qualification = "MDS",
}: GoogleMembershipCardProps) {
  return (
    <a
      href={googleReviewsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View Google Reviews for Dr. Itee And Dr. Sandeep Shrivastava"
      className="
        group
        relative
        hidden
        w-full
        max-w-[430px]
        overflow-hidden
        rounded-[22px]
        lg:block
      "
    >
      {/* =====================================================
          FLOATING REVIEW CARD
      ===================================================== */}
      <div
        className="
          relative
          mx-[5%]
          mt-[70%]
          overflow-hidden
          rounded-[20px]
          border
          border-white/60
          bg-[#faf9f6]/90
          p-[clamp(10px,2.5vw,15px)]
          shadow-[0_12px_35px_rgba(0,0,0,0.16)]
          backdrop-blur-xl
          transition-all
          duration-500
          group-hover:-translate-y-1
          group-hover:shadow-[0_18px_45px_rgba(0,0,0,0.2)]
        "
      >
        {/* Very subtle top highlight */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            right-0
            top-0
            h-[1px]
            bg-gradient-to-r
            from-transparent
            via-white
            to-transparent
          "
        />

        <div className="flex items-center gap-[clamp(10px,2.5vw,15px)]">
          {/* =================================================
              TREATMENT IMAGE
          ================================================= */}
          <div
            className="
              relative
              h-[clamp(72px,18vw,108px)]
              w-[clamp(82px,22vw,128px)]
              shrink-0
              overflow-hidden
              rounded-[14px]
              bg-[#e8e8e8]
              shadow-[0_4px_15px_rgba(0,0,0,0.1)]
            "
          >
            <Image
              src={treatmentImage}
              alt="Dental treatment"
              fill
              sizes="128px"
              className="
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            {/* Google badge */}
            <div
              className="
                absolute
                bottom-[7px]
                left-[7px]
                flex
                h-[25px]
                w-[25px]
                items-center
                justify-center
                rounded-full
                bg-white/95
                shadow-[0_2px_8px_rgba(0,0,0,0.18)]
              "
            >
              <FaGoogle
                className="h-[12px] w-[12px] text-[#4285F4]"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}
          <div className="min-w-0 flex-1">
            {/* Patient avatars */}
            <div className="mb-[7px] flex items-center">
              {avatars.slice(0, 3).map((avatar, index) => (
                <div
                  key={`${avatar}-${index}`}
                  className="
                    relative
                    h-[clamp(25px,6.5vw,34px)]
                    w-[clamp(25px,6.5vw,34px)]
                    shrink-0
                    overflow-hidden
                    rounded-full
                    border-[2px]
                    border-[#faf9f6]
                    bg-gray-200
                    shadow-[0_2px_5px_rgba(0,0,0,0.08)]
                  "
                  style={{
                    marginLeft: index === 0 ? 0 : "-9px",
                    zIndex: 10 - index,
                  }}
                >
                  <Image
                    src={avatar}
                    alt=""
                    fill
                    sizes="34px"
                    className="object-cover"
                  />
                </div>
              ))}

              {/* + patients */}
              <div
                className="
                  ml-[-5px]
                  flex
                  h-[clamp(25px,6.5vw,34px)]
                  w-[clamp(25px,6.5vw,34px)]
                  items-center
                  justify-center
                  rounded-full
                  border-[2px]
                  border-[#faf9f6]
                  bg-[#f2eee9]
                  text-[9px]
                  font-semibold
                  text-[#555]
                "
              >
                +
              </div>
            </div>

            {/* =================================================
                GOOGLE RATING
            ================================================= */}
            <div className="flex items-center gap-[6px]">
              <span
                className="
                  text-[clamp(19px,4.8vw,25px)]
                  font-bold
                  leading-none
                  tracking-[-0.7px]
                  text-[#242424]
                "
              >
                {rating}
              </span>

              <div className="flex items-center gap-[2px]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className="
                      h-[clamp(10px,2.5vw,13px)]
                      w-[clamp(10px,2.5vw,13px)]
                      text-[#F7B731]
                    "
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>

            {/* Google Rating label */}
            <div className="mt-[3px] flex items-center gap-[5px]">
              <FaGoogle
                className="
                  h-[clamp(11px,2.8vw,14px)]
                  w-[clamp(11px,2.8vw,14px)]
                  text-[#4285F4]
                "
                aria-hidden="true"
              />

              <span
                className="
                  text-[clamp(10px,2.5vw,13px)]
                  font-medium
                  leading-none
                  text-[#555]
                "
              >
                Google Rating
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            TRUST STATS
        ===================================================== */}
        <div
          className="
            mt-[12px]
            grid
            grid-cols-2
            overflow-hidden
            rounded-[12px]
            border
            border-[#e8e2dc]
            bg-white/65
          "
        >
          {/* Patients */}
          <div
            className="
              flex
              items-center
              gap-[8px]
              px-[10px]
              py-[9px]
            "
          >
            <div
              className="
                flex
                h-[27px]
                w-[27px]
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#fff0e9]
              "
            >
              <span className="text-[12px]"><FaHeart className="text-brand-red"/> </span>
            </div>

            <div className="min-w-0">
              <div
                className="
                  text-[clamp(12px,3vw,15px)]
                  font-bold
                  leading-none
                  text-[#2b2b2b]
                "
              >
                {patientCount}
              </div>

              <div
                className="
                  mt-[3px]
                  whitespace-nowrap
                  text-[clamp(8px,2vw,10px)]
                  font-medium
                  leading-none
                  text-[#777]
                "
              >
                Happy Patients
              </div>
            </div>
          </div>

          {/* Experience */}
          <div
            className="
              flex
              items-center
              gap-[8px]
              border-l
              border-[#e8e2dc]
              px-[10px]
              py-[9px]
            "
          >
            <div
              className="
                flex
                h-[27px]
                w-[27px]
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#eef6ff]
              "
            >
              <FaUserDoctor
                className="h-[12px] w-[12px] text-[#4285F4]"
                aria-hidden="true"
              />
            </div>

            <div className="min-w-0">
              <div
                className="
                  text-[clamp(12px,3vw,15px)]
                  font-bold
                  leading-none
                  text-[#2b2b2b]
                "
              >
                {experience}
              </div>

              <div
                className="
                  mt-[3px]
                  whitespace-nowrap
                  text-[clamp(8px,2vw,10px)]
                  font-medium
                  leading-none
                  text-[#777]
                "
              >
                Clinical Experience
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            DOCTOR INFORMATION
        ===================================================== */}
        <div
          className="
            mt-[11px]
            flex
            items-center
            justify-between
            gap-3
          "
        >
          <div className="flex min-w-0 items-center gap-[8px]">
            {/* Doctor icon */}
            <div
              className="
                flex
                h-[30px]
                w-[30px]
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-brand-blue
              "
            >
              <FaUserDoctor
                className="h-[13px] w-[13px] text-white"
                aria-hidden="true"
              />
            </div>

            <div className="min-w-0">
              <div
                className="
                  truncate
                  text-[clamp(11px,2.8vw,14px)]
                  font-semibold
                  leading-none
                  text-[#272727]
                "
              >
                {doctorName}
              </div>

              <div
                className="
                  mt-[4px]
                  text-[clamp(9px,2.2vw,11px)]
                  font-medium
                  leading-none
                  text-[#888]
                "
              >
                {qualification} · Dental Care Specialist
              </div>
            </div>
          </div>

          {/* CTA */}
          <div
            className="
              flex
              shrink-0
              items-center
              gap-[5px]
              text-[clamp(9px,2.2vw,11px)]
              font-semibold
              text-[#4285F4]
              transition-colors
              duration-300
              group-hover:text-[#2468c7]
            "
          >
            <span>View Reviews</span>

            <FaArrowUpRightFromSquare
              className="
                h-[9px]
                w-[9px]
                transition-transform
                duration-300
                group-hover:translate-x-[2px]
                group-hover:-translate-y-[2px]
              "
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </a>
  );
}