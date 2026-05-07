"use client";
import { useEffect } from "react";
import "../public/main.scss";
import "../public/css/odometer-custom.css"; // Custom odometer theme without legacy CSS hacks
import "photoswipe/style.css";
import "rc-slider/assets/index.css";
import { usePathname } from "next/navigation";
import BackToTop from "@/components/common/BackToTop";
import MobileMenu from "@/components/headers/MobileMenu";
import SettingsHandler from "@/components/common/SettingsHandler";
import Login from "@/components/modals/Login";
import Register from "@/components/modals/Register";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  if (typeof window !== "undefined") {
    import("bootstrap/dist/js/bootstrap.esm").then((module) => {
      // Module is imported, you can access any exported functionality if
    });
  }
  useEffect(() => {
    // Close any open modal
    const bootstrap = require("bootstrap"); // dynamically import bootstrap
    const modalElements = document.querySelectorAll(".modal.show");
    modalElements.forEach((modal) => {
      const modalInstance = bootstrap.Modal.getInstance(modal);
      if (modalInstance) {
        modalInstance.hide();
      }
    });

    // Close any open offcanvas
    const offcanvasElements = document.querySelectorAll(".offcanvas.show");
    offcanvasElements.forEach((offcanvas) => {
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    });
  }, [pathname]); // Runs every time the route changes

  useEffect(() => {
    const WOW = require("@/utlis/wow");
    const wow = new WOW.default({
      animateClass: "animated",
      offset: 100,
      mobile: true,
      live: false,
    });
    wow.init();
  }, [pathname]);
  useEffect(() => {
    const handleSticky = () => {
      const navbar = document.querySelector(".header");
      if (navbar) {
        if (window.scrollY > 120) {
          navbar.classList.add("fixed");
          navbar.classList.add("header-sticky");
        } else {
          navbar.classList.remove("fixed");
          navbar.classList.remove("header-sticky");
        }
        if (window.scrollY > 300) {
          navbar.classList.add("is-sticky");
        } else {
          navbar.classList.remove("is-sticky");
        }
      }
    };

    window.addEventListener("scroll", handleSticky);
  }, []);
  return (
    <html lang="en">
      <head>
        <title>Redevelopment Company in Mumbai | EBA Development Management</title>
        <meta name="description" content="Leading redevelopment company in Mumbai offering self-redevelopment consultant services, society redevelopment experts, and redevelopment PMC Mumbai. 20+ years experience in housing society redevelopment." />
        <meta name="keywords" content="redevelopment company in Mumbai, self-redevelopment consultant Mumbai, redevelopment management company, society redevelopment experts, redevelopment PMC Mumbai, housing society redevelopment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.yourwebsite.com" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Redevelopment Company in Mumbai | EBA Development Management" />
        <meta property="og:description" content="Expert self-redevelopment consultant and society redevelopment experts in Mumbai. Trusted redevelopment PMC with 20+ years of experience." />
        <meta property="og:locale" content="en_IN" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "EBA Development Management",
              "description": "Leading redevelopment company in Mumbai specializing in self-redevelopment consultant services, society redevelopment, and housing society redevelopment management.",
              "url": "https://www.yourwebsite.com",
              "logo": "https://www.yourwebsite.com/images/logo/logo-3@2x.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "areaServed": {
                "@type": "City",
                "name": "Mumbai"
              },
              "serviceType": [
                "Redevelopment Company",
                "Self-Redevelopment Consultant",
                "Redevelopment Management Company",
                "Society Redevelopment Experts",
                "Redevelopment PMC",
                "Housing Society Redevelopment"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "EBA Development Management",
              "image": "https://www.yourwebsite.com/images/logo/logo-3@2x.png",
              "description": "Premier redevelopment company in Mumbai offering comprehensive self-redevelopment consultant services and housing society redevelopment solutions.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "19.0760",
                "longitude": "72.8777"
              },
              "priceRange": "$$",
              "telephone": "+91-XXXXXXXXXX"
            })
          }}
        />
      </head>
      <body className="popup-loader">
        {children}
        <MobileMenu />
        <BackToTop />
        <SettingsHandler />
        <Login />
        <Register />
      </body>
    </html>
  );
}
