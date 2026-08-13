"use client";

export default function SP6Glow() {
  return (
    <>
      {/* ==========================================================
          GOLD LIGHT
      ========================================================== */}

      <div className="pointer-events-none absolute left-[8%] top-[16%] h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_35px_rgba(251,191,36,.9)]" />

      <div className="pointer-events-none absolute left-[8%] top-[16%] h-24 w-px bg-gradient-to-b from-amber-400/90 to-transparent" />

      {/* ==========================================================
          CYAN GLOW
      ========================================================== */}

      <div className="pointer-events-none absolute right-[14%] top-[22%] h-56 w-56 rounded-full bg-cyan-400/10 blur-[80px]" />

      {/* ==========================================================
          AMBER GLOW
      ========================================================== */}

      <div className="pointer-events-none absolute right-[20%] bottom-[14%] h-44 w-44 rounded-full bg-amber-400/12 blur-[90px]" />

      {/* ==========================================================
          HORIZONTAL LIGHT
      ========================================================== */}

      <div className="pointer-events-none absolute bottom-[12%] left-1/2 h-px w-[45%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      {/* ==========================================================
          DECORATIVE DOTS
      ========================================================== */}

      <div className="pointer-events-none absolute left-[12%] top-[32%] hidden lg:block">
        <div className="space-y-3 opacity-40">
          <div className="h-1 w-1 rounded-full bg-white" />
          <div className="h-1 w-1 rounded-full bg-white" />
          <div className="h-1 w-1 rounded-full bg-white" />
          <div className="h-1 w-1 rounded-full bg-white" />
        </div>
      </div>

      <div className="pointer-events-none absolute right-[10%] top-[18%] hidden lg:block">
        <div className="space-y-3 opacity-25">
          <div className="h-1 w-1 rounded-full bg-white" />
          <div className="h-1 w-1 rounded-full bg-white" />
          <div className="h-1 w-1 rounded-full bg-white" />
        </div>
      </div>

      {/* ==========================================================
          LEFT VERTICAL LINE
      ========================================================== */}

      <div className="pointer-events-none absolute left-[7%] top-1/2 hidden h-40 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />

      {/* ==========================================================
          RIGHT VERTICAL LINE
      ========================================================== */}

      <div className="pointer-events-none absolute right-[7%] top-1/2 hidden h-40 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />
    </>
  );
}