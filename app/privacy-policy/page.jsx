import React from "react";
import Header2 from "@/components/headers/Header2";
import Footer1 from "@/components/footers/Footer1";
import ThemeController from "@/components/common/ThemeController";

export const metadata = {
  title: "Privacy Policy - EBA Real Estate",
  description: "Privacy Policy for EBA - Experts Beyond Average",
};

export default function PrivacyPolicy() {
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
                        Privacy Policy
                      </h1>
                      
                      <div style={{ lineHeight: '1.8', color: '#333' }}>
                        <p style={{ marginBottom: '20px', fontSize: '16px' }}>
                          At <strong>EBA (Experts Beyond Average)</strong>, we respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website, services, or team.
                        </p>

                        <h3 style={{ color: '#FF6B35', marginTop: '30px', marginBottom: '15px' }}>
                          1. Information We Collect
                        </h3>
                        <p style={{ marginBottom: '15px' }}>
                          We may collect the following information when you visit or engage with us:
                        </p>
                        <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                          <li>Personal details such as your name, phone number, email address, and project-related information.</li>
                          <li>Data submitted through inquiry forms, consultation requests, or newsletters.</li>
                          <li>Usage data such as IP address, browser type, and website activity (for analytics purposes).</li>
                        </ul>

                        <h3 style={{ color: '#FF6B35', marginTop: '30px', marginBottom: '15px' }}>
                          2. How We Use Your Information
                        </h3>
                        <p style={{ marginBottom: '15px' }}>
                          We use your information to:
                        </p>
                        <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                          <li>Respond to your inquiries and provide requested services.</li>
                          <li>Offer project-related consultations or updates.</li>
                          <li>Improve our website's functionality and user experience.</li>
                          <li>Comply with legal and regulatory obligations under RERA, DCPR 2034, and other applicable frameworks.</li>
                        </ul>

                        <h3 style={{ color: '#FF6B35', marginTop: '30px', marginBottom: '15px' }}>
                          3. Data Security
                        </h3>
                        <p style={{ marginBottom: '20px' }}>
                          We employ appropriate administrative, technical, and physical safeguards to protect your personal information from unauthorized access, misuse, or disclosure.
                        </p>

                        <h3 style={{ color: '#FF6B35', marginTop: '30px', marginBottom: '15px' }}>
                          4. Sharing of Information
                        </h3>
                        <p style={{ marginBottom: '20px' }}>
                          EBA does not sell or rent personal information. Data may only be shared with trusted partners, consultants, or authorities directly involved in your project — and only as required for legal or operational purposes.
                        </p>

                        <h3 style={{ color: '#FF6B35', marginTop: '30px', marginBottom: '15px' }}>
                          5. Your Rights
                        </h3>
                        <p style={{ marginBottom: '20px' }}>
                          You have the right to access, update, or request deletion of your personal information. You may contact us at <a href="mailto:dmeba2003@gmail.com" style={{ color: '#2C5F41' }}>dmeba2003@gmail.com</a> for any privacy-related queries.
                        </p>

                        <h3 style={{ color: '#FF6B35', marginTop: '30px', marginBottom: '15px' }}>
                          6. Policy Updates
                        </h3>
                        <p style={{ marginBottom: '20px' }}>
                          EBA may update this Privacy Policy from time to time. Changes will be reflected on this page with the updated effective date.
                        </p>

                        <div style={{
                          background: 'linear-gradient(135deg, #2C5F41 0%, #4A7C59 100%)',
                          color: 'white',
                          padding: '20px',
                          borderRadius: '10px',
                          marginTop: '30px',
                          textAlign: 'center'
                        }}>
                          <p style={{ margin: '0', fontSize: '14px' }}>
                            <strong>Last Updated:</strong> January 2025<br/>
                            For any questions regarding this Privacy Policy, please contact us at <a href="mailto:dmeba2003@gmail.com" style={{ color: '#FFE4B5' }}>dmeba2003@gmail.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          
          <Footer1 logo="/images/brands/EBA tm logo.png" />
        </div>
      </div>
    </>
  );
}