import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "SeniorSage - Your Virtual Senior",
  description: "The virtual senior needed for success!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="a3Z5a5NXrTu4NLRHPkvwLmINYvIyGMzbtP6TgJdq4Oo" />
      <body
        className={`antialiased max-w-full`}
      >
        <Navbar />
        <main className="min-h-screen max-w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
