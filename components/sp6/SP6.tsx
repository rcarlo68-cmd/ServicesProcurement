"use client";

import SP6Content from "./SP6Content";
import SP6Illustration from "./SP6Illustration";

export default function SP6() {
  return (
    <section
      id="modelo-sp6"
      className="relative isolate min-h-screen overflow-hidden bg-[#061523]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <SP6Illustration />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              90deg,
              rgba(5,7,11,.92) 0%,
              rgba(5,7,11,.80) 32%,
              rgba(5,7,11,.30) 58%,
              rgba(5,7,11,.10) 78%,
              transparent 100%
            )
          `,
        }}
      />

      {/* Warm Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(212,175,55,.08),transparent_42%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 lg:px-10 xl:px-12">
        <div className="max-w-2xl pt-24">
          <SP6Content />
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#05070B] via-[#05070B]/60 to-transparent" />
    </section>
  );
}