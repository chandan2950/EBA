"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Adjust based on your header height
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'team', 'services', 'process', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Only show section navigation on home page
  if (pathname !== '/') {
    return (
      <>
        <li className={pathname === "/" ? "current-menu" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname.includes("/about") ? "current-menu" : ""}>
          <Link href="/about">About Us</Link>
        </li>
        <li className={pathname.includes("/services") ? "current-menu" : ""}>
          <Link href="/services">Services</Link>
        </li>
        <li className={pathname.includes("/projects") ? "current-menu" : ""}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={pathname === "/contact" ? "current-menu" : ""}>
          <Link href="/contact">Contact Us</Link>
        </li>
      </>
    );
  }
  
  return (
    <>
      <li className={activeSection === 'home' ? "current-menu" : ""}>
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          style={{ cursor: 'pointer' }}
        >
          Home
        </a>
      </li>
      <li className={activeSection === 'about' ? "current-menu" : ""}>
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}
          style={{ cursor: 'pointer' }}
        >
          About Us
        </a>
      </li>
      <li className={activeSection === 'team' ? "current-menu" : ""}>
        <a 
          href="#team" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('team');
          }}
          style={{ cursor: 'pointer' }}
        >
          Our Team
        </a>
      </li>
      <li className={activeSection === 'services' ? "current-menu" : ""}>
        <a 
          href="#services" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('services');
          }}
          style={{ cursor: 'pointer' }}
        >
          Services
        </a>
      </li>
      <li className={activeSection === 'process' ? "current-menu" : ""}>
        <a 
          href="#process" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('process');
          }}
          style={{ cursor: 'pointer' }}
        >
          Process
        </a>
      </li>
      <li className={activeSection === 'projects' ? "current-menu" : ""}>
        <a 
          href="#projects" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('projects');
          }}
          style={{ cursor: 'pointer' }}
        >
          Projects
        </a>
      </li>
      <li className={activeSection === 'contact' ? "current-menu" : ""}>
        <a 
          href="#contact" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}
          style={{ cursor: 'pointer' }}
        >
          Contact Us
        </a>
      </li>
    </>
  );
}
