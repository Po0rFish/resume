import React from "react";
import Button from "@mui/material/Button";
import './Button.sass'
const CustomButton = ({ text, icon }) => {
  return (
    <Button
    
      className="custom_btn"
      endIcon={icon ? <div className="btn_icon_container"></div> : null}
    >
      <span className="btn_text">{text}</span>
    </Button>
  );
};

export default CustomButton;
