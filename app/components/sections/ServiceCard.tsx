'use client';

import { mediaUrl } from "@/lib/media";
import {
  ArrowRight,
  Building2,
  Home,
  Building,
  Sofa,
  Paintbrush,
  Car,
  Footprints,
  TentTree,
  Settings,
  ShieldCheck,
  Leaf,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const businesses = [
  {
    type: 'construction',
    title: 'CONSTRUCTION & INTERIORS',
    badge: 'BUILT TO LAST',
    badgeIcon: ShieldCheck,
    description:
      'Building strong, functional, and reliable spaces from residential and commercial projects to complete interior works and renovations.',
    link: '/construction',
    features: [
      {
        name: 'Residential',
        icon: Home,
      },
      {
        name: 'Commercial',
        icon: Building,
      },
      {
        name: 'Interior',
        icon: Sofa,
      },
      {
        name: 'Renovation',
        icon: Paintbrush,
      },
    ],
  },
  {
    type: 'greenland',
    title: 'GREENLAND',
    subtitle: 'TENSILE SHADE',
    badge: 'SHADES OF INNOVATION',
    badgeIcon: Leaf,
    description:
      'Innovative tensile and canopy shade solutions designed, supplied, and installed for premium outdoor spaces.',
    link: '/greenland',
    features: [
      {
        name: 'Car Parking',
        icon: Car,
      },
      {
        name: 'Walkway',
        icon: Footprints,
      },
      {
        name: 'Canopy',
        icon: TentTree,
      },
      {
        name: 'Custom',
        icon: Settings,
      },
    ],
  },
];

export default function OurBusinesses() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.12,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="businesses"
      className="
        relative
        w-full
        overflow-hidden
        bg-gradient-to-br
        from-[#F8F6F1]
        via-[#EDE4D5]
        to-[#DCCBB5]/70
        py-4
        sm:py-7
        lg:py-9
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Soft white lighting */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-white/25" />

        {/* Beige glow - Hidden on mobile */}
        <div
          className="
            absolute
            -left-48
            -top-48
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#DCCBB5]/25
            blur-[120px]
            hidden
            md:block
          "
        />

        {/* Taupe glow - Hidden on mobile */}
        <div
          className="
            absolute
            -bottom-48
            -right-48
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#B8A58D]/20
            blur-[120px]
            hidden
            md:block
          "
        />

      </div>

      {/* =========================================================
          TOP LEFT DOTS - Hidden on mobile
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          hidden
          h-[170px]
          w-[150px]
          opacity-40
          md:block
        "
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(169,148,121,0.5) 1.5px, transparent 1.5px)',
          backgroundSize: '15px 15px',
          maskImage:
            'linear-gradient(to right, black, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, black, transparent)',
        }}
      />

      {/* =========================================================
          BOTTOM LEFT WAVES - Hidden on mobile
      ========================================================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 hidden h-[180px] w-[300px] opacity-30 md:block">
        <svg
          viewBox="0 0 400 200"
          className="h-full w-full"
          fill="none"
        >
          <path
            d="M-20 170C70 50 130 50 215 115C275 160 330 155 420 55"
            stroke="#B8A58D"
            strokeWidth="1"
          />

          <path
            d="M-20 185C70 65 130 65 215 130C275 175 330 170 420 70"
            stroke="#B8A58D"
            strokeWidth="1"
          />

          <path
            d="M-20 200C70 80 130 80 215 145C275 190 330 185 420 85"
            stroke="#B8A58D"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* =========================================================
          BOTTOM RIGHT WAVES - Hidden on mobile
      ========================================================= */}

      <div className="pointer-events-none absolute bottom-0 right-0 hidden h-[180px] w-[300px] rotate-180 opacity-25 md:block">
        <svg
          viewBox="0 0 400 200"
          className="h-full w-full"
          fill="none"
        >
          <path
            d="M-20 170C70 50 130 50 215 115C275 160 330 155 420 55"
            stroke="#B8A58D"
            strokeWidth="1"
          />

          <path
            d="M-20 185C70 65 130 65 215 130C275 175 330 170 420 70"
            stroke="#B8A58D"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-6xl px-3 sm:px-6 lg:px-8">

        {/* =======================================================
            SECTION HEADER - Mobile optimized
        ======================================================= */}

        <div
          className={`
            mb-3
            sm:mb-6
            text-center
            transition-all
            duration-700
            ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-5 opacity-0'
            }
          `}
        >
          <div className="flex items-center justify-center gap-1.5 sm:gap-2">

            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#A99479]" />

            <h2
              className="
                text-[9px]
                sm:text-[11px]
                font-bold
                uppercase
                tracking-[2px]
                sm:tracking-[3.5px]
                text-[#3F382F]
              "
            >
              OUR BUSINESSES
            </h2>

            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#A99479]" />
          </div>

          {/* Small divider */}
          <div className="mx-auto mt-1.5 sm:mt-2.5 h-1 w-10 sm:w-12 rounded-full bg-gradient-to-r from-[#B8A58D] to-[#927E64]" />

          <p
            className="
              mx-auto
              mt-1.5
              sm:mt-2.5
              max-w-[560px]
              text-[10px]
              sm:text-xs
              leading-4
              sm:leading-5
              text-[#3F382F]
            "
          >
            Delivering quality, innovation, and trust through
            our diverse range of services.
          </p>
        </div>

        {/* =======================================================
            BUSINESS CARDS - Smaller on mobile, same text size
        ======================================================= */}

        <div className="grid gap-3 sm:gap-5 md:grid-cols-2">

          {businesses.map((business, index) => {
            const BadgeIcon = business.badgeIcon;

            return (
              <Link
                key={business.title}
                href={business.link}
                className={`
                  group
                  relative
                  min-h-[245px]
                  sm:min-h-[350px]
                  lg:min-h-[370px]
                  overflow-hidden
                  rounded-[12px]
                  sm:rounded-[24px]
                  border
                  border-[#DCCBB5]/70
                  bg-white/75
                  px-2.5
                  sm:px-4
                  py-2
                  sm:py-4
                  shadow-[0_15px_45px_rgba(63,56,47,0.08)]
                  backdrop-blur-xl
                  transition-all
                  duration-700
                  hover:-translate-y-1.5
                  hover:border-[#B8A58D]
                  hover:bg-white/90
                  hover:shadow-[0_20px_55px_rgba(63,56,47,0.13)]
                  ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-8 opacity-0'
                  }
                `}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >

                {/* =================================================
                    TOP RIGHT ACCENT - Smaller on mobile
                ================================================= */}

                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-10
                    sm:h-24
                    w-10
                    sm:w-24
                    rounded-bl-[30px]
                    sm:rounded-bl-[80px]
                    bg-gradient-to-bl
                    from-[#B8A58D]/30
                    via-[#DCCBB5]/15
                    to-transparent
                    transition-all
                    duration-500
                    group-hover:h-14
                    sm:group-hover:h-28
                    group-hover:w-14
                    sm:group-hover:w-28
                  "
                />

                {/* =================================================
                    TOP LEFT DOTS - Hidden on mobile
                ================================================= */}

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    hidden
                    h-12
                    w-16
                    opacity-35
                    sm:block
                  "
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, rgba(169,148,121,0.55) 1.3px, transparent 1.3px)',
                    backgroundSize: '10px 10px',
                  }}
                />

                {/* =================================================
                    LOGO - Smaller on mobile
                ================================================= */}

                <div className="relative z-10 flex justify-center">

                  <div
                    className="
                      relative
                      flex
                      h-14
                      sm:h-22
                      w-12
                      sm:w-22
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#DCCBB5]/70
                      bg-gradient-to-br
                      from-white
                      via-[#F8F6F1]
                      to-[#EDE4D5]/70
                      shadow-[0_10px_30px_rgba(63,56,47,0.08)]
                      transition-all
                      duration-500
                      group-hover:scale-105
                      group-hover:border-[#B8A58D]
                    "
                  >

                    {/* Glow */}
                    <div
                      className="
                        absolute
                        -inset-2
                        -z-10
                        rounded-full
                        bg-[#DCCBB5]/20
                        blur-xl
                        transition-all
                        duration-500
                        group-hover:bg-[#DCCBB5]/35
                      "
                    />

                    <img
                      src={
                        business.type === 'construction'
                          ? mediaUrl("images/logo main.png")
                          : mediaUrl("images/logo.webp")
                      }
                      alt={business.title}
                      className="
                        h-8
                        sm:h-14
                        w-auto
                        object-contain
                        drop-shadow-[0_5px_12px_rgba(63,56,47,0.10)]
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />

                  </div>
                </div>

                {/* =================================================
                    BADGE - Same text size, smaller padding on mobile
                ================================================= */}

                <div className="relative z-10 mt-1.5 sm:mt-3 flex justify-center">

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-0.5
                      sm:gap-1.5
                      rounded-full
                      border
                      border-[#DCCBB5]/70
                      bg-[#EDE4D5]/70
                      px-1.5
                      sm:px-3
                      py-0.5
                      sm:py-1
                      text-[7px]
                      sm:text-[9px]
                      font-bold
                      uppercase
                      tracking-[1px]
                      sm:tracking-[1.5px]
                      text-[#3F382F]
                    "
                  >
                    <BadgeIcon size={8} className="sm:w-3 sm:h-3" />
                    {business.badge}
                  </div>

                </div>

                {/* =================================================
                    TITLE - Same text size
                ================================================= */}

                <div className="relative z-10 mt-1 sm:mt-2.5 text-center">

                  <h3
                    className="
                      text-base
                      sm:text-lg
                      font-extrabold
                      tracking-tight
                      text-[#3F382F]
                      leading-tight
                    "
                  >
                    {business.title}
                  </h3>

                  {business.subtitle && (
                    <p
                      className="
                        mt-0.5
                        text-[7px]
                        sm:text-[9px]
                        font-semibold
                        uppercase
                        tracking-[1.5px]
                        sm:tracking-[2.5px]
                        text-[#A99479]
                      "
                    >
                      {business.subtitle}
                    </p>
                  )}

                  <div className="mx-auto mt-1.5 sm:mt-2.5 h-0.5 w-6 sm:w-10 rounded-full bg-[#B8A58D]" />

                </div>

                {/* =================================================
                    DESCRIPTION - Same text size, shorter on mobile
                ================================================= */}

                <p
                  className="
                    relative
                    z-10
                    mx-auto
                    mt-1
                    sm:mt-2
                    max-w-[450px]
                    text-center
                    text-[10px]
                    sm:text-xs
                    leading-4
                    sm:leading-5
                    text-[#3F382F]
                    line-clamp-2
                    sm:line-clamp-none
                  "
                >
                  {business.description}
                </p>

                {/* =================================================
                    FEATURE CHIPS - Smaller on mobile, same text size
                ================================================= */}

                <div
                  className="
                    relative
                    z-10
                    mt-2
                    sm:mt-3
                    flex
                    flex-wrap
                    justify-center
                    gap-0.5
                    sm:gap-1.5
                  "
                >
                  {business.features.map((feature) => {
                    const FeatureIcon = feature.icon;

                    return (
                      <span
                        key={feature.name}
                        className="
                          inline-flex
                          items-center
                          gap-0.5
                          sm:gap-1
                          rounded-full
                          border
                          border-[#DCCBB5]/70
                          bg-white/80
                          px-1.5
                          sm:px-2.5
                          py-0.5
                          sm:py-1.5
                          text-[7px]
                          sm:text-[9px]
                          font-medium
                          text-[#3F382F]
                          shadow-sm
                          transition-all
                          duration-300
                          group-hover:border-[#B8A58D]
                          group-hover:bg-[#F8F6F1]
                        "
                      >
                        <FeatureIcon
                          size={8}
                          className="sm:w-[11px] sm:h-[11px]"
                        />
                        {feature.name}
                      </span>
                    );
                  })}
                </div>

                {/* =================================================
                    CTA - Smaller on mobile, same text size
                ================================================= */}

                <div className="relative z-10 mt-1.5 sm:mt-3.5 flex justify-center">

                  <span
                    className="
                      inline-flex
                      items-center
                      gap-1
                      sm:gap-2
                      rounded-lg
                      bg-gradient-to-r
                      from-[#A99479]
                      to-[#927E64]
                      px-2.5
                      sm:px-5
                      py-1.5
                      sm:py-2.5
                      text-[9px]
                      sm:text-xs
                      font-semibold
                      text-white
                      shadow-[0_8px_22px_rgba(169,148,121,0.20)]
                      transition-all
                      duration-500
                      group-hover:gap-1.5
                      sm:group-hover:gap-3
                      group-hover:shadow-[0_12px_30px_rgba(169,148,121,0.30)]
                    "
                  >
                    {business.type === 'construction'
                      ? 'Explore Construction'
                      : 'Explore Greenland'}

                    <ArrowRight
                      size={11}
                      className="sm:w-[14px] sm:h-[14px] transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>

                </div>

                {/* =================================================
                    BOTTOM DECORATIVE GRAPHIC - Hidden on mobile
                ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    h-16
                    sm:h-24
                    w-20
                    sm:w-32
                    opacity-15
                    sm:opacity-20
                    transition-all
                    duration-500
                    group-hover:opacity-25
                    sm:group-hover:opacity-35
                    hidden
                    sm:block
                  "
                >
                  {business.type === 'construction' ? (
                    <svg
                      viewBox="0 0 160 120"
                      className="h-full w-full"
                      fill="none"
                    >
                      <path
                        d="M15 110V60L55 25L95 60V110"
                        stroke="#A99479"
                        strokeWidth="1"
                      />

                      <path
                        d="M35 110V72L55 55L75 72V110"
                        stroke="#A99479"
                        strokeWidth="1"
                      />

                      <path
                        d="M15 60L55 90L95 60"
                        stroke="#A99479"
                        strokeWidth="1"
                      />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 160 120"
                      className="h-full w-full"
                      fill="none"
                    >
                      <path
                        d="M10 100C40 30 70 30 105 75C125 100 140 95 155 45"
                        stroke="#A99479"
                        strokeWidth="1.2"
                      />

                      <path
                        d="M10 112C40 42 70 42 105 87C125 112 140 107 155 57"
                        stroke="#A99479"
                        strokeWidth="1"
                      />

                      <path
                        d="M45 90V48"
                        stroke="#A99479"
                        strokeWidth="1"
                      />

                      <path
                        d="M110 92V60"
                        stroke="#A99479"
                        strokeWidth="1"
                      />
                    </svg>
                  )}
                </div>

                {/* Bottom right glow - Hidden on mobile */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    right-0
                    h-16
                    sm:h-24
                    w-20
                    sm:w-28
                    rounded-tl-full
                    bg-[#DCCBB5]/15
                    blur-xl
                    transition-all
                    duration-500
                    group-hover:bg-[#DCCBB5]/25
                    hidden
                    sm:block
                  "
                />

              </Link>
            );
          })}

        </div>
      </div>

      {/* =========================================================
          BOTTOM SPACING
      ========================================================= */}

      <div className="h-1 sm:h-2" />
    </section>
  );
}