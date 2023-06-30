import React, { useState } from "react";
import Input from "@mui/material/Input";
import inputContentSx from "./InputComponent.styles";

interface InputComponentProps {
  inputValue: string;
  handleChange: (value: string) => void;
}

// The InputComponent takes in a string and a function to handle changes
// The component itself is a controlled input field
// It updates its value on every change and calls handleChange with the updated value
const InputComponent: React.FC<InputComponentProps> = ({
  inputValue,
  handleChange,
}) => {
  return (
    <Input
      type="text"
      placeholder="Type in a binary number"
      value={inputValue}
      onChange={(e) => {
        handleChange(e.target.value);
      }}
      sx={inputContentSx}
    ></Input>
  );
};

export default InputComponent;
