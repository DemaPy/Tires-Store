import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ModalProvider from "../providers/modalProvider";
import ToastProvider from "../providers/toastProvider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
