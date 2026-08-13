"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderProps = {
  variant?: "transparent" | "dark";
};

const navigation = [
  {
    label: "Inicio",
    href: "/",
  },
  {
  label: "Soluciones",
  href: "/modelo-sp6",
  },
  {
  label: "Nuestra Visión",
  href: "/nuestra-vision",
},
  {
    label: "Knowledge",
    href: "/knowledge",
  },
  {
    label: "Libro",
    href: "/book",
  },
  
  {
    label: "Contacto",
    href: "/contacto#formulario",
  },
];

export default function Header({
  variant = "transparent",
}: HeaderProps) {

  const pathname = usePathname();

  const [visible, setVisible] = useState(true);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {

    const HIDE_OFFSET = 120;

    const handleScroll = () => {

      if (mobileMenuOpen) return;

      const currentScroll = window.scrollY;

      if (currentScroll <= HIDE_OFFSET) {
        setVisible(true);
        lastScrollY.current = currentScroll;
        return;
      }

      if (currentScroll > lastScrollY.current) {
        setVisible(false);
      }

      if (currentScroll < lastScrollY.current) {
        setVisible(true);
      }

      lastScrollY.current = currentScroll;

    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [mobileMenuOpen]);

  useEffect(() => {

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };

  }, [mobileMenuOpen]);

  useEffect(() => {

    setMobileMenuOpen(false);

  }, [pathname]);

  return (

    <>

      <header
        className={[
          "fixed inset-x-0 top-0 z-70",
          "transition-transform duration-500 ease-in-out",
          visible ? "translate-y-0" : "-translate-y-full",
          variant === "transparent"
            ? "bg-[#05070b]/35 backdrop-blur-md"
            : "border-b border-white/10 bg-[#05070b]/95 backdrop-blur-xl",
        ].join(" ")}
      >
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-10 xl:px-12">

          {/* Logo */}

          <Link
            href="/"
            className="flex shrink-0 items-center"
          >
            <Image
              src="/images/logo/logo-white.png"
              alt="Services Procurement"
              width={235}
              height={66}
              priority
              className="h-10 w-auto xl:h-11"
            />
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:block">

            <ul className="flex items-center gap-10 xl:gap-12">

              {navigation.map((item) => {

                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (

                  <li
                    key={item.label}
                    className="group relative"
                  >

                    <Link
                      href={item.href}
                      className={[
                        "relative py-8 text-[15px] font-medium tracking-[0.02em] transition-all duration-300",
                        active
                          ? "text-[#C8A95A]"
                          : "text-white/85 hover:text-[#C8A95A]",
                      ].join(" ")}
                    >

                      {item.label}

                      <span
                        className={[
                          "absolute -bottom-[2px] left-0 h-[2px] bg-[#C8A95A] transition-all duration-300",
                          active ? "w-full" : "w-0 group-hover:w-full",
                        ].join(" ")}
                      />

                    </Link>

                  </li>

                );

              })}

            </ul>

          </nav>
                    {/* CTA Desktop */}

          <Link
            href="/contacto#formulario"
            className="
              group
              hidden
              h-11
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-[#C8A95A]
              px-7
              text-sm
              font-medium
              text-[#C8A95A]
              transition-all
              duration-300
              hover:bg-[#C8A95A]
              hover:text-[#05070b]
              hover:shadow-[0_0_30px_rgba(200,169,90,.25)]
              lg:inline-flex
            "
          >
            <span className="transition-transform duration-300 group-hover:-translate-y-[1px]">
              Agendar reunión
            </span>
          </Link>

          {/* Mobile Button */}

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="
            relative
  z-[80]
              inline-flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              border
              border-white/20
              text-white
              transition-all
              duration-300
              hover:border-white/50
              lg:hidden
            "
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className={`transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-90" : ""
              }`}
            >
              {mobileMenuOpen ? (
                <>
                  <path d="M6 6L18 18" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7H20" />
                  <path d="M4 12H20" />
                  <path d="M4 17H20" />
                </>
              )}
            </svg>
          </button>

        </div>

      </header>

      {/* Overlay */}

      <div
        className={[
          "fixed inset-0 z-[50] bg-black/60 backdrop-blur-sm transition-all duration-300 lg:hidden",
          mobileMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0",
        ].join(" ")}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}

      <aside
        id="mobile-menu"
        className={[
          "fixed right-0 top-0 z-[60] flex h-screen ... w-[320px] max-w-[88vw] flex-col bg-[#05070B] shadow-2xl transition-transform duration-300 lg:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >

        {/* Header */}

        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">

          <Image
            src="/images/logo/logo-white.png"
            alt="Services Procurement"
            width={170}
            height={48}
            className="h-9 w-auto"
          />

          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Cerrar menú"
            className="rounded-lg p-2 text-white hover:bg-white/10"
          >
            ✕
          </button>

        </div>

        {/* Navigation */}

        <nav className="flex-1 px-6 py-10">

          <ul className="space-y-7">

            {navigation.map((item) => {

              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.label}>

                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={[
                      "block text-lg font-medium transition-colors duration-300",
                      active
                        ? "text-[#C8A95A]"
                        : "text-white hover:text-[#C8A95A]",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>

                </li>
              );

            })}

          </ul>

        </nav>
                {/* Footer */}

        <div className="border-t border-white/10 px-6 py-8">

          <Link
            href="/contacto#formulario"
            onClick={() => setMobileMenuOpen(false)}
            className="
              flex
              h-12
              w-full
              items-center
              justify-center
              rounded-full
              bg-[#C8A95A]
              text-sm
              font-semibold
              text-[#05070B]
              transition-all
              duration-300
              hover:brightness-110
            "
          >
            Agendar reunión
          </Link>

          <p className="mt-8 text-center text-xs leading-6 text-white/40">
            © {new Date().getFullYear()} Services Procurement
            <br />
            Todos los derechos reservados.
          </p>

        </div>

      </aside>

    </>

  );

}

/*
=============================================================================

HEADER V4

✓ Página activa

✓ usePathname()

✓ Nuestra Visión

✓ Menú móvil funcional

✓ Overlay

✓ Bloqueo de scroll

✓ Cierre automático al navegar

✓ Preparado para producción

=============================================================================
*/