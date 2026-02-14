/**
 * Search Page
 * Displays flight search form and initiates search
 */

import { Box } from "@mui/material";
import Image from "next/image";
import SearchForm from "@src/components/search/SearchForm";
import theme from "@src/theme/theme";

export default function SearchPage() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        pt: 10,
        pb: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Optimized Background Image */}
      <Image
        src="/heroBG.jpg"
        alt="Hero Background"
        fill
        priority
        quality={75}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          zIndex: -1,
        }}
      />

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(rgba(45, 22, 53, 0.5), rgba(45, 22, 53, 0.2))",
          zIndex: -1,
        }}
      />

      <h1
        style={{
          color: theme.palette.text.light,
          fontWeight: "normal",
          fontSize: "48px",
        }}
      >
        Welcome
      </h1>
      <h2
        style={{
          color: theme.palette.text.light,
          fontWeight: 300,
          fontSize: "28px",
          marginBottom: 24,
        }}
      >
        Your Next Destination, Simplified.
      </h2>
      <SearchForm />
    </Box>
  );
}
