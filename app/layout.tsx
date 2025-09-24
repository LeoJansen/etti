import type { Metadata } from "next";
import { Open_Sans, Poppins, Encode_Sans_SC, Oxanium, Michroma } from "next/font/google";
import "./globals.css";


const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const encodeSans = Encode_Sans_SC({
  variable: "--font-encode-sans-sc",
  subsets: ["latin"],
  weight: ["100", "200","300", "400", "500", "600", "700"],
  display: "swap",
});

const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: [ "400"],
  display: "swap",
}); 



export const metadata: Metadata = {
  title: "ETTI — Engenharia & Tecnologia",
  description: "Projetos, automação, segurança e documentação técnica com excelência.",
  icons: {
    icon: "/assets/ettiIcon2.ico",
    shortcut: "/assets/ettiIcon2.svg",
    apple: "/assets/ettiIcon2.svg",
  },
  openGraph: {
    title: "ETTI — Engenharia & Tecnologia",
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
         className={`${openSans.variable} ${poppins.variable} ${encodeSans.variable} ${michroma.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
