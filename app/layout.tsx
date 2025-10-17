import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200","300",  "400", "500", "600", "700", "800"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200","300",  "400", "500", "600", "700", "800"],
  display: "swap",
});




export const metadata: Metadata = {
  title: "ETTI — Engenharia & Projetos",
  description: "Projetos e inspeções de instalações elétricas, sistemas de segurança, automação e mais.",
  icons: {
    icon: "/assets/ettiIcon2.ico",
    shortcut: "/assets/ettiIcon2.svg",
    apple: "/assets/ettiIcon2.svg",
  },
  openGraph: {
    title: "ETTI — Engenharia & Projetos",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
         className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
