import { theme } from "../../Themes/theme";
import { SxProps } from "@mui/system";

// Box styling for the container of social icons
const boxSx: SxProps = {
  display: "flex",
  flexDirection: "row",
};

// Icon stylings
const iconStyle = {
  color: theme.palette.secondary.main,
  fontSize: "2rem",
  margin: "0em 0em 0em 0em",
};

export { boxSx, iconStyle };
