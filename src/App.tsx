// Imports
import React, { useState } from "react";
import { convertBinaryToDecimal } from "./Utils/convertBinToDec";
import { theme } from "../src/Themes/theme";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import CardComponent from "./Components/Card/CardComponent";
import SnackbarComponent from "./Components/SnackbarComponent/SnackbarComponent";

function App() {
  // Initializes and manages input and output values,
  // and whether or not snackbar is open (opens when user types anything else than 0 or 1)
  const [outputValue, setOutputValue] = useState("0");
  const [inputValue, setInputValue] = useState("");
  const [snackbarIsOpen, setSnackbarIsOpen] = useState(false);

  // Function to handle changes to the input field, filtering input and converting to decimal
  const handleChange = (textFieldVal: string): void => {
    if (/[^01]/.test(textFieldVal)) {
      setSnackbarIsOpen(true);
    }
    // Filter out anything that is not a 1 or 0
    const filteredValue = textFieldVal.replace(/[^01]/g, "");
    setInputValue(filteredValue);
    setOutputValue(convertBinaryToDecimal(filteredValue));
  };

  return (
    // Returns a theme provider and card component with necessary props
    <ThemeProvider theme={theme}>
      <CardComponent
        inputValue={inputValue}
        setInputValue={setInputValue}
        outputValue={outputValue}
        setOutputValue={setOutputValue}
        handleChange={handleChange}
        variant={"elevation"}
        raised={true}
      />
      <SnackbarComponent
        snackbarIsOpen={snackbarIsOpen}
        setSnackbarIsOpen={setSnackbarIsOpen}
      />
    </ThemeProvider>
  );
}

export default App;
