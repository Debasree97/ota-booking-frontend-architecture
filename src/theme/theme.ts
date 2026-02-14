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
  secondary: "#E9E2F1", // Soft Lavender (also used as border)
  muted: "#6B5673",
  success: "#2E7D32",
  white: "#FFFFFF",
  textDark: "#2D1635",
  textLight: "#F9F7FA",
};

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: PALETTE.primary,
    },
    secondary: {
      main: PALETTE.secondary,
    },
    text: {
      primary: PALETTE.textDark,
      secondary: PALETTE.muted,
    },
    background: {
      default: PALETTE.white,
      paper: PALETTE.white,
    },
    divider: PALETTE.secondary,
  },
  typography: {
    fontFamily: outfitSans.style.fontFamily,
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
});

export default theme;
