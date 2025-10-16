import React from "react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
export default function Services() {
  return (
    <div className="section-help style-3 tf-spacing-7 pb-0">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center gap-30 mb-56">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Have a look at our services" />
              </h2>
              <p
                className="text-1 wow animate__fadeInUp animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                Our vision is to be the premier real estate company in New York,
                recognized for our unwavering commitment to <br />
                excellence, innovation, and community impact. We aspire to
                create lasting value for our clients, employees, and <br />
                the communities we serve.
              </p>
            </div>
            <div className="tf-grid-layout md-col-2 mb-6">
              <div
                className="icons-box style-3 wow animate__zoomIn animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                <div className="tf-icon">
                  <i className="icon-agent-2" />
                </div>
                <div className="content">
                  <h5 className="title">
                    <a href="#">Community Facilitation</a>
                  </h5>
                  <p className="text-1">
                  Organizing meetings, ensuring alignment through educational sessions & facilitating legal documentation.
                  </p>
                  {/* <a href="#" className="tf-btn-link color-3">
                    <span>Learn More</span>
                  </a> */}
                </div>
              </div>
              <div
                className="icons-box style-3 wow animate__zoomIn animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                <div className="tf-icon">
                  <i className="icon-location-4" />
                </div>
                <div className="content">
                  <h5 className="title">
                    <a href="#">Financial Structuring</a>
                  </h5>
                  <p className="text-1">
                  
Mobilizing initial capital & seed funding through various channels with structured drawdowns.


                  </p>
                  {/* <a href="#" className="tf-btn-link color-3">
                    <span>Learn More</span>
                  </a> */}
                </div>
              </div>
              <div
                className="icons-box style-3 wow animate__zoomIn animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                <div className="tf-icon">
                  <i className="icon-house-1" />
                </div>
                <div className="content">
                  <h5 className="title">
                    <a href="#"> Project Management</a>
                  </h5>
                  <p className="text-1">
                 
                  Implementing construction schedule & monitoring progress with superior quality control.
                  </p>
                  {/* <a href="#" className="tf-btn-link color-3">
                    <span>Learn More</span>
                  </a> */}
                </div>
              </div>
              <div
                className="icons-box style-3 wow animate__zoomIn animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                <div className="tf-icon">
                  <i className="icon-find-2" />
                </div>
                <div className="content">
                  <h5 className="title">
                    <a href="#">Legal Title Regularization</a>
                  </h5>
                  <p className="text-1">
                  
                  Establishing clear ownership title & coordinating with SRA, MHADA, MCGM & relevant authorities.
                  </p>
                  {/* <a href="#" className="tf-btn-link color-3">
                    <span>Learn More</span>
                  </a> */}
                </div>
              </div>
              <div
                className="icons-box style-3 wow animate__zoomIn animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                <div className="tf-icon">
                  <i className="icon-house-1" />
                </div>
                <div className="content">
                  <h5 className="title">
                    <a href="#"> Planning & Approvals</a>
                  </h5>
                  <p className="text-1">
                 
                  
Engaging certified professionals for conceptual plans, layouts & liaising for all necessary approvals.
                  </p>
                  {/* <a href="#" className="tf-btn-link color-3">
                    <span>Learn More</span>
                  </a> */}
                </div>
              </div>
              <div
                className="icons-box style-3 wow animate__zoomIn animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                <div className="tf-icon">
                  <i className="icon-house-1" />
                </div>
                <div className="content">
                  <h5 className="title">
                    <a href="#"> Final Handover</a>
                  </h5>
                  <p className="text-1">
                 
                  
                  
                  Facilitating OC issuance & ensuring each party receives equivalent benefits.
                  </p>
                  {/* <a href="#" className="tf-btn-link color-3">
                    <span>Learn More</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item text-center">
        <Image
          alt=""
          src="/images/section/section-help.png"
          width={1875}
          height={153}
        />
      </div>
    </div>
  );
}
