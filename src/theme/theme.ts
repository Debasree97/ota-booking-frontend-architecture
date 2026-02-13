/**
 * Material-UI Theme Configuration
 * Defines colors, typography, and component overrides
 */

import { createTheme } from "@mui/material/styles";
import { Outfit } from "next/font/google";

const outfitSans = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const PALETTE = {
  primary: "#2D1635", // Dark Plum
  accent: "#D49E35", // Golden Ochre
  secondary: "#E9E2F1", // Soft Lavender
  textDark: "#2D1635",
  textLight: "#F9F7FA",
};

const theme = createTheme({
  palette: {
    primary: {
      main: PALETTE.primary,
    },
    secondary: {
      main: PALETTE.secondary,
    },
    accent: {
      main: PALETTE.accent,
      contrastText: "#fff",
    },
    text: {
      dark: PALETTE.textDark,
      light: PALETTE.textLight,
    },
  },
  typography: {
    fontFamily: outfitSans.style.fontFamily,
  },
});

export default theme;
