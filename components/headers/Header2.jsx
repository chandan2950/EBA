"use client";
import React from "react";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";

export default function Header2() {
  return (
    <header id="header-main" className="header style-2">
      <div className="header-inner">
        <div className="tf-container lg">
          <div className="row">
            <div className="col-12">
              <div className="header-inner-wrap">
                <div className="header-logo">
                  <Link href="/" className="site-logo">
                    <Image
                      className="img-default"
                      alt="eba-real estate"
                      width={272}
                      height={84}
                      src="/images/brands/EBA tm logo.png"
                    />
                  </Link>
                </div>
                <nav className="main-menu">
                  <ul className="navigation">
                    <Nav />
                  </ul>
                </nav>
                <div className="header-right">
                  <div className="download-brochure">
                    <button
                      className="tf-btn download-btn"
                      onClick={() => {
                        try {
                          // Use the correct filename with trailing space
                          const fileName = "/images/home/EBA BROCHURE .pdf";
                          
                          // Simple and reliable download method
                          const link = document.createElement("a");
                          link.href = fileName;
                          link.download = "EBA-Real-Estate-Brochure.pdf";
                          link.target = "_blank";
                          
                          // Add to DOM, click, and remove
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                          
                          console.log("Download initiated for:", fileName);
                        } catch (error) {
                          console.error("Download failed:", error);
                          // Fallback: open in new tab
                          window.open("/images/home/EBA BROCHURE .pdf", "_blank");
                        }
                      }}
                    >
                      <svg
                        className="download-icon"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 13.125L6.25 9.375L7.1875 8.4375L9.375 10.625V2.5H10.625V10.625L12.8125 8.4375L13.75 9.375L10 13.125ZM4.375 17.5C3.9375 17.5 3.5625 17.3438 3.25 17.0313C2.9375 16.7188 2.78125 16.3438 2.78125 15.9063V12.8125H4.03125V15.9063C4.03125 15.9688 4.05208 16.0208 4.09375 16.0625C4.13542 16.1042 4.1875 16.125 4.25 16.125H15.75C15.8125 16.125 15.8646 16.1042 15.9063 16.0625C15.9479 16.0208 15.9688 15.9688 15.9688 15.9063V12.8125H17.2188V15.9063C17.2188 16.3438 17.0625 16.7188 16.75 17.0313C16.4375 17.3438 16.0625 17.5 15.625 17.5H4.375Z"
                          fill="white"
                        />
                      </svg>
                      <span className="btn-text-full">Download Brochure</span>
                      <span className="btn-text-short">Download</span>
                    </button>
                    
                    <style jsx>{`
                      .download-btn {
                        background-color: #FF6B35 !important;
                        color: white !important;
                        border: none !important;
                        border-radius: 5px !important;
                        padding: 12px 20px !important;
                        font-size: 14px !important;
                        white-space: nowrap !important;
                        display: flex !important;
                        align-items: center !important;
                        transition: all 0.3s ease !important;
                      }
                      
                      .download-icon {
                        width: 20px;
                        height: 20px;
                        margin-right: 8px;
                      }
                      
                      .btn-text-short {
                        display: none;
                      }
                      
                      .btn-text-full {
                        display: inline;
                      }
                      
                      @media (max-width: 768px) {
                        .download-btn {
                          padding: 8px 12px !important;
                          font-size: 12px !important;
                        }
                        
                        .download-icon {
                          width: 16px;
                          height: 16px;
                          margin-right: 4px;
                        }
                      }
                      
                      @media (max-width: 480px) {
                        .download-btn {
                          padding: 6px 10px !important;
                          font-size: 11px !important;
                        }
                        
                        .btn-text-full {
                          display: none;
                        }
                        
                        .btn-text-short {
                          display: inline;
                        }
                        
                        .download-icon {
                          width: 14px;
                          height: 14px;
                          margin-right: 3px;
                        }
                      }
                    `}</style>
                  </div>
                  <div className="btn-add">
                    <button
                      className="tf-btn pd-23"
                      onClick={() => {
                        const element = document.getElementById('contact');
                        if (element) {
                          const headerHeight = 80;
                          const elementPosition = element.offsetTop - headerHeight;
                          
                          window.scrollTo({
                            top: elementPosition,
                            behavior: 'smooth'
                          });
                        }
                      }}
                      style={{
                        backgroundColor: "#2C5F41",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Book Consultancy
                    </button>
                  </div>
                  <div
                    className="mobile-button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#menu-mobile"
                    aria-controls="menu-mobile"
                  >
                    <i className="icon-menu" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}