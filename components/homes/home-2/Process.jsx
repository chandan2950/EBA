"use client";
import React from "react";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";

const processPhases = [
  {
    phase: "Planning & Documentation",
    color: "#2C5F41",
    steps: [
      "Meeting & Explanation",
      "Corum Completion",
      "Legal Documents",
      "Tech Presentation",
      "EGM / SGM",
      "Committee Reports",
    ],
  },
  {
    phase: "Management & Agreements",
    color: "#FF6B35",
    steps: [
      "DM Appointment",
      "DM Agreement",
      "Architect Consulting",
      "Finance Management",
    ],
  },
  {
    phase: "Approvals & Clearances",
    color: "#2C5F41",
    steps: [
      "SRA / MCGM",
      "Fire NOC",
      "Traffic NOC",
      "Aviation NOC",
      "MOEF / EV",
      "IOD / CC",
      "RERA Approval",
    ],
  },
  {
    phase: "Execution & Delivery",
    color: "#FF6B35",
    steps: [
      "Sale Planning",
      "Site Possession",
      "Construction",
      "Monitoring",
      "Finishing",
      "OC & Handover",
      "RERA Closure",
    ],
  },
];

export default function Process() {
  return (
    <div className="text-with-img style-2 tf-spacing-7">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            {/* Header Section */}
            <div className="heading-section text-center gap-30 mb-56">
              <h2 className="title split-text effect-right fw-5 process-title">
                <SplitTextAnimation text="Self-Redevelopment Process" />
              </h2>
              <style jsx>{`
                .process-title {
                  word-break: keep-all;
                  overflow-wrap: break-word;
                  hyphens: none;
                }

                @media (max-width: 768px) {
                  .process-title {
                    font-size: 28px !important;
                    line-height: 1.2 !important;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  }
                }

                @media (max-width: 480px) {
                  .process-title {
                    font-size: 24px !important;
                    white-space: normal !important;
                    overflow: visible !important;
                    text-overflow: unset !important;
                    word-spacing: -2px;
                  }
                }

                @media (max-width: 360px) {
                  .process-title {
                    font-size: 22px !important;
                    word-spacing: -3px;
                    letter-spacing: -0.5px;
                  }
                }
              `}</style>
              <p
                className="text-1 text-color-default wow animate__fadeInUp animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                Our systematic 24-step approach ensures transparency,
                compliance, and excellence in every redevelopment project.
              </p>
              <p
                className="text-1 text-color-default wow animate__fadeInUp animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                From initial consultation to final handover, we guide you
                through each phase with expertise and dedication.
              </p>
            </div>
          </div>
        </div>

        {/* Process Phases */}
        {processPhases.map((phase, phaseIndex) => (
          <div key={phaseIndex} className="row mb-48">
            <div className="col-lg-4">
              <div className="content">
                <div className="heading-section mb-32 gap-30">
                  <h3
                    className="title fw-5 wow animate__fadeInLeft animate__animated"
                    data-wow-duration="1.5s"
                    data-wow-delay="0s"
                    style={{ color: phase.color, fontSize: "28px" }}
                  >
                    Phase {phaseIndex + 1}
                  </h3>
                  <h4
                    className="text-color-heading wow animate__fadeInLeft animate__animated"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.1s"
                    style={{ marginBottom: "20px" }}
                  >
                    {phase.phase}
                  </h4>
                  <div
                    style={{
                      width: "60px",
                      height: "4px",
                      background: phase.color,
                      borderRadius: "2px",
                      marginBottom: "20px",
                    }}
                    className="wow animate__fadeInLeft animate__animated"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.2s"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <ul className="list d-flex flex-column gap-16">
                {phase.steps.map((step, stepIndex) => (
                  <li
                    key={stepIndex}
                    className="d-flex align-items-center text-1 fw-4 text-color-default gap-16 wow animate__fadeInRight animate__animated"
                    data-wow-duration="1.5s"
                    data-wow-delay={`${0.1 * (stepIndex + 1)}s`}
                    style={{
                      padding: "16px 0",
                      borderBottom:
                        stepIndex < phase.steps.length - 1
                          ? "1px solid #eee"
                          : "none",
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        background: phase.color,
                        color: "white",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        fontWeight: "bold",
                        flexShrink: 0,
                      }}
                    >
                      {phaseIndex === 0
                        ? stepIndex + 1
                        : phaseIndex === 1
                        ? stepIndex + 7
                        : phaseIndex === 2
                        ? stepIndex + 11
                        : stepIndex + 18}
                    </div>
                    <span style={{ fontSize: "16px", lineHeight: "1.4" }}>
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Compliance Section */}
        <div className="row">
          <div className="col-12">
            <div
              className="content text-center wow animate__fadeInUp animate__animated"
              data-wow-duration="1.5s"
              data-wow-delay="0s"
              style={{
                background: "linear-gradient(135deg, #2C5F41 0%, #4A7C59 100%)",
                color: "white",
                padding: "50px 40px",
                borderRadius: "20px",
              }}
            >
              <div className="heading-section mb-32 gap-30">
                <h3
                  className="title fw-5"
                  style={{ color: "white", marginBottom: "20px" }}
                >
                  Fully Compliant & Transparent
                </h3>
                <p
                  className="text-1"
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "18px",
                    lineHeight: "1.6",
                  }}
                >
                  All processes comply with Maharashtra Cooperative Societies
                  Act, MOFA, RERA, DCPR 2034, and other applicable regulations.
                  Every step is documented, monitored, and transparent to all
                  stakeholders throughout the redevelopment journey.
                </p>
              </div>
              <a
                href="#contact"
                className="tf-btn bg-color-primary pd-4 rounded-cycle height-3"
                style={{
                  background: "#FF6B35",
                  border: "none",
                  marginTop: "20px",
                }}
              >
                Start Your Project
                <i className="icon-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
