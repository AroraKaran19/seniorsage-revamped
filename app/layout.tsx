import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import AlertWrapper from "./wrappers/AlertWrapper";
import AuthWrapper from "./wrappers/AuthWrapper";
import Head from "next/head";

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
      <Head>
        <meta
          name="google-site-verification"
          content="a3Z5a5NXrTu4NLRHPkvwLmINYvIyGMzbtP6TgJdq4Oo"
        />
      </Head>
      <body className={`antialiased max-w-full`}>
        <AuthWrapper>
          <Navbar />
          <AlertWrapper>
            <main className="min-h-screen max-w-full overflow-x-hidden max-h-full">
              {children}
            </main>
          </AlertWrapper>
          <Footer />
        </AuthWrapper>
      </body>
    </html>
  );
}
