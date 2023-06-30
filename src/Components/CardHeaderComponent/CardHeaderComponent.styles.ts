import { theme } from "../../Themes/theme";
import { TypographyProps } from "@mui/material/Typography";
import { SxProps } from "@mui/system";

const cardHeaderSx: SxProps = {
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  margin: "0",
  padding: "1em",
  width: "100%",
};

const cardHeaderTypography: TypographyProps = {
  align: "center",
  variant: "h5",
};

export { cardHeaderSx, cardHeaderTypography };
