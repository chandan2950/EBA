import OdometerComponent from "@/components/common/OdometerComponent";
import { counters } from "@/data/facts";
import React from "react";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
export default function Facts() {
  return (
    <section
      className="section-realty tf-spacing-1"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1551295022-de5522c94e08?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }}
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h2 className="title text_white split-text effect-right">
                <SplitTextAnimation text="Market Your Property With" />
                <br />
                <SplitTextAnimation text="Realty" />
              </h2>
              <p
                className="text-1 text-color3 wow animate__fadeInUp animate__animated"
                data-wow-duration="1.5s"
              >
                No obligation market appraisal for your property today. Our
                virtual options are <br />
                still available if you prefer
              </p>
            </div>
          </div>
          <div className="tf-grid-layout-2 lg-col-4">
            {counters.map((counter, index) => (
              <div key={index} className="counter-item style-1 mx-auto">
                <div className="count text-center">
                  <div className="counter-number">
                    <div
                      className={`odometer odometer-auto-theme ${counter.class}`}
                    >
                      <OdometerComponent max={counter.value} />
                    </div>
                    {counter.suffix && (
                      <span className="sub">{counter.suffix}</span>
                    )}
                  </div>
                  <p className="text-1 text_white">{counter.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
