/**
 * Footer component
 *
 * Displays avenues to contact you.
 * Contact information is passed in from the App component that
 * renders the Footer.
 *
 * If a social value has an empty string it will not be displayed.
 */
import React from "react";
import PropTypes from "prop-types";

import gitHubIcon from "../images/socials/github.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import websiteIcon from "../images/socials/website.png";  // Import the website icon for LABIPS
import jevgLogo from "../images/socials/JEVG_Orig_Extend.png";  // Import the JEVG logo

const Footer = (props) => {
  const {
    gitHub,
    linkedIn,
    name,
    primaryColor,
  } = props;

  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
        padding: "5rem 0 3rem",
        backgroundColor: primaryColor,
        width: "100vw"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <a href="https://www.labips.com.mx/" target="_blank" rel="noopener noreferrer">
          <img src={websiteIcon} alt="LABIPS Website" className="socialIcon" />
        </a>
      </div>
      
      <p className="small" style={{ marginTop: 0, color: "white" }}>
        Project - {name} - in collaboration with LABIPS
      </p>
      
      <hr style={{ width: "80%", borderColor: "white" }} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        {gitHub && (
          <a href="https://github.com/JoseEmmanuelVG" target="_blank" rel="noopener noreferrer">
            <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
          </a>
        )}
        {linkedIn && (
          <a href="https://www.linkedin.com/notifications/?filter=all" target="_blank" rel="noopener noreferrer">
            <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
          </a>
        )}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginTop: "1rem",
          color: "white",
        }}
      >
        <img src={jevgLogo} alt="JEVG Logo" style={{ height: "40px" }} />
        <p className="small" style={{ marginTop: 0 }}>
          Page Made By J. E. V. G.
        </p>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  name: "JEVG",
};

Footer.propTypes = {
  gitHub: PropTypes.string,
  linkedIn: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
};

export default Footer;
