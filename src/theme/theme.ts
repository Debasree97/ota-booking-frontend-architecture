/**
 * Material-UI Theme Configuration
 * Defines colors, typography, and component overrides
 */

import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  // You can add more customizations here (palette, etc.)
});

export default theme;
