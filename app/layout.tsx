import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const seoTitle = "Mis 15 Años | Azul Pistoni";
const seoDescription =
  "Acompañanos a celebrar los 15 años de Azul Pistoni y compartí tus fotos y videos de esta noche inolvidable.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seoTitle,
  description: seoDescription,
  keywords: [
    "Azul Pistoni",
    "Mis 15 Años",
    "Quinceañera",
    "15 años",
    "fotos",
    "videos"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: "/",
    siteName: "Azul Pistoni | Mis 15 Años",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mis 15 Años de Azul Pistoni - 9 de mayo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: ["/opengraph-image"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
