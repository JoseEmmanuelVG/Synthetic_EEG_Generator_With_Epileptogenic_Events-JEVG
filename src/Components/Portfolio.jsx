/**
 * Portfolio component
 *
 * Highlights some of your creations. These can be designs, websites,
 * open source contributions, articles you've written, and more.
 *
 * This is a great area for you to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Software Versions and Articles lists
 */
const softwareVersions = [
  {
    title: "V1: Generador de EEG Sintético con Eventos Epileptogénicos / Synthetic EEG Generator with Epileptogenic Events",
    description: "Click the link above to access the first version.",
    url: "https://eeg-synth-gen-jevg-083692c3d165.herokuapp.com/generacion-detallada",
  },
  {
    title: "V2: Acute morphology, visualizer for txt, csv, and edf formats",
    description: "This version will introduce a new acute morphology and a visualizer for EEG files in TXT, CSV, and EDF formats. (in the process of web hosting)",
    url: "#", // Replace with actual URL when available
  },
];

const articles = [
  {
    title: "CORE 2023",
    description: "Click the link to view the CORE 2023 article.",
    url: "public/CORE_2023-JEVG.pdf",  // Ruta relativa al archivo PDF en la carpeta public
  },
  {
    title: "CCE 2024",
    description: "Click the link to view the CCE 2024 article.",
    url: "public/CCE_2024-JEVG.pdf",  // Ruta relativa al archivo PDF en la carpeta public
  },
];


const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: "3rem" }}>
        <div style={{ width: "45%" }}>
          <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>Software Versions</h3>
          {softwareVersions.map((software) => (
            <div className="box" key={software.title} style={{ paddingBottom: "1.5rem", border: "1px solid #ddd", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
              <a href={software.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#1a73e8" }}>
                <h4 style={{ fontSize: "1.5rem", fontWeight: "bold", textDecoration: "underline", marginBottom: "0.5rem" }}>{software.title}</h4>
              </a>
              <p className="small" style={{ fontSize: "1.1rem", color: "#555" }}>{software.description}</p>
            </div>
          ))}
        </div>
        <div style={{ width: "45%" }}>
          <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>Articles</h3>
          {articles.map((article) => (
            <div className="box" key={article.title} style={{ paddingBottom: "1.5rem", border: "1px solid #ddd", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
              <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#1a73e8" }}>
                <h4 style={{ fontSize: "1.5rem", fontWeight: "bold", textDecoration: "underline", marginBottom: "0.5rem" }}>{article.title}</h4>
              </a>
              <p className="small" style={{ fontSize: "1.1rem", color: "#555" }}>{article.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
