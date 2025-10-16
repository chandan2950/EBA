"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { agents4 } from "@/data/agents";
export default function Agents() {
  return (
    <section className="section-local-agent tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section mb-48 text-center">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Raising Standards, Building Futures- Expert Beyond Average Our Official Onboard Team" />
              </h2>
              {/* <p className="text-1 split-text split-lines-transform">
                
              </p>
              <p className="text-1 split-text split-lines-transform">
                
              </p> */}
            </div>
            <div className="tf-grid-layout-2 md-col-4 mb-48 agents-container">
              <style jsx>{`
                @media (max-width: 768px) {
                  .agents-container {
                    display: flex !important;
                    overflow-x: auto;
                    gap: 20px;
                    padding-bottom: 10px;
                    scroll-snap-type: x mandatory;
                  }
                  .agents-container::-webkit-scrollbar {
                    height: 6px;
                  }
                  .agents-container::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 3px;
                  }
                  .agents-container::-webkit-scrollbar-thumb {
                    background: #888;
                    border-radius: 3px;
                  }
                  .agents-container::-webkit-scrollbar-thumb:hover {
                    background: #555;
                  }
                  .mobile-agent-card {
                    min-width: 280px;
                    flex-shrink: 0;
                    scroll-snap-align: start;
                  }
                }
              `}</style>
              {agents4.map((agent) => (
                <div
                  className={`agent-item hover-img mobile-agent-card ${agent.wowClass}`}
                  key={agent.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                  }}
                >
                  <div className="image-wrap" style={{ 
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '8px'
                  }}>
                    <Link href={`/agents-details/${agent.id}`}>
                      <Image
                        className="lazyload agent-image"
                        data-src={agent.imageSrc}
                        alt=""
                        width={435}
                        height={585}
                        src={agent.imageSrc}
                        style={{
                          width: '100%',
                          height: '400px',
                          objectFit: 'cover',
                          objectPosition: 'center top'
                        }}
                      />
                    </Link>
                    <ul className="tf-social style-3">
                      <li>
                        <a href="#">
                          <i className="icon-fb" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-X" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-linked" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-ins" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="content">
                    <div className="author">
                      <h5 className="name lh-30">
                        <Link href={`/agents-details/${agent.id}`}>
                          {agent.name}
                        </Link>
                      </h5>
                      <p className="text-2 lh-18">{agent.role}</p>
                    </div>
                    <div className="wrap-btn-icon">
                      <a href="#" className="btn-icon">
                        <i className="icon-phone-3" />
                      </a>
                      <a href="#" className="btn-icon">
                        <i className="icon-letter" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-1 mb-48">
              As a Leading corporate entity, we stand united with one mission: to deliver transparency,commitment and excellence in every project with diverse expertise and a shqared passion fro creating value,we don't just build structures we build relationship that last.
              {/* <a href="#">Let’s chat</a> */}
            </p>
            {/* <a href="#" className="tf-btn bg-color-primary pd-3 fw-6 mx-auto">
              Find your location agent <i className="icon-MagnifyingGlass" />
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
