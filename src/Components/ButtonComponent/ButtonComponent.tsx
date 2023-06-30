import React from "react";
import Button from "@mui/material/Button";
import buttonContentSx from "./ButtonComponent.styles";

interface ButtonComponentProps {
  setOutputValue: React.Dispatch<React.SetStateAction<string>>;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

// ButtonComponent: A button that clears the input and output values
const ButtonComponent: React.FC<ButtonComponentProps> = ({
  setOutputValue,
  setInputValue,
}) => {
  return (
    <Button
      variant="contained"
      sx={buttonContentSx}
      onClick={() => {
        setOutputValue("0");
        setInputValue("");
      }}
    >
      Clear and Start Over
    </Button>
  );
};

export default ButtonComponent;
