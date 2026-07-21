import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.servicesprocurementpe.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Services Procurement | Consultoría en Supply Chain, Procurement y Logística",
    template: "%s | Services Procurement",
  },

  description:
    "Consultoría especializada en Supply Chain, Procurement, Logística, Inventarios y Transformación Operacional. Más de 30 años de experiencia en minería e industria.",

  keywords: [
    "Services Procurement",
    "Supply Chain",
    "Procurement",
    "Logística",
    "Cadena de Suministro",
    "Consultoría",
    "Inventarios",
    "Almacenes",
    "Strategic Sourcing",
    "Auditoría Logística",
    "Minería",
    "Operational Excellence",
    "Supply Chain Consulting",
    "Perú",
  ],

  authors: [
    {
      name: "Ricardo Cabrera",
    },
  ],

  creator: "Ricardo Cabrera",

  publisher: "Services Procurement",

  category: "Business",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "es_PE",
    url: siteUrl,
    siteName: "Services Procurement",

    title:
      "Services Procurement | Consultoría en Supply Chain, Procurement y Logística",

    description:
      "Transformamos experiencia operativa en mejores decisiones para la cadena de suministro.",

    images: [
      {
        url: "/images/og/services-procurement-og.png",
        width: 1200,
        height: 630,
        alt: "Services Procurement",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Services Procurement | Consultoría en Supply Chain, Procurement y Logística",

    description:
      "Transformamos experiencia operativa en mejores decisiones para la cadena de suministro.",

    images: ["/images/og/services-procurement-og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      translate="no"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        translate="no"
        className="min-h-full flex flex-col"
      >
        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}