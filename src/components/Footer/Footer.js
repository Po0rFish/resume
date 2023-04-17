import { Typography } from "@mui/material";
import React from "react";
import resumeData from "../../utils/resumeData";
import './Footer.sass'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">{resumeData.name}</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Copypasta with some modified by{" "}
          <a href="/" target="_blank">
            Denis Savka
          </a>
          <br />
          Cloned from{" "}
          <a href="https://youtu.be/r4Rr1wSCYMA?t=431" target="_blank">
            Salman Fazal
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
