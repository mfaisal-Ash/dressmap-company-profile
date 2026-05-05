"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  return (
    <nav className="nav">
      <Link className={path === "/" ? "active" : ""} href="/">Home</Link>
      <Link className={path === "/about" ? "active" : ""} href="/about">About</Link>
      <Link className={path === "/services" ? "active" : ""} href="/services">Services</Link>
      <Link className={path === "/contact" ? "active" : ""} href="/contact">Contact</Link>
    </nav>
  );
}