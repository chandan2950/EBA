"use client";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
export default function About() {
  return (
    <>
      <div className="tf-spacing-7 pt-0" style={{ marginTop: "60px" }}>
        <div className="box-about style-1">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-6 left">
                <div className="heading-section mb-74 gap-33">
                  <h2 className="title split-text split-lines-rotation-x fw-5">
                    Our Mission and Vision
                  </h2>
                  <div className="vision-section mb-40">
                    <h3 className="title split-text split-lines-rotation-x fw-5 mb-20">
                      Vision
                    </h3>
                    <ul className="text-1 text-color-default" style={{ overflow: "hidden" }}>
                      <li className="mb-15">• To be the most trusted Development Management partner.</li>
                      <li className="mb-15">• To create future-ready, sustainable communities.</li>
                      <li className="mb-15">• To transform land into opportunity with integrity and innovation.</li>
                    </ul>
                  </div>
                </div>
                <div className="img-style img-custom-anim-left wow">
                  <Image
                    className="lazyload"
                    data-src="/images/home/vision.jpeg"
                    alt="Vision - EBA Real Estate"
                    src="/images/home/vision.jpeg"
                    width={440}
                    height={357}
                  />
                </div>
              </div>
              <div className="col-lg-6 right">
                <div className="wrap relative">
                  <div className="img-style img-custom-anim-right wow">
                    <Image
                      className="lazyload"
                      data-src="/images/home/mission.jpeg"
                      alt="Mission - EBA Development Management"
                      src="/images/home/mission.jpeg"
                      width={620}
                      height={509}
                    />
                  </div>
                </div>
                <div className="content">
                  <div className="text-17 text-color-heading fw-6 mb-27 split-text effect-right">
                    <SplitTextAnimation text="A powerful platform with thousands of high-end properties" />
                  </div>
                  <div className="mission-section">
                    <h3 className="title split-text split-lines-rotation-x fw-5 mb-20">
                      Mission
                    </h3>
                    <ul className="text-1 text-color-default" style={{ overflow: "hidden" }}>
                      <li className="mb-15">• Empower societies, landowners & developers with end-to-end solutions.</li>
                      <li className="mb-15">• Safeguard member rights & ensure transparency.</li>
                      <li className="mb-15">• Deliver quality housing with modern amenities, on time.</li>
                      <li className="mb-15">• Maximize financial & social benefits for all stakeholders.</li>
                      <li className="mb-15">• Build trust through accountability & care.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
