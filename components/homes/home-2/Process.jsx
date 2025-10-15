"use client";
import React from "react";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";

const processSteps = [
  { id: 1, title: "MEETING & EXPLANATION", icon: "👥" },
  { id: 2, title: "CORUM COMPLETION", icon: "✅" },
  { id: 3, title: "LEGAL DOCUMENTS", icon: "📋" },
  { id: 4, title: "TECH PRESENTATION", icon: "💻" },
  { id: 5, title: "EGM / SGM", icon: "🏛️" },
  { id: 6, title: "REPORTS TO COMMITTEE/MEMBERS", icon: "📊" },
  { id: 7, title: "DM APPOINTMENT", icon: "👨‍💼" },
  { id: 8, title: "DM AGREEMENT", icon: "🤝" },
  { id: 9, title: "CONSULTING & LIASONING ARCHITECT", icon: "🏗️" },
  { id: 10, title: "FINANCE MANAGEMENT", icon: "💰" },
  { id: 11, title: "SRA / MCGM", icon: "🏢" },
  { id: 12, title: "FIRE NOC", icon: "🔥" },
  { id: 13, title: "TRAFFIC / PARKING NOC", icon: "🚗" },
  { id: 14, title: "AVIATION NOC", icon: "✈️" },
  { id: 15, title: "MOEF / EV", icon: "🌱" },
  { id: 16, title: "IOD / CC", icon: "🏗️" },
  { id: 17, title: "RERA APPROVAL", icon: "📜" },
  { id: 18, title: "SALE PLANNING / EXECUTION", icon: "📈" },
  { id: 19, title: "SITE VACATE POSSESSION", icon: "🏠" },
  { id: 20, title: "CONSTRUCTION", icon: "🔨" },
  { id: 21, title: "MONITORING & REPORTING", icon: "📋" },
  { id: 22, title: "FINISHING", icon: "✨" },
  { id: 23, title: "OC & HANDOVER", icon: "🔑" },
  { id: 24, title: "CLOSER OF PROJECT IN RERA", icon: "🎯" },
];

export default function Process() {
  return (
    <section className="section-process tf-spacing-1" style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}>
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            {/* Header */}
            <div className="heading-section mb-48 text-center">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Self-Redevelopment Process" />
              </h2>
              <p className="text-1">24 Steps to Transparent & Compliant Redevelopment</p>
            </div>

            {/* Compliance Info */}
            <div className="row mb-48">
              <div className="col-12">
                <div style={{
                  background: "linear-gradient(135deg, #2C5F41 0%, #4A7C59 100%)",
                  borderRadius: "15px",
                  padding: "30px",
                  color: "white",
                  textAlign: "center"
                }}>
                  <div style={{ fontSize: "40px", marginBottom: "15px" }}>🏢</div>
                  <h4 style={{ marginBottom: "10px", fontWeight: "bold", fontSize: "18px" }}>
                    Compliant with Maharashtra Cooperative Societies Act, MOFA, RERA, DCPR 2034
                  </h4>
                </div>
              </div>
            </div>

            {/* Process Grid */}
            <div className="row g-3 mb-48">
              {processSteps.map((step, index) => (
                <div key={step.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div style={{
                    background: "white",
                    borderRadius: "12px",
                    padding: "20px",
                    height: "120px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                    border: `2px solid ${index % 2 === 0 ? "#2C5F41" : "#FF6B35"}`,
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)";
                  }}
                  >
                    {/* Step Number */}
                    <div style={{
                      width: "35px",
                      height: "35px",
                      background: index % 2 === 0 ? "#2C5F41" : "#FF6B35",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "bold",
                      flexShrink: 0
                    }}>
                      {step.id}
                    </div>

                    {/* Icon */}
                    <div style={{
                      fontSize: "24px",
                      flexShrink: 0
                    }}>
                      {step.icon}
                    </div>

                    {/* Title */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h6 style={{
                        margin: "0",
                        color: index % 2 === 0 ? "#2C5F41" : "#FF6B35",
                        fontWeight: "600",
                        fontSize: "12px",
                        lineHeight: "1.3",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical"
                      }}>
                        {step.title}
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Message */}
            <div className="text-center">
              <div style={{
                background: "linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)",
                borderRadius: "15px",
                padding: "25px",
                color: "white",
                maxWidth: "600px",
                margin: "0 auto"
              }}>
                <h5 style={{ marginBottom: "10px", fontWeight: "bold" }}>
                  Transparent & Systematic Approach
                </h5>
                <p style={{ margin: "0", fontSize: "14px", opacity: "0.9" }}>
                  Every step documented and compliant with regulations for complete transparency
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
