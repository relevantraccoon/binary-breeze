import React from "react";
import Box from "@mui/material/Box";
import { BsGithub } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { ImMail4 } from "react-icons/im";
import { boxSx, iconStyle } from "./SocialIcons.styles";
import IconButton from "@mui/material/IconButton";

const urls = {
  githubUrl: "https://github.com/relevantraccoon",
  linkedInUrl: "https://www.linkedin.com/in/joakim-karlsson-55800947/",
  email: "mailto:joakim.t.karlsson.1985@gmail.com",
};

// The SocialIcons component renders clickable social media icons
const SocialIcons = () => {
  return (
    <Box sx={boxSx}>
      <IconButton
        component="a"
        href={urls.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ mt: "1em", mr: "0.25em" }}
      >
        <BsGithub style={iconStyle} />
      </IconButton>
      <IconButton
        component="a"
        href={urls.linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ mt: "1em" }}
      >
        <BiLogoLinkedin style={iconStyle} />
      </IconButton>
      <IconButton
        component="a"
        href={urls.email}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ mt: "1em", ml: "0.25em" }}
      >
        <ImMail4 style={iconStyle} />
      </IconButton>
    </Box>
  );
};

export default SocialIcons;
