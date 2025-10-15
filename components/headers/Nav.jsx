"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav() {
  const pathname = usePathname();
  
  return (
    <>
      <li className={pathname === "/" ? "current-menu" : ""}>
        <Link href="/">Home</Link>
      </li>
      <li className={pathname.includes("/listing") ? "current-menu" : ""}>
        <Link href="/listing">About Us</Link>
      </li>
      <li className={pathname.includes("/listing") ? "current-menu" : ""}>
        <Link href="/listing">Our Team</Link>
      </li>
      <li className={pathname.includes("/pages") ? "current-menu" : ""}>
        <Link href="/pages">Services</Link>
      </li>
      <li className={pathname.includes("/blog") ? "current-menu" : ""}>
        <Link href="/blog">Projects</Link>
      </li>
      <li className={pathname.includes("/blog") ? "current-menu" : ""}>
        <Link href="/blog">Process</Link>
      </li>
      <li className={pathname === "/contact" ? "current-menu" : ""}>
        <Link href="/contact">Contact Us</Link>
      </li>
    </>
  );
}
