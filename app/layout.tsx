import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SoftBackdrop from "@/components/SoftBackdrop";
import LenisScroll from "@/components/lenis";
import { Metadata } from "next";
import Analytics from "@/components/Analytics";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "APE | Asociación Peruana de Emprendedores y Empresarios",
    template: "%s | APE Perú",
  },
  description:
    "Comunidad empresarial organizada en Lima y todo el Perú que impulsa la formalización, capacitación, networking comercial y representación gremial de emprendedores y empresas.",
  keywords: [
    "APE",
    "Asociación Peruana de Emprendedores y Empresarios",
    "emprendedores Perú",
    "formalización empresarial Lima",
    "red de networking Comas",
    "ruedas de negocios Perú",
    "gremio empresarial Perú",
    "capacitación empresarial",
  ],
  authors: [
    { name: "Asociación Peruana de Emprendedores y Empresarios (APE)" },
  ],
  creator: "APE Perú",
  publisher: "Asociación Peruana de Emprendedores y Empresarios",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/ico.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: "APE - Asociación Peruana de Emprendedores y Empresarios",
    title: "APE | Unidos somos más fuertes",
    description:
      "Impulsamos, representamos y conectamos a emprendedores y empresas formales a través de 14 zonales y una red activa de negocios.",
    images: [
      {
        url: "/ape_fanpage.png", // <--- El nombre de tu imagen en la carpeta public
        width: 1200,
        height: 630,
        alt: "APE - Asociación Peruana de Emprendedores y Empresarios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "APE | Asociación Peruana de Emprendedores y Empresarios",
    description:
      "Únete a nuestra red de más de 1,120 empresas formales. Colaboración, capacitación y oportunidades comerciales.",
    images: ["/ape_fanpage.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={outfit.variable}>
      <body>
        <SoftBackdrop />
        <LenisScroll />
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
