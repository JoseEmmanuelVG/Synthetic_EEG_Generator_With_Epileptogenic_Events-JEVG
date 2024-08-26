/**
 * About component
 *
 * Space for you to describe more about yourself or your project.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 */
import image from "../images/WavesPro_JEVG.svg";

const imageAltText = "purple and blue abstract background";

/**
 * Detailed project description
 */
const description = `
  This work presents a methodology for synthetic EEG signal generation to simulate frequency
  bands, incorporate noise, and emulate specific phenomena. A Python-based tool allows controlled
  signal generation and export in various formats, and features a visualizer for analyzing user-uploaded
  signals in TXT, CSV, or EDF formats. EEGLAB evaluation confirms the accuracy and consistency of the 
  generated signals. The tool supports research, diagnosis, and data analysis models requiring large 
  datasets, particularly in neurological diseases like epilepsy. Pending web hosting, the tool will 
  enhance accessibility and usability for broader applications.
`;

/**
 * Authors of the project
 */
const authors = `
   Laura Ivoone G. J;  
   Blanca T. C;  
   José Emmanuel V. G. 
`;

const About = () => {
  return (
    <section className="padding" id="about" style={{ position: "relative" }}>
      <img className="background" src={image} alt={imageAltText} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", zIndex: -2 }} />
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}></div>
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          width: "60%",
          padding: "4rem",
          margin: "3rem auto",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2>About This Project</h2>
        <p className="large" style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
          {description}
        </p>
        <hr />
        <p style={{ fontSize: "1rem", fontStyle: "italic", marginTop: "2rem" }}>
          <strong>Authors:</strong>
          <br />
          {authors}
        </p>
      </div>
    </section>
  );
};

export default About;
