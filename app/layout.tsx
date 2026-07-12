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

export const metadata: Metadata = {
  title: {
    default: "Services Procurement",
    template: "%s | Services Procurement",
  },

  description:
    "Services Procurement ayuda a organizaciones a identificar y resolver las situaciones que afectan el desempeño de su cadena de suministro.",

  keywords: [
    "Services Procurement",
    "Procurement",
    "Cadena de Suministro",
    "Supply Chain",
    "Logística",
    "Operaciones",
    "Auditoría Logística",
    "Strategic Sourcing",
    "Inventarios",
    "Minería",
  ],
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