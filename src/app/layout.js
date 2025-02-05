import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/Header";
import FooterSec from "@/components/FooterSec/FooterSec";

const Fellix = localFont({
  src: "./fonts/Fellix-Black.ttf",
  variable: "--font-Fellix-sans",
  src: [
    {
      path: './fonts/Fellix-Thin.ttf',
      weight: '200',
    },
    {
      path: './fonts/Fellix-Light.ttf',
      weight: '300',
    },
    {
      path: './fonts/Fellix-Regular.ttf',
      weight: '400',
    },
    {
      path: './fonts/Fellix-Medium.ttf',
      weight: '500',
    },
    {
      path: './fonts/Fellix-SemiBold.ttf',
      weight: '600',
    },
    {
      path: './fonts/Fellix-Bold.ttf',
      weight: '700',
    },
    {
      path: './fonts/Fellix-ExtraBold.ttf',
      weight: '800',
    },
    {
      path: './fonts/Fellix-Black.ttf',
      weight: '900',
    },
  ],
});

export const metadata = {
  title: "SitePace.ai - Connected Construction",
  description: "Autopilot your project. See More. Save More",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/favicon-light.png',
        href: '/images/favicon-light.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/favicon-dark.png',
        href: '/images/favicon-dark.png',
      },
    ],
  },
  openGraph: {
    images: process.env.BASE_URL + '/images/og-image.jpeg',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Fellix.variable}`}
      >
        <Header />
        {children}
        <FooterSec />
      </body>
    </html>
  );
}