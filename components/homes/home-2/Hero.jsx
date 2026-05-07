import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="page-title home02"
      style={{
        backgroundImage: "url(/images/home/project2.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        position: "relative",
        paddingTop: "clamp(25px, 15vh, 150px)",
      }}
    >
      <div className="tf-container" style={{ marginTop: "clamp(0px, 8vh, 80px)", width: "100%", maxWidth: "100%" }}>
        <div className="row">
          <div className="col-12">
            <div className="content-inner text-center">
              <div className="heading-title">
                <h1 className="title text-white" style={{ 
                  fontSize: "clamp(24px, 4.5vw, 60px)",
                  lineHeight: "1.3",
                  marginBottom: "clamp(8px, 3vh, 25px)",
                  fontWeight: "700"
                }}>
                  Your Reliable Guide in Nurturing Home
                </h1>
                <p className="h6 fw-4 text-white" style={{ 
                  fontStyle: "italic", 
                  fontSize: "clamp(12px, 2.2vw, 18px)",
                  lineHeight: "1.5",
                  maxWidth: "clamp(300px, 90%, 800px)",
                  margin: "0 auto",
                  padding: "0 15px"
                }}>
                
                  At EBA, we believe that giving someone a home is one of life's
                  greatest blessings. With care in every detail and integrity in
                  every step, we nurture each stage of development to create not
                  just houses, but welcoming communities where dreams take root
                  and lives flourish.
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div 
        style={{
          position: "absolute",
          bottom: "clamp(5px, 2vh, 15px)",
          left: "0",
          right: "0",
          padding: "clamp(10px, 2vh, 20px) 10px",
        }}
      >
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div 
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "clamp(8px, 1.5vh, 12px)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* First Row - END-TO-END */}
                <div className="text-center text-white" style={{ padding: "3px", width: "100%" }}>
                  <h5 className="text-white mb-0" style={{ 
                    fontSize: "clamp(11px, 2.8vw, 16px)", 
                    fontWeight: "600", 
                    lineHeight: "1.3",
                    letterSpacing: "0.3px"
                  }}>
                    END-TO-END SELF REDEVELOPMENT & REDEVELOPMENT SOLUTIONS
                  </h5>
                </div>
                
                {/* Second Row - 20+ and 15+ ALWAYS IN SAME ROW */}
                <div style={{ 
                  display: "flex", 
                  gap: "clamp(12px, 3.5vw, 25px)", 
                  alignItems: "center", 
                  justifyContent: "center",
                  flexWrap: "nowrap",
                  width: "100%",
                  overflow: "hidden"
                }}>
                  {/* 20+ Years */}
                  <div className="text-center text-white" style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    gap: "clamp(6px, 2.5vw, 12px)",
                    flex: "0 1 auto"
                  }}>
                    <Image 
                      src="/images/home/laurel-left.png"
                      alt="laurel"
                      width={25}
                      height={50}
                      style={{ 
                        objectFit: "contain",
                        filter: "brightness(0) invert(1)",
                        width: "clamp(20px, 4.5vw, 35px)",
                        height: "auto"
                      }}
                    />
                    
                    <div>
                      <h4 className="text-white mb-0" style={{ 
                        fontSize: "clamp(32px, 8vw, 42px)", 
                        fontWeight: "700",
                        lineHeight: "1"
                      }}>
                        20+
                      </h4>
                      <p className="mb-0" style={{ 
                        fontSize: "clamp(10px, 2.8vw, 14px)", 
                        whiteSpace: "nowrap",
                        marginTop: "4px",
                        fontWeight: "500"
                      }}>
                        Years of Experience
                      </p>
                    </div>
                    
                    <Image 
                      src="/images/home/laurel-right.png"
                      alt="laurel"
                      width={25}
                      height={50}
                      style={{ 
                        objectFit: "contain",
                        filter: "brightness(0) invert(1)",
                        width: "clamp(20px, 4.5vw, 35px)",
                        height: "auto"
                      }}
                    />
                  </div>
                  
                  {/* 15+ Projects */}
                  <div className="text-center text-white" style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    gap: "clamp(6px, 2.5vw, 12px)",
                    flex: "0 1 auto"
                  }}>
                    <Image 
                      src="/images/home/laurel-left.png"
                      alt="laurel"
                      width={25}
                      height={50}
                      style={{ 
                        objectFit: "contain",
                        filter: "brightness(0) invert(1)",
                        width: "clamp(20px, 4.5vw, 35px)",
                        height: "auto"
                      }}
                    />
                    
                    <div>
                      <h4 className="text-white mb-0" style={{ 
                        fontSize: "clamp(32px, 8vw, 42px)", 
                        fontWeight: "700",
                        lineHeight: "1"
                      }}>
                        15+
                      </h4>
                      <p className="mb-0" style={{ 
                        fontSize: "clamp(10px, 2.8vw, 14px)", 
                        whiteSpace: "nowrap",
                        marginTop: "4px",
                        fontWeight: "500"
                      }}>
                        Projects
                      </p>
                    </div>
                    
                    <Image 
                      src="/images/home/laurel-right.png"
                      alt="laurel"
                      width={25}
                      height={50}
                      style={{ 
                        objectFit: "contain",
                        filter: "brightness(0) invert(1)",
                        width: "clamp(20px, 4.5vw, 35px)",
                        height: "auto"
                      }}
                    />
                  </div>
                </div>
                
                {/* Third Row - LEGAL + TECHNICAL and 100% TRANSPARENT in same row on desktop */}
                <div style={{ 
                  display: "flex", 
                  gap: "clamp(15px, 4vw, 30px)", 
                  alignItems: "center", 
                  justifyContent: "center",
                  flexWrap: "wrap",
                  width: "100%"
                }}>
                  <div className="text-center text-white" style={{ padding: "3px" }}>
                    <h5 className="text-white mb-0" style={{ 
                      fontSize: "clamp(11px, 2.8vw, 16px)", 
                      fontWeight: "600", 
                      lineHeight: "1.3",
                      letterSpacing: "0.3px"
                    }}>
                      LEGAL + TECHNICAL + FINANCIAL EXPERTS
                    </h5>
                  </div>
                  
                  <div className="text-center text-white" style={{ padding: "3px" }}>
                    <h5 className="text-white mb-0" style={{ 
                      fontSize: "clamp(11px, 2.8vw, 16px)", 
                      fontWeight: "600", 
                      lineHeight: "1.3",
                      letterSpacing: "0.3px"
                    }}>
                      100% TRANSPARENT PROCESS
                    </h5>
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
