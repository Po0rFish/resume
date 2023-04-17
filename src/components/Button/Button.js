import React from "react";
import Button from "@mui/material/Button";
import './Button.sass'
const CustomButton = ({ text, icon }) => {

  return (
    <Button
      className="custom_btn"
      endIcon={icon}
    >
      <span className="btn_text">{text}</span>
    </Button>
  );
};

export default CustomButton;
