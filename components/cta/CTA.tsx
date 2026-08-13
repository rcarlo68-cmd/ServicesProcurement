"use client";

import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative isolate h-[85vh] min-h-[720px] overflow-hidden bg-[#05070B]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta/cta-consulting-meeting.jpg"
          alt="Reunión estratégica"
          fill
          quality={100}
          className="object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#05070B]/92 via-[#05070B]/76 to-[#05070B]/35" />

      {/* Warm Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(212,175,55,.10),transparent_42%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-6 lg:px-10 xl:px-12">
        <div className="max-w-xl">

          <h2 className="text-[clamp(2.6rem,4vw,4.4rem)] font-light leading-[1.02] tracking-[-0.045em] text-white">
            Toda gran
            <br />
            <span className="font-medium text-[#D4AF37]">
              transformación
            </span>
            <br />
            comienza con
            <br />
            un primer paso.
          </h2>

          <p className="mt-8 text-[1.25rem] font-light leading-relaxed text-slate-200">
            Comencemos la conversación.
          </p>

          <div className="mt-12">
            <Link
              href="/contacto#formulario"
              className="inline-flex h-14 items-center justify-center rounded-full bg-[#D4AF37] px-10 text-[15px] font-semibold tracking-wide text-[#111111] transition-all duration-300 hover:scale-[1.02] hover:brightness-110"
            >
              DAR EL PRIMER PASO
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#05070B] via-[#05070B]/60 to-transparent" />
    </section>
  );
}