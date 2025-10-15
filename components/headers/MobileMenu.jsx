"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function MobileMenu() {
  const pathname = usePathname();
  return (
    <div
      className="offcanvas offcanvas-start mobile-nav-wrap"
      tabIndex={-1}
      id="menu-mobile"
      aria-labelledby="menu-mobile"
    >
      <div className="offcanvas-header top-nav-mobile">
        <div className="offcanvas-title">
          <Link href={`/`}>
            <Image
              alt=""
              src="/images/brands/EBA tm logo.png"
              width={272}
              height={84}
            />
          </Link>
        </div>
        <div data-bs-dismiss="offcanvas" aria-label="Close">
          <i className="icon-close" />
        </div>
      </div>
      <div className="offcanvas-body inner-mobile-nav">
        <div className="mb-body">
          <ul id="menu-mobile-menu">
            <li
              className={`menu-item ${
                pathname === "/" ? "current-menu-item" : ""
              }`}
            >
              <Link href="/" className="item-menu-mobile">
                Home
              </Link>
            </li>
            <li
              className={`menu-item ${
                pathname.includes("/listing") ? "current-menu-item" : ""
              }`}
            >
              <Link href="/listing" className="item-menu-mobile">
                About Us
              </Link>
            </li>
            <li
              className={`menu-item ${
                pathname.includes("/listing") ? "current-menu-item" : ""
              }`}
            >
              <Link href="/listing" className="item-menu-mobile">
                Our Team
              </Link>
            </li>
            <li
              className={`menu-item ${
                pathname.includes("/listing") ? "current-menu-item" : ""
              }`}
            >
              <Link href="/listing" className="item-menu-mobile">
                Services
              </Link>
            </li>
            <li
              className={`menu-item ${
                pathname.includes("/pages") ? "current-menu-item" : ""
              }`}
            >
              <Link href="/pages" className="item-menu-mobile">
                Projects
              </Link>
            </li>
            <li
              className={`menu-item ${
                pathname.includes("/blog") ? "current-menu-item" : ""
              }`}
            >
              <Link href="/blog" className="item-menu-mobile">
             Process
              </Link>
            </li>
            <li
              className={`menu-item ${
                pathname === "/contact" ? "current-menu-item" : ""
              }`}
            >
              <Link href="/contact" className="item-menu-mobile">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="support">
            <a href="#" className="text-need">
              {" "}
              Need help?
            </a>
            <ul className="mb-info">
              <li>
                Call Us Now: <span className="number">+91 9236126874</span>
              </li>
              <li>
                Email Us at: <a href="#">business@dmeba.in</a>
              </li>
              <li>
                <div className="wrap-social">
                  <p>Follow us:</p>
                  <ul className="tf-social style-2">
                    <li>
                      <a href="#">
                        <i className="icon-fb" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/share/17PgSfzFfs">
                        <i className="icon-X" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/ebadmedgesolutions/">
                        <i className="icon-linked" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/ebadmedgesolutions?igsh=MWVyc3dqdTRmdXJycQ==">
                        <i className="icon-ins" />
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
