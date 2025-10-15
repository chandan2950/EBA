import React from "react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
export default function WelcomeSection() {
  return (
    <div className="text-with-img style-2 mt-20">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="wrap-img relative">
              <div className="img-style main">
                <Image
                  className="lazyload"
                  data-src="/images/home/mission.jpeg"
                  alt=""
                  src="/images/home/mission.jpeg"
                  width={550}
                  height={481}
                />
              </div>
              <div className="img-style sub scroll-tranform">
                <Image
                  className="lazyload"
                  data-src="/images/home/vision.jpeg"
                  alt=""
                  src="/images/home/vision.jpeg"
                  width={290}
                  height={316}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content">
              <div className="heading-section mb-32 gap-30">
                <h2 className="title split-text effect-right fw-5">
                  <SplitTextAnimation text="About EBA" />
                </h2>
                <p
                  className="text-1 text-color-default wow animate__fadeInUp animate__animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                  Turning Land into Opportunity, Creating Homes with Care.
                </p>
                <p
                  className="text-1 text-color-default wow animate__fadeInUp animate__animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                  At EBA (Experts Beyond Average), we are more than just Development Managers we are your reliable partners in turning land into opportunity.
With deep expertise in housing, slum, MHADA, and open plot redevelopment projects, we provide end-to-end Development Management Services designed to simplify complexity, ensure transparency, and maximize value for every stakeholder.

                </p>
                <p
                  className="text-1 text-color-default wow animate__fadeInUp animate__animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                  Headquartered in Mumbai, EBA brings together a team of experienced professionals from technical, legal, financial, and architectural backgrounds. We work hand-in-hand with housing societies, developers, and landowners to manage the entire redevelopment journey from feasibility and funding to design, execution, and handover.

                </p>
                <p
                  className="text-1 text-color-default wow animate__fadeInUp animate__animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                  Our philosophy is rooted in trust, integrity, and care. Every project we undertake is not just a structure, but a community in the making built with precision, guided by compliance, and driven by a shared purpose of creating homes that stand the test of time.

                </p>
                <p
                  className="text-1 text-color-default wow animate__fadeInUp animate__animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                  At EBA, we believe that giving someone a home is one of life’s greatest blessings. That’s why we nurture every stage of development with empathy, professionalism, and accountability ensuring that every family, member, and partner finds confidence and peace of mind throughout the process.

                </p>
              </div>
              {/* <ul className="list d-flex flex-column gap-12 mb-32">
                <li
                  className="d-flex align-items-center text-1 fw-3 text-color-default gap-8 wow animate__fadeInUp animate__animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                  <i className="icon-check-cycle text-color-primary fs-24" />
                  Nam malesuada risus non tortor laoreet fringilla.
                </li>
                <li
                  className="d-flex align-items-center text-1 fw-3 text-color-default gap-8 wow animate__fadeInUp animate__animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.1s"
                >
                  <i className="icon-check-cycle text-color-primary fs-24" />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li
                  className="d-flex align-items-center text-1 fw-3 text-color-default gap-8 wow animate__fadeInUp animate__animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <i className="icon-check-cycle text-color-primary fs-24" />
                  Ut malesuada dolor convallis erat iaculis varius.
                </li>
                <li
                  className="d-flex align-items-center text-1 fw-3 text-color-default gap-8 wow animate__fadeInUp animate__animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  <i className="icon-check-cycle text-color-primary fs-24" />
                  Sed ultrices erat in nisi pulvinar tristique.
                </li>
              </ul> */}
              <a
                href="#"
                className="tf-btn bg-color-primary pd-4 rounded-cycle height-3 wow animate__fadeInUp animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                Explore our Projects
                <i className="icon-arrow-up-right"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
