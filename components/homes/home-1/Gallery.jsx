"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import "./Gallery.css";

const galleryImages = [
  "/gallery/WhatsApp Image 2026-05-06 at 12.49.53 PM.jpeg",
  "/gallery/WhatsApp Image 2026-05-06 at 12.49.54 PM (1).jpeg",
  "/gallery/WhatsApp Image 2026-05-06 at 12.49.54 PM (2).jpeg",
  "/gallery/WhatsApp Image 2026-05-06 at 12.49.54 PM.jpeg",
  "/gallery/WhatsApp Image 2026-05-06 at 12.49.55 PM (1).jpeg",
  "/gallery/WhatsApp Image 2026-05-06 at 12.49.55 PM.jpeg",
  "/gallery/WhatsApp Image 2026-05-06 at 12.49.56 PM.jpeg",
  "/gallery/WhatsApp Image 2026-05-06 at 12.51.33 PM.jpeg",
  "/gallery/WhatsApp Image 2026-05-06 at 12.51.43 PM.jpeg",
  "/gallery/WhatsApp Image 2026-05-06 at 12.51.44 PM (1).jpeg",
  "/gallery/WhatsApp Image 2026-05-06 at 12.51.44 PM.jpeg",
  "/gallery/WhatsApp Image 2026-05-06 at 12.51.45 PM.jpeg",
  "/gallery/WhatsApp Image 2026-05-06 at 12.51.46 PM (1).jpeg",
  "/gallery/WhatsApp Image 2026-05-06 at 12.51.46 PM (2).jpeg",
  "/gallery/WhatsApp Image 2026-05-06 at 12.51.46 PM.jpeg",
  "/gallery/WhatsApp Image 2026-05-06 at 12.51.47 PM.jpeg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <section className="section-gallery" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="heading-section mb-48 text-center">
                <h2 className="title split-text effect-right">
                  <SplitTextAnimation text="Our Project Gallery" />
                </h2>
                <p className="text-1 mt-3">
                  Explore our portfolio of exceptional projects and developments
                </p>
              </div>
              
              {isMobile ? (
                <div className="gallery-marquee-wrapper">
                  <div className="gallery-marquee">
                    {[...galleryImages, ...galleryImages].map((image, index) => (
                      <div
                        key={index}
                        className="gallery-item-mobile"
                        onClick={() => setSelectedImage(image)}
                      >
                        <div className="gallery-image-wrap-mobile">
                          <Image
                            src={image}
                            alt={`Gallery image ${(index % galleryImages.length) + 1}`}
                            width={400}
                            height={300}
                            className="gallery-image-mobile"
                          />
                          <div className="gallery-overlay-mobile">
                            <span className="gallery-icon">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="gallery-grid">
                  {galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className="gallery-item"
                      onClick={() => setSelectedImage(image)}
                    >
                      <div className="gallery-image-wrap">
                        <Image
                          src={image}
                          alt={`Gallery image ${index + 1}`}
                          width={400}
                          height={300}
                          className="gallery-image"
                        />
                        <div className="gallery-overlay">
                          <span className="gallery-icon">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="gallery-lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={selectedImage}
              alt="Gallery preview"
              width={1200}
              height={800}
              className="lightbox-image"
            />
          </div>
        </div>
      )}
    </>
  );
}
