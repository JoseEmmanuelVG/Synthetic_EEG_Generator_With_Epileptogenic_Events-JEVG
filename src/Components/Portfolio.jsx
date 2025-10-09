/**
 * Portfolio component
 *
 * Highlights some of your creations. These can be designs, websites,
 * open source contributions, articles you've written, and more.
 */

import React from "react";

/** 🔗 Utilidad para enlaces externos */
const ExternalLink = ({ href, children, style }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none", color: "#1a73e8", ...style }}
    onClick={(e) => {
      // Si algún handler global hace preventDefault, intenta abrir manualmente:
      if (e.defaultPrevented) {
        try {
          window.open(href, "_blank", "noopener,noreferrer");
        } catch {}
      }
    }}
    aria-label={`Open external link: ${href}`}
  >
    {children}
  </a>
);

// 🧭 URLs
const GITHUB_REPO_URL = "https://github.com/JoseEmmanuelVG/EEG_Sintetic_MorphoGenerator?tab=readme-ov-file";

/**
 * Software Versions and Articles lists
 */
const softwareVersions = [
  {
    title:
      "V1: Generador de EEG Sintético con Eventos Epileptogénicos / Synthetic EEG Generator with Epileptogenic Events",
    description: "Click the link above to access the first version.",
    url: "https://eeg-synth-gen-jevg-083692c3d165.herokuapp.com/generacion-detallada",
  },
  {
    title: "V2: Acute morphology, visualizer for txt, csv, and edf formats",
    description:
      "This version will introduce a new acute morphology and a visualizer for EEG files in TXT, CSV, and EDF formats. (in the process of web hosting)",
    url: "#", // Replace with actual URL when available
  },
];

const articles = [
  {
    title: "CORE 2023",
    description: "Click the link to view the CORE 2023 article.",
    url: "https://www.rcs.cic.ipn.mx/2024_153_5/Synthetic%20EEG%20Signal%20Generator%20of%20Morphologies%20Associated%20with%20Epileptogenic%20Events.pdf",
  },
  {
    title: "Newspaper Core Issue",
    description: "Click the link to view the newspaper issue.",
    url: "https://www.rcs.cic.ipn.mx/2024_153_5/",
  },
  {
    title: "CCE 2024 (IEEE Xplore)",
    description:
      "Click the link to view the CCE 2024 article on IEEE Xplore.",
    url: "https://ieeexplore.ieee.org/document/10770922",
  },
];

const buttonStyle = {
  padding: "0.75rem 1.25rem",
  borderRadius: "8px",
  border: "1px solid #1a73e8",
  background: "#1a73e8",
  color: "#fff",
  fontWeight: 600,
  textDecoration: "none",
  display: "inline-block",
};

const cardStyle = {
  paddingBottom: "1.5rem",
  border: "1px solid #ddd",
  padding: "1rem",
  borderRadius: "8px",
  marginBottom: "1rem",
};

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>

      {/* 🔘 Botón al repositorio de GitHub */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
        <ExternalLink href={GITHUB_REPO_URL}>
          <span style={buttonStyle}>Ver repositorio en GitHub</span>
        </ExternalLink>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: "3rem",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <div style={{ width: "45%", minWidth: 320, flex: "1 1 320px" }}>
          <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>
            Software Versions
          </h3>
          {softwareVersions.map((software) => (
            <div className="box" key={software.title} style={cardStyle}>
              <ExternalLink href={software.url}>
                <h4
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    marginBottom: "0.5rem",
                  }}
                >
                  {software.title}
                </h4>
              </ExternalLink>
              <p className="small" style={{ fontSize: "1.1rem", color: "#555" }}>
                {software.description}
              </p>
            </div>
          ))}
        </div>

        <div style={{ width: "45%", minWidth: 320, flex: "1 1 320px" }}>
          <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>Articles</h3>
          {articles.map((article) => (
            <div className="box" key={article.title} style={cardStyle}>
              <ExternalLink href={article.url}>
                <h4
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    marginBottom: "0.5rem",
                  }}
                >
                  {article.title}
                </h4>
              </ExternalLink>
              <p className="small" style={{ fontSize: "1.1rem", color: "#555" }}>
                {article.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
