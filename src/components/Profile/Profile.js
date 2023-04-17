import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import "./Profile.sass";
import CustomTimeLineSeparator from "../Timeline/Timeline";
import CustomTimeline from "../Timeline/Timeline";
import resumeData from "../../utils/resumeData";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Link } from "react-router-dom";
import { TimelineContent, TimelineItem } from "@mui/lab";
import CustomButton from "../Button/Button";
import { GetApp, GetAppOutlined } from "@mui/icons-material";

const CustomTimelineItem = ({ title, text, link }) => {
  return (
    <TimelineItem className="timeline_content">
      <CustomTimeLineSeparator />
      <TimelineContent className="">
        {link ? (
          <Typography className="timelineItem_text">
            <span>{title}: </span>
            <a href={link} target="_blank">
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className="timelineItem_text">
            <span>{title}: </span>
            {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};
const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name"> {resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile_image">
        <img src={require("../../assets/image/me.jpg")} alt="me" />
      </figure>
      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimelineItem title={"Name"} text={resumeData.name} />
          <CustomTimelineItem title={"Title"} text={resumeData.title} />
          <CustomTimelineItem title={"Email"} text={resumeData.email} />

          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              key={key}
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <br />
        {/* <button>my Button</button> */}
        <div className="button_conteiner">
        <CustomButton text={"Download Cv"} icon={<GetApp />} />

        </div>
      </div>
    </div>
  );
};

export default Profile;
