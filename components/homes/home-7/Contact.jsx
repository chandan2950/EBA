"use client";
import React, { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  return (
    <div
      className="section-contact style-2 tf-spacing-7"
      style={{
        backgroundImage: 'url("/images/home/vision.jpeg")', // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Background Overlay for better text readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay
          zIndex: 1,
        }}
      ></div>

      <div className="tf-container" style={{ position: "relative", zIndex: 2 }}>
        <div className="row justify-content-end">
          <div className="col-md-6">
            <form
              className="form-get-in-touch"
              action="https://formspree.io/f/myznlwzz" // Replace YOUR_FORM_ID with your actual Formspree form ID
              method="POST"
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);

                const form = e.target;
                const formData = new FormData(form);

                try {
                  const response = await fetch(
                    "https://formspree.io/f/myznlwzz",
                    {
                      // Replace YOUR_FORM_ID with your actual Formspree form ID
                      method: "POST",
                      body: formData,
                      headers: {
                        Accept: "application/json",
                      },
                    }
                  );

                  if (response.ok) {
                    setSubmitStatus("success");
                    form.reset();
                  } else {
                    setSubmitStatus("error");
                  }
                } catch (error) {
                  setSubmitStatus("error");
                }

                setIsSubmitting(false);
              }}
            >
              <h2 className="text-color-heading title-form fw-5 mb-0">
                Get in touch
              </h2>
              <p className="text-1 text-color-default fw-3">
                We'll get to know you to understand your selling goals, explain
                the selling process so you know what to expect.
              </p>
              <div className="grid-2">
                <fieldset>
                  <label className="text-1 fw-6 mb-12" htmlFor="name3">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    name="name"
                    id="name3"
                    required
                  />
                </fieldset>
                <fieldset>
                  <label className="text-1 fw-6 mb-12" htmlFor="email3">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    id="email3"
                    required
                  />
                </fieldset>
              </div>
              <fieldset className="phone">
                <label className="text-1 fw-6 mb-12" htmlFor="phone">
                  Phone number
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your phone number"
                  name="phone"
                  id="phone"
                  required
                />
              </fieldset>
              <fieldset>
                <label className="text-1 fw-6 mb-12" htmlFor="message3">
                  Message
                </label>
                <textarea
                  name="message"
                  cols={30}
                  rows={10}
                  placeholder="Your message"
                  id="message3"
                  required
                  defaultValue={""}
                />
              </fieldset>
              {/* Status Messages */}
              {submitStatus === "success" && (
                <div
                  style={{
                    background: "#d4edda",
                    color: "#155724",
                    padding: "12px",
                    borderRadius: "8px",
                    marginBottom: "20px",
                    border: "1px solid #c3e6cb",
                  }}
                >
                  ✅ Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  style={{
                    background: "#f8d7da",
                    color: "#721c24",
                    padding: "12px",
                    borderRadius: "8px",
                    marginBottom: "20px",
                    border: "1px solid #f5c6cb",
                  }}
                >
                  ❌ Sorry, there was an error sending your message. Please try
                  again.
                </div>
              )}

              <div className="wrap-btn">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="tf-btn bg-color-primary pd-26 btn-border rounded-cycle"
                  style={{
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    border: "none",
                  }}
                >
                  {isSubmitting ? "Sending..." : "Contact Us"}
                  <i className="icon-arrow-up-right" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
