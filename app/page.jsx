import ThemeController from "@/components/common/ThemeController";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Agents from "@/components/homes/home-2/Agents";
import Banner from "@/components/homes/home-2/Banner";
import Blogs from "@/components/homes/home-2/Blogs";
import Brands from "@/components/homes/home-2/Brands";
import Categories from "@/components/homes/home-2/Categories";
import Cities from "@/components/homes/home-2/Cities";
import Facts from "@/components/homes/home-2/Facts";
import Hero from "@/components/homes/home-2/Hero";
import Contact from "@/components/homes/home-7/Contact";
import Services from "@/components/homes/home-8/Services";

import Testimonials from "@/components/homes/home-9/Testimonials";
import About from "@/components/homes/home-9/About";
import Properties from "@/components/homes/home-9/Properties";
import WelcomeSection from "@/components/homes/home-8/WelcomeSection";
import React from "react";

export const metadata = {
  title: "EBA- Real Estate",
  description: "EBA- Real Estate",
};
export default function page() {
  return (
    <>
      <div className="counter-scroll ">
        <ThemeController themeColor={"theme-color-1"} />
        <div id="wrapper">
          <Header2 />
          <Hero />
          <div className="main-content">
          <WelcomeSection />
          
            <Agents />
            <Services />
            <About />
            
           
            <Categories />
           
            <Facts />
            <Cities />
            <Testimonials />
            <Brands />
            <Properties />
            <Contact />
            {/* <Banner /> */}
            {/* <Blogs /> */}
          </div>
          <Footer1 logo="/images/brands/EBA tm logo.png" />
        </div>
      </div>
    </>
  );
}
