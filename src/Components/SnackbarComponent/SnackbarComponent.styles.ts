import { theme } from "../../Themes/theme";
import { SxProps } from "@mui/system";

// Styles for the InputComponent
const snackbarSx: SxProps = () => ({
  "& .MuiAlert-root": {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
});

export default snackbarSx;
