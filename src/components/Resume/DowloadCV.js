/* eslint-disable arrow-body-style */
import React from 'react';

const DownloadCVButton = () => {
  return (
    <a
      href="/resume/Resume.pdf"
      download="Umair_Shaikh_CV.pdf"
      className="download-cv-btn"
    >
      Download CV
    </a>
  );
};

export default DownloadCVButton;
