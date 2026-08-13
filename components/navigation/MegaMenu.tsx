"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export interface MegaMenuItem {
  title: string;
  href: string;
  description?: string;
}

export interface MegaMenuProps {
  open: boolean;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  items: MegaMenuItem[];
}

export default function MegaMenu({
  open,
  title,
  description,
  actionLabel = "Explorar",
  actionHref = "#",
  items,
}: MegaMenuProps) {
  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          className="
            absolute
            left-0
            top-[20px]
            w-screen
            border-t
            border-white/10
            bg-[#05070B]/95
            backdrop-blur-2xl
            shadow-[0_30px_80px_rgba(0,0,0,.45)]
          "
        >

          <div className="mx-auto max-w-7xl px-10">

            <div className="grid grid-cols-[360px_1fr] gap-20 py-12">
                              {/* Columna izquierda */}

              <div className="flex flex-col justify-between">

                <div>

                  <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.30em] text-[#C8A95A]">
                    Services Procurement
                  </span>

                  <h3 className="text-4xl font-light leading-tight text-white">
                    {title}
                  </h3>

                  <p className="mt-6 max-w-sm text-base leading-8 text-white/65">
                    {description}
                  </p>

                </div>

                <Link
                  href={actionHref}
                  className="
                    mt-10
                    inline-flex
                    w-fit
                    items-center
                    gap-3
                    text-sm
                    font-medium
                    tracking-wide
                    text-[#C8A95A]
                    transition-all
                    duration-300
                    hover:translate-x-1
                  "
                >
                  {actionLabel}

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M5 12H19" />
                    <path d="M12 5L19 12L12 19" />
                  </svg>

                </Link>

              </div>

              {/* Columna derecha */}

              <div className="grid grid-cols-2 gap-x-14 gap-y-8">

                {items.map((item) => (

                  <Link
                    key={item.title}
                    href={item.href}
                    className="
                      group
                      rounded-2xl
                      border
                      border-white/5
                      bg-white/[0.02]
                      p-6
                      transition-all
                      duration-300
                      hover:border-[#C8A95A]/40
                      hover:bg-white/[0.04]
                    "
                  >

                    <h4 className="text-lg font-medium text-white transition-colors duration-300 group-hover:text-[#C8A95A]">
                      {item.title}
                    </h4>

                    {item.description && (

                      <p className="mt-3 text-sm leading-7 text-white/55">
                        {item.description}
                      </p>

                    )}

                  </Link>

                ))}
                              </div>

            </div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}