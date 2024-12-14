import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import Header from "@/app/sections/Header";
import Footer from "@/app/sections/Footer";
import Container from "@/app/sections/Container";

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "CRUD by Nextjs",
  description: "Im building this CRUD project to learn more and for future utilization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <Container>
          <Header />
            {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
