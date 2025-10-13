import React from "react";

export default function Hero() {
  return (
    <div
      className="page-title home02"
      style={{
        backgroundImage: 'url(/images/home/homesc2.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="content-inner text-center">
              <div className="heading-title">
                <h1 className="title text-white">Your Reliable Guide in Nurturing Home</h1>
                <p className="h6 fw-4 text-white">
                  Thousands of luxury home enthusiasts just like you visit our website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
