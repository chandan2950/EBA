import ThemeController from "@/components/common/ThemeController";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
// import About from "@/components/homes/home-2/About";
import Agents from "@/components/homes/home-2/Agents";
import Banner from "@/components/homes/home-2/Banner";
import Blogs from "@/components/homes/home-2/Blogs";
import Brands from "@/components/homes/home-2/Brands";
import Categories from "@/components/homes/home-2/Categories";
import Cities from "@/components/homes/home-2/Cities";
import Facts from "@/components/homes/home-2/Facts";
import Hero from "@/components/homes/home-2/Hero";
// import Properties from "@/components/homes/home-2/Properties";
import Testimonials from "@/components/homes/home-9/Testimonials";
import About from "@/components/homes/home-9/About";
import Properties from "@/components/homes/home-9/Properties";
import SEOContent from "@/components/common/SEOContent";
import React from "react";

export const metadata = {
  title: "Redevelopment Company in Mumbai | Self-Redevelopment Consultant | EBA Development Management",
  description: "Leading redevelopment company in Mumbai offering self-redevelopment consultant services, society redevelopment experts, and redevelopment PMC Mumbai. 20+ years experience in housing society redevelopment management.",
  keywords: "redevelopment company in Mumbai, self-redevelopment consultant Mumbai, redevelopment management company, society redevelopment experts, redevelopment PMC Mumbai, housing society redevelopment, Mumbai redevelopment services",
  openGraph: {
    title: "EBA - Premier Redevelopment Management Company in Mumbai",
    description: "Expert self-redevelopment consultant and society redevelopment experts in Mumbai. Trusted redevelopment PMC with 20+ years of experience in housing society redevelopment.",
    type: "website",
    locale: "en_IN",
  },
  alternates: {
    canonical: "https://www.yourwebsite.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
          <Brands />
          <Agents />
          <About />
          <Properties />
            <Categories />
            {/* <About /> */}
           
            <Facts />
            
            <Cities />
            <Testimonials />
            <SEOContent />

            {/* <Banner /> */}
            
            {/* <Blogs /> */}
          </div>
          <Footer1 logo="/images/logo/logo-3@2x.png" />
        </div>
      </div>
    </>
  );
}
