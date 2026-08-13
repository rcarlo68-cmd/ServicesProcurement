import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://servicesprocurementpe.com"),
  title: {
    default: "Services Procurement",
    template: "%s | Services Procurement",
  },
  description:
    "Consultoría estratégica para fortalecer la cadena de suministro mediante metodologías, inteligencia operativa y desarrollo del talento.",
  applicationName: "Services Procurement",
  keywords: [
    "Supply Chain",
    "Procurement",
    "Logística",
    "Consultoría",
    "Auditoría Logística",
    "Almacenes",
    "Inventarios",
    "Coaching",
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
    title: "Services Procurement",
    description:
      "Consultoría estratégica para transformar la cadena de suministro en una ventaja competitiva sostenible.",
    siteName: "Services Procurement",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services Procurement",
    description:
      "Consultoría estratégica para transformar la cadena de suministro.",
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