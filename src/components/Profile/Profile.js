import { Typography } from "@mui/material";
import React from "react";
import './Profile.sass'
import CustomTimeline from "../Timeline/Timeline";
const profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name"> Denis</Typography>
        <Typography className="title">Savka</Typography>
      </div>
      <figure className="profile_image">
        <img width={'100%'} height={'100%'} src={require("../../assets/image/me.jpg")}alt="me"/>
      </figure>
      <div className="profile_information"><CustomTimeline/>
      <br/>
      <button>my Button</button>
      </div>
    </div>
  );
};

export default profile;
