import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    accent: PaletteColor;
  }
  interface PaletteOptions {
    accent?: PaletteColorOptions;
  }
  interface TypeText {
    dark: string;
    light: string;
  }
}
