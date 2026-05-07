"use client";
import React from "react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { agents4 } from "@/data/agents";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export default function Agents() {
  return (
    <section className="section-local-agent tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section mb-48 text-center">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Raising Standards, Building Futures" />
              </h2>
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Expert Beyond Average" />
              </h2>
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Our Official Onboard Team" />
              </h2>
            </div>
            <div className="agents-swiper-container" style={{ marginBottom: "48px" }}>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                  576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
                style={{ paddingBottom: "50px" }}
              >
                {agents4.map((agent) => (
                  <SwiperSlide key={agent.id}>
                    <div
                      className={`agent-item hover-img ${agent.wowClass}`}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                      }}
                    >
                      <div
                        className="image-wrap"
                        style={{
                          position: "relative",
                          overflow: "hidden",
                          borderRadius: "8px",
                        }}
                      >
                        <Image
                          className="lazyload agent-image"
                          data-src={agent.imageSrc}
                          alt={agent.name}
                          width={435}
                          height={585}
                          src={agent.imageSrc}
                          style={{
                            width: "100%",
                            height: "400px",
                            objectFit: "cover",
                            objectPosition: "center top",
                            cursor: "default",
                          }}
                        />
                      </div>
                      <div className="content">
                        <div className="author">
                          <h5 className="name lh-30">
                            {agent.name}
                          </h5>
                          <p className="text-2 lh-18">{agent.role}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <p className="text-center text-1 mb-48">
              As a Leading corporate entity, we stand united with one mission: to deliver transparency, commitment and excellence in every project with diverse expertise and a shared passion for creating value, we don&apos;t just build structures we build relationships that last.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
