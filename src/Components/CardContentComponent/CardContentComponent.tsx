import React from "react";
import CardContent from "@mui/material/CardContent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import InputComponent from "../InputComponent/InputComponent";
import TypographyComponent from "../TypographyComponent/TypographyComponent";
import SocialIcons from "../SocialIcons/SocialIcons";
import cardContentSx from "./CardContentComponent.styles";

interface CardContentComponentProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  outputValue: string;
  setOutputValue: React.Dispatch<React.SetStateAction<string>>;
  handleChange: (value: string) => void;
}

// CardContentComponent: defines the main content of the card
const CardContentComponent: React.FC<CardContentComponentProps> = ({
  inputValue,
  setInputValue,
  outputValue,
  setOutputValue,
  handleChange,
}) => {
  return (
    <CardContent sx={cardContentSx}>
      <TypographyComponent text={outputValue} />
      <InputComponent inputValue={inputValue} handleChange={handleChange} />
      <ButtonComponent
        setOutputValue={setOutputValue}
        setInputValue={setInputValue}
      />
      <TypographyComponent text={"Crafted with code by"} />
      <TypographyComponent text={"Joakim Karlsson, 2023"} />
      <SocialIcons />
    </CardContent>
  );
};

export default CardContentComponent;
