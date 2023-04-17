import { Grid, Typography } from "@mui/material";
import resumeData from "../../utils/resumeData";
import React from "react";

const Resume = () => {
  return (
    <>
      {/*About me*/}
      <Grid container className="">
        <Grid item className="section_title" xs={12}>
          <span></span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography className="aboutme_text">{resumeData.aboutMe}</Typography>
        </Grid>
      </Grid>
      {/*Education and experiences*/}
      <Grid container className=""></Grid>
      {/*Services*/}
      <Grid container className=""></Grid>
      {/*Skills*/}
      <Grid container className=""></Grid>
      {/*Contact*/}
      <Grid container className=""></Grid>
    </>
  );
};

export default Resume;
