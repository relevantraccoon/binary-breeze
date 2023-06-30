import React from "react";
import Card from "@mui/material/Card";
import cardSx from "./CardComponent.styles";
import CardHeaderComponent from "../CardHeaderComponent/CardHeaderComponent";
import CardContentComponent from "../CardContentComponent/CardContentComponent";

interface CardComponentProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  outputValue: string;
  setOutputValue: React.Dispatch<React.SetStateAction<string>>;
  handleChange: (value: string) => void;
  variant: "elevation" | "outlined";
  raised: boolean;
}

// CardComponent: Main component, holds all other components in App
const CardComponent: React.FC<CardComponentProps> = ({
  inputValue,
  setInputValue,
  outputValue,
  setOutputValue,
  handleChange,
  variant,
  raised,
}) => {
  return (
    <Card variant={variant} raised={raised} sx={cardSx}>
      <CardHeaderComponent title={"Binary Breeze: Quick Decimals"} />
      <CardContentComponent
        inputValue={inputValue}
        setInputValue={setInputValue}
        outputValue={outputValue}
        setOutputValue={setOutputValue}
        handleChange={handleChange}
      />
    </Card>
  );
};

export default CardComponent;
