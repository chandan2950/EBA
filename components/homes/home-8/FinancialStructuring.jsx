"use client";
import React from "react";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";

export default function FinancialStructuring() {
  const expertiseItems = [
    "Project Financial Feasibility & Viability Assessment",
    "Capital Structuring & Funding Roadmaps",
    "Escrow-Driven Cashflow & Disbursement Controls",
    "Statutory Compliance for Listed & Private Companies",
    "Risk Mitigation, Due Diligence & Documentation Controls",
    "Budgeting, Cost Monitoring & Financial Reporting",
    "Tax Planning, GST, and Corporate Governance Oversight",
  ];

  return (
    <div className="section-help style-3 tf-spacing-7 pb-0">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        .intro-box {
          animation: fadeInScale 0.8s ease-out forwards;
        }
        
        .expertise-card {
          opacity: 0;
          animation: slideInLeft 0.6s ease-out forwards;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .expertise-card:hover {
          transform: translateX(10px);
          box-shadow: 0 8px 25px rgba(255, 107, 53, 0.15);
        }
        
        .number-badge {
          transition: transform 0.3s ease, background 0.3s ease;
        }
        
        .expertise-card:hover .number-badge {
          transform: scale(1.1);
          background: #e55a2b;
        }
        
        .cta-box {
          animation: fadeInUp 0.8s ease-out 0.5s forwards;
          opacity: 0;
          transition: transform 0.3s ease;
        }
        
        .cta-box:hover {
          transform: scale(1.02);
        }
        
        .sub-heading {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        @media (max-width: 768px) {
          .expertise-card:hover {
            transform: translateX(5px);
          }
        }
      `}</style>
      
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center gap-30 mb-56">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Financial Structuring & Strategic Fiscal Management" />
              </h2>
            </div>

            <div className="row justify-content-center mb-48">
              <div className="col-lg-10">
                <div
                  className="intro-box"
                  style={{
                    textAlign: "center",
                    padding: "40px",
                    background: "#f8f9fa",
                    borderRadius: "12px",
                  }}
                >
                  <p
                    style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "15px", color: "#333333" }}
                  >
                    At EBA, we bring robust financial discipline to every project
                    through our integrated{" "}
                    <strong>Financial Structuring Division</strong>, led by an
                    in-house <strong>Senior Chartered Accountant (CA)</strong> and{" "}
                    <strong>Senior Company Secretary (CS)</strong>.
                  </p>
                  <p style={{ fontSize: "18px", color: "#333333", margin: 0 }}>
                    Our approach ensures{" "}
                    <strong>complete financial transparency</strong>,{" "}
                    <strong>zero-risk execution</strong>, and{" "}
                    <strong>audit-ready compliance</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="heading-section text-center gap-30 mb-40">
              <h4 className="title sub-heading">Our Financial Expertise Includes:</h4>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "20px",
                    marginBottom: "48px",
                  }}
                >
                  {expertiseItems.map((item, index) => (
                    <div
                      key={index}
                      className="expertise-card"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                        padding: "20px 25px",
                        background: "#f8f9fa",
                        borderRadius: "10px",
                        borderLeft: "4px solid #FF6B35",
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <span
                        className="number-badge"
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          background: "#FF6B35",
                          color: "#ffffff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "bold",
                          fontSize: "14px",
                          flexShrink: 0,
                        }}
                      >
                        {index + 1}
                      </span>
                      <span style={{ fontSize: "16px", fontWeight: "500", color: "#333333" }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div
                  className="cta-box"
                  style={{
                    textAlign: "center",
                    padding: "30px 40px",
                    background: "linear-gradient(135deg, #FF6B35 0%, #ff8c5a 100%)",
                    borderRadius: "12px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "#fff",
                      margin: 0,
                    }}
                  >
                    With EBA&apos;s financial ecosystem, every project becomes{" "}
                    <strong>professionally structured</strong>,{" "}
                    <strong>compliant</strong>, <strong>secure</strong>, and{" "}
                    <strong>future-ready</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
