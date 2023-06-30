import React from "react";
import Typography from "@mui/material/Typography";
import typographySx from "./TypographyComponent.styles";

interface TypographyComponentProps {
  text: string;
}

// Component used for paragraphs
const TypographyComponent: React.FC<TypographyComponentProps> = ({ text }) => {
  return <Typography sx={typographySx}>{text}</Typography>;
};

export default TypographyComponent;
