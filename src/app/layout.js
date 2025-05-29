import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/Header";
import FooterSec from "@/components/FooterSec/FooterSec";
import Image from "next/image";
import { ARROWDOWN } from "@/values/Constants/ImageConstants";
import Head from "next/head";
import Script from "next/script";

const Fellix = localFont({
  src: "./fonts/Fellix-Black.ttf",
  variable: "--font-Fellix-sans",
  src: [
    {
      path: "./fonts/Fellix-Thin.ttf",
      weight: "200",
    },
    {
      path: "./fonts/Fellix-Light.ttf",
      weight: "300",
    },
    {
      path: "./fonts/Fellix-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/Fellix-Medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/Fellix-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./fonts/Fellix-Bold.ttf",
      weight: "700",
    },
    {
      path: "./fonts/Fellix-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "./fonts/Fellix-Black.ttf",
      weight: "900",
    },
  ],
});

export const metadata = {
  title: "SitePace.ai - Connected Construction",
  description: "Autopilot your project. See More. Save More",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/favicon-light.png",
        href: "/images/favicon-light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon-dark.png",
        href: "/images/favicon-dark.png",
      },
    ],
  },
  openGraph: {
    images: process.env.BASE_URL + "/images/og-image.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Fellix.variable}`}>
        <Header />
        {children}
        <FooterSec />
        <Image
          src={ARROWDOWN}
          alt="up"
          className="up"
          width={32}
          height={32}
          style={{
            position: "fixed",
            bottom: "5%",
            left: "50%",
            transform: "translate(-50%, 0%)",
            backgroundColor: "transparent",
          }}
        />

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-Y1V7H0SSWP" async strategy="beforeInteractive" />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y1V7H0SSWP');
          `}
        </Script>
      </body>
    </html>
  );
}
