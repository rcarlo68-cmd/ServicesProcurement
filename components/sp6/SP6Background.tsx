"use client";

export default function SP6Background() {
  return (
    <>
      {/* ==========================================================
          BASE BACKGROUND
      ========================================================== */}

      <div className="absolute inset-0 -z-30 bg-[#071C2C]" />

      {/* ==========================================================
          RADIAL LIGHTS
      ========================================================== */}

      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[720px] w-[720px] rounded-full bg-cyan-500/8 blur-[160px]" />

        <div className="absolute -right-40 bottom-[-120px] h-[760px] w-[760px] rounded-full bg-amber-400/8 blur-[170px]" />

        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/5 blur-[220px]" />
      </div>

      {/* ==========================================================
          TOP VIGNETTE
      ========================================================== */}

      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.07),transparent_38%)]" />

      {/* ==========================================================
          BOTTOM VIGNETTE
      ========================================================== */}

      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_bottom_left,rgba(255,180,0,.05),transparent_42%)]" />

      {/* ==========================================================
          GLOBAL OVERLAY
      ========================================================== */}

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,.015),transparent_20%,transparent_80%,rgba(0,0,0,.22))]" />

      {/* ==========================================================
          RIGHT SHADOW
      ========================================================== */}

      <div className="absolute right-0 top-0 -z-10 h-full w-[40%] bg-gradient-to-l from-black/15 to-transparent" />

      {/* ==========================================================
          LEFT SHADOW
      ========================================================== */}

      <div className="absolute left-0 top-0 -z-10 h-full w-[28%] bg-gradient-to-r from-black/12 to-transparent" />
    </>
  );
}