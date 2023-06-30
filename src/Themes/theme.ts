import { createTheme, PaletteOptions } from "@mui/material/styles";

interface CustomPaletteOptions extends PaletteOptions {
  customPalette: {
    tertiary: string;
    onTertiary: string;
    outline: string;
    surfaceVariant: string;
    onSurfaceVariant: string;
  };
}

// Theme to be used throughout app
const theme = createTheme({
  palette: {
    primary: {
      main: "#6750A4",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#625B71",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#B3261E",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFBFE",
      paper: "#FFFBFE",
    },
    text: {
      primary: "#1C1B1F",
      secondary: "#1C1B1F",
    },
    customPalette: {
      tertiary: "#EFB8C8",
      onTertiary: "#492532",
      outline: "#938F99",
      surfaceVariant: "#49454F",
      onSurfaceVariant: "#CAC4D0",
    },
  } as CustomPaletteOptions,
});

export { theme };
