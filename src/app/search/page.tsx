/**
 * Search Page
 * Displays flight search form and initiates search
 */

import { Box } from "@mui/material";
import SearchForm from "@src/components/search/SearchForm";
import theme from "@src/theme/theme";

export default function SearchPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        // <insert bg>
        backgroundImage: `linear-gradient(rgba(45, 22, 53, 0.5), rgba(45, 22, 53, 0.2)), url('/heroBG.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        pt: 10,
        pb: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
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
