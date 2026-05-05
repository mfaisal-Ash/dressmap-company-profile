import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";

export const metadata = {
  title: "DressMap Company Profile",
  description: "Mini company profile startup DressMap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
      <link
      href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
      rel="stylesheet"
      />
      </head>
      <body>
        <header className="header">
          <div className="container header-inner">
            <Link href="/" className="logo">
              Dress<span>Map</span>
            </Link>

            <Navbar />
          </div>
        </header>

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}