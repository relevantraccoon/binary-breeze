import React from "react";
import CardHeader from "@mui/material/CardHeader";
import {
  cardHeaderSx,
  cardHeaderTypography,
} from "./CardHeaderComponent.styles";

interface CardHeaderComponentProps {
  title: string;
}

const CardHeaderComponent: React.FC<CardHeaderComponentProps> = ({ title }) => {
  return (
    <CardHeader
      title={title}
      sx={cardHeaderSx}
      titleTypographyProps={cardHeaderTypography}
    />
  );
};

export default CardHeaderComponent;
