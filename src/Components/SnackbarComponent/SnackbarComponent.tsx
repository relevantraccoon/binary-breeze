import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import snackbarSx from "./SnackbarComponent.styles";

interface SnackbarComponentProps {
  snackbarIsOpen: boolean;
  setSnackbarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const SnackbarComponent: React.FC<SnackbarComponentProps> = ({
  snackbarIsOpen,
  setSnackbarIsOpen,
}) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={snackbarIsOpen}
      autoHideDuration={6000}
      onClose={() => {
        setSnackbarIsOpen(false);
      }}
    >
      <Alert severity="error">
        Invalid input! Please enter a binary number containing only 0s and 1s.
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
