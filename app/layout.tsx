import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.servicesprocurementpe.com"),

  title: {
    default: "Services Procurement | Supply Chain, Procurement y Logística",
    template: "%s | Services Procurement",
  },

  description:
    "Consultoría especializada en procurement, logística y cadena de suministro. Transformamos conocimiento operativo en mejores decisiones y ventaja competitiva.",

  applicationName: "Services Procurement",

  keywords: [
    "Supply Chain",
    "Procurement",
    "Logística",
    "Cadena de suministro",
    "Consultoría logística",
    "Consultoría Supply Chain",
    "Auditoría Logística",
    "Almacenes",
    "Inventarios",
    "Desarrollo del talento",
    "Coaching Logístico",
    "SP6",
  ],

  authors: [
    {
      name: "Services Procurement",
    },
  ],

  creator: "Services Procurement",
  publisher: "Services Procurement",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "/",
    siteName: "Services Procurement",
    title: "Services Procurement | Supply Chain, Procurement y Logística",
    description:
      "Consultoría especializada en procurement, logística y cadena de suministro. Transformamos conocimiento operativo en mejores decisiones y ventaja competitiva.",
    images: [
      {
        url: "/images/hero/hero-operacion-minera.png",
        alt: "Services Procurement - Supply Chain, Procurement y Logística",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Services Procurement | Supply Chain, Procurement y Logística",
    description:
      "Consultoría especializada en procurement, logística y cadena de suministro.",
    images: ["/images/hero/hero-operacion-minera.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" translate="no" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}