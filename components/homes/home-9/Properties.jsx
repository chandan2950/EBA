"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
gsap.registerPlugin(ScrollTrigger);
export default function Properties() {
  useEffect(() => {
    const stackElements = document.querySelectorAll(".stack-element");

    if (stackElements.length > 0) {
      let totalHeight;
      let scrollTriggerInstances = [];

      const updateTotalHeight = () => {
        const stackContentWrap = document.querySelector(".stack-content-wrap");
        totalHeight = stackContentWrap.offsetHeight;

        // Kill existing ScrollTrigger instances
        scrollTriggerInstances.forEach((instance) => {
          instance.kill();
        });
        scrollTriggerInstances = [];

        // Loop through each element and create ScrollTrigger instances
        document.querySelectorAll(".element").forEach((element, index) => {
          const tabHeight = element.offsetHeight;
          totalHeight -= tabHeight;

          const pinTrigger = ScrollTrigger.create({
            trigger: element,
            scrub: 1,
            start: "top 80",
            end: `+=${totalHeight}`,
            pin: true,
            pinSpacing: false,
            animation: gsap.to(element, {
              scale: 0.9,
            }),
          });

          scrollTriggerInstances.push(pinTrigger);
        });
      };

      // Initial call to set up ScrollTriggers
      updateTotalHeight();

      // Add resize event listener
      window.addEventListener("resize", updateTotalHeight);

      // Cleanup function
      return () => {
        window.removeEventListener("resize", updateTotalHeight);
        scrollTriggerInstances.forEach((instance) => {
          instance.kill();
        });
      };
    }
  }, []);
  return (
    <div className="tf-spacing-7">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section mb-46 justify-content-between d-flex flex-row mb-55">
              <div className="left">
                <h2 className="title split-text effect-right mb-31">
                  <SplitTextAnimation text="View our current property Projects" />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="stack-element">
        <div className="stack-content-wrap">
          {/* Project 1: Gokul Mathura */}
          {/* <div className="box-listings style-3 element">
            <div className="tf-container">
              <div className="row">
                <div className="col-lg-4 left">
                  <div className="content">
                    <div className="heading">
                      <div className="title text-13 text-color-heading fw-5 mb-13">
                        Gokul Mathura
                      </div>
                      <p className="location text-1 flex text-color-default items-center">
                        <i className="icon-location-5" /> Mulund East Mumbai
                      </p>
                    </div>
                    <div className="info d-flex">
                      <div className="item">
                        <span className="number text-15 fw-2 text-color-heading">
                          1418.40 Sq Meter
                        </span>
                        <div className="box-icon d-flex gap-8 align-items-center">
                          <div>
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14 7.33333V3.33333C14 2.97971 13.8595 2.64057 13.6095 2.39052C13.3594 2.14048 13.0203 2 12.6667 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H7.33333"
                                stroke="#5C5E61"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M14 14L8 8"
                                stroke="#5C5E61"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M14 10V14H10"
                                stroke="#5C5E61"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className="text-color-default text-1">
                            Land Area
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-15 fw-2 text-color-heading">
                      32 CR Project
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 right">
                  <div className="img-style">
                    <Image
                      className="lazyload"
                      data-src="/images/home/project1.jpeg"
                      alt="Gokul Mathura"
                      src="/images/home/project1.jpeg"
                      width={840}
                      height={507}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Project 2: Warehouse at Shivkar Panvel */}
          <div className="box-listings style-3 element">
            <div className="tf-container">
              <div className="row">
                <div className="col-lg-4 left">
                  <div className="content">
                    <div className="heading">
                      <div className="title text-13 text-color-heading fw-5 mb-13">
                        Warehouse at Shivkar Panvel
                      </div>
                      <p className="location text-1 flex text-color-default items-center">
                        <i className="icon-location-5" /> Shivkar, Panvel
                      </p>
                    </div>
                    <div className="info d-flex">
                      <div className="item">
                        <span className="number text-15 fw-2 text-color-heading">
                          7004 Sq Meter
                        </span>
                        <div className="box-icon d-flex gap-8 align-items-center">
                          <div>
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14 7.33333V3.33333C14 2.97971 13.8595 2.64057 13.6095 2.39052C13.3594 2.14048 13.0203 2 12.6667 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H7.33333"
                                stroke="#5C5E61"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M14 14L8 8"
                                stroke="#5C5E61"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M14 10V14H10"
                                stroke="#5C5E61"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className="text-color-default text-1">
                            Land Area
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-15 fw-2 text-color-heading">
                      Warehouse Project
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 right">
                  <div className="img-style">
                    <Image
                      className="lazyload"
                      data-src="/images/home/warehouse1.jpg"
                      alt="Warehouse at Shivkar Panvel"
                      src="/images/home/warehouse1.jpg"
                      width={840}
                      height={507}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: Warehouse at Umberkhand Shahapur */}
          <div className="box-listings style-3 element">
            <div className="tf-container">
              <div className="row">
                <div className="col-lg-4 left">
                  <div className="content">
                    <div className="heading">
                      <div className="title text-13 text-color-heading fw-5 mb-13">
                        Warehouse at Umberkhand, Shahapur
                      </div>
                      <p className="location text-1 flex text-color-default items-center">
                        <i className="icon-location-5" /> Umberkhand, Shahapur
                      </p>
                    </div>
                    <div className="info d-flex">
                      <div className="item">
                        <span className="number text-15 fw-2 text-color-heading">
                          13600 Sq Meter
                        </span>
                        <div className="box-icon d-flex gap-8 align-items-center">
                          <div>
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14 7.33333V3.33333C14 2.97971 13.8595 2.64057 13.6095 2.39052C13.3594 2.14048 13.0203 2 12.6667 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H7.33333"
                                stroke="#5C5E61"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M14 14L8 8"
                                stroke="#5C5E61"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M14 10V14H10"
                                stroke="#5C5E61"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className="text-color-default text-1">
                            Land Area
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-15 fw-2 text-color-heading">
                      Warehouse Project
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 right">
                  <div className="img-style">
                    <Image
                      className="lazyload"
                      data-src="/images/home/warehouse2.jpg"
                      alt="Warehouse at Umberkhand Shahapur"
                      src="/images/home/warehouse2.jpg"
                      width={840}
                      height={507}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 4: Holiday 5 Star Villas at Gagode Pen */}
          <div className="box-listings style-3 element">
            <div className="tf-container">
              <div className="row">
                <div className="col-lg-4 left">
                  <div className="content">
                    <div className="heading">
                      <div className="title text-13 text-color-heading fw-5 mb-13">
                        Holiday 5 Star Villas
                      </div>
                      <p className="location text-1 flex text-color-default items-center">
                        <i className="icon-location-5" /> Gagode, Pen, Raigad
                      </p>
                    </div>
                    <div className="info d-flex">
                      <div className="item">
                        <span className="number text-15 fw-2 text-color-heading">
                          41480 Sq Meter
                        </span>
                        <div className="box-icon d-flex gap-8 align-items-center">
                          <div>
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14 7.33333V3.33333C14 2.97971 13.8595 2.64057 13.6095 2.39052C13.3594 2.14048 13.0203 2 12.6667 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H7.33333"
                                stroke="#5C5E61"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M14 14L8 8"
                                stroke="#5C5E61"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M14 10V14H10"
                                stroke="#5C5E61"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className="text-color-default text-1">
                            Land Area
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-15 fw-2 text-color-heading">
                      5 Star Villa Project
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 right">
                  <div className="img-style">
                    <Image
                      className="lazyload"
                      data-src="/images/home/villa.jpg"
                      alt="Holiday 5 Star Villas at Gagode Pen"
                      src="/images/home/villa.jpg"
                      width={840}
                      height={507}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
