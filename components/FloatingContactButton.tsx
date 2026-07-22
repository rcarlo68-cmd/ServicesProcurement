"use client";

import Link from "next/link";

export default function FloatingContactButton() {
  return (
    <Link
      href="/contact"
      aria-label="Agenda una reunión"
      className="
        fixed
        bottom-8
        right-8
        z-[999]
        group
        focus:outline-none
        focus:ring-4
        focus:ring-cyan-300
        rounded-full
      "
    >
      <div
        className="
          flex
          h-14
          items-center
          gap-3
          rounded-full
          bg-cyan-600
          px-5
          text-white
          shadow-xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-cyan-700
          hover:shadow-2xl
          active:scale-95
        "
      >
        {/* Icono Calendario */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 shrink-0"
          aria-hidden="true"
        >
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M3 10h18" />
        </svg>

        {/* Texto (desde pantallas pequeñas en adelante) */}
        <span className="hidden whitespace-nowrap text-sm font-semibold sm:block">
          Agenda una reunión
        </span>
      </div>
    </Link>
  );
}