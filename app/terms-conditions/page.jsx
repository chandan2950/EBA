import React from "react";
import Header2 from "@/components/headers/Header2";
import Footer1 from "@/components/footers/Footer1";
import ThemeController from "@/components/common/ThemeController";

export const metadata = {
  title: "Terms & Conditions - EBA Real Estate",
  description: "Terms & Conditions for EBA - Experts Beyond Average",
};

export default function TermsConditions() {
  return (
    <>
      <div className="counter-scroll">
        <ThemeController themeColor={"theme-color-1"} />
        <div id="wrapper">
          <Header2 />
          
          <div className="main-content">
            <section className="tf-spacing-1" style={{ backgroundColor: '#f8f9fa', paddingTop: '100px' }}>
              <div className="tf-container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div style={{
                      background: 'white',
                      borderRadius: '15px',
                      padding: '40px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                    }}>
                      <h1 style={{ 
                        color: '#2C5F41', 
                        marginBottom: '30px',
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        textAlign: 'center'
                      }}>
                        Terms & Conditions
                      </h1>
                      
                      <div style={{ lineHeight: '1.8', color: '#333' }}>
                        <p style={{ marginBottom: '20px', fontSize: '16px',textAlign: "justify" }}>
                          Welcome to <strong>EBA (Experts Beyond Average)</strong>. By using our website and services, you agree to the following terms and conditions. Please read them carefully before engaging with us.
                        </p>

                        <h3 style={{ color: '#FF6B35', marginTop: '30px', marginBottom: '15px' }}>
                          1. Purpose of Website
                        </h3>
                        <p style={{ marginBottom: '20px',textAlign: "justify" }}>
                          The content on this website is for informational purposes only and should not be considered as legal, financial, or architectural advice. Visitors are encouraged to contact EBA directly for project-specific guidance.
                        </p>

                        <h3 style={{ color: '#FF6B35', marginTop: '30px', marginBottom: '15px' }}>
                          2. Service Engagement
                        </h3>
                        <p style={{ marginBottom: '20px',textAlign: "justify" }}>
                          EBA operates as a Development Management (DM) Partner — offering consultancy and project management services for redevelopment, slum development, and allied real estate projects. All engagements are governed by a separate Development Management Agreement (DMA) or Term Sheet, which outlines the commercial, legal, and operational terms of each project.
                        </p>

                        <h3 style={{ color: '#FF6B35', marginTop: '30px', marginBottom: '15px' }}>
                          3. Accuracy of Information
                        </h3>
                        <p style={{ marginBottom: '20px',textAlign: "justify" }}>
                          While EBA strives to ensure accuracy, we do not warrant that all information provided on this website is complete, up-to-date, or error-free. Visitors are responsible for verifying any details before relying on them.
                        </p>

                        <h3 style={{ color: '#FF6B35', marginTop: '30px', marginBottom: '15px' }}>
                          4. Intellectual Property
                        </h3>
                        <p style={{ marginBottom: '20px',textAlign: "justify" }}>
                          All content on this website, including text, graphics, logos, and project material, is the property of EBA and may not be copied, reproduced, or distributed without prior written consent.
                        </p>

                        <h3 style={{ color: '#FF6B35', marginTop: '30px', marginBottom: '15px' }}>
                          5. Limitation of Liability
                        </h3>
                        <p style={{ marginBottom: '20px',textAlign: "justify" }}>
                          EBA shall not be liable for any loss, damage, or claim arising from reliance on website content, third-party links, or project-related information shared herein. All project engagements are subject to the terms defined in the signed Development Management Agreement.
                        </p>

                        <h3 style={{ color: '#FF6B35', marginTop: '30px', marginBottom: '15px' }}>
                          6. Governing Law
                        </h3>
                        <p style={{ marginBottom: '20px',textAlign: "justify" }}>
                          These Terms & Conditions shall be governed by and construed in accordance with the laws of India, specifically under the jurisdiction of Mumbai, Maharashtra.
                        </p>

                        <div style={{
                          background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                          color: 'white',
                          padding: '20px',
                          borderRadius: '10px',
                          marginTop: '30px',
                          textAlign: 'center'
                        }}>
                          <p style={{ margin: '0', fontSize: '14px' }}>
                            <strong>Last Updated:</strong> January 2025<br/>
                            For any questions regarding these Terms & Conditions, please contact us at <a href="mailto:dmeba2003@gmail.com" style={{ color: '#FFE4B5' }}>dmeba2003@gmail.com</a>
                          </p>
                        </div>

                        <div style={{
                          background: '#f8f9fa',
                          padding: '20px',
                          borderRadius: '10px',
                          marginTop: '20px',
                          border: '2px solid #2C5F41'
                        }}>
                          <h4 style={{ color: '#2C5F41', marginBottom: '10px' }}>
                            Contact Information
                          </h4>
                          <p style={{ margin: '0', fontSize: '14px' }}>
                            <strong>EBA - Experts Beyond Average</strong><br/>
                            Development Management Services<br/>
                            Email: <a href="mailto:dmeba2003@gmail.com" style={{ color: '#FF6B35' }}>dmeba2003@gmail.com</a><br/>
                            Phone: <a href="tel:+919236126874" style={{ color: '#FF6B35' }}>+91 9326126874</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          
         
        </div>
      </div>
    </>
  );
}