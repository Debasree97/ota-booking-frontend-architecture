"use client";

import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  CircularProgress,
  Box,
  Stack,
} from "@mui/material";
import FlightCard from "@src/components/results/FlightCard";
import { flights } from "@src/lib/mockData";

const PALETTE = {
  primary: "#2D1635",
  ghostWhite: "#F9F7FA",
};

export default function ResultsPage() {
  const [loading, setLoading] = useState(true);
  const [flightResults, setFlightResults] = useState(flights);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        bgcolor: PALETTE.ghostWhite,
        minHeight: "100vh",
        py: 6,
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      <Container maxWidth="md">
        {loading ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "60vh",
              gap: 2,
            }}
          >
            <CircularProgress sx={{ color: "#D49E35" }} />
            <Typography sx={{ color: PALETTE.primary, fontWeight: 500 }}>
              Finding best deals...
            </Typography>
          </Box>
        ) : flightResults.length === 0 ? (
          <Typography
            variant="h5"
            align="center"
            sx={{ color: "#6B5673", mt: 10 }}
          >
            No flights found. Please try a different search.
          </Typography>
        ) : (
          <>
            <Typography
              variant="h4"
              sx={{
                color: PALETTE.primary,
                fontWeight: 700,
                mb: 4,
                fontSize: { xs: "28px", md: "36px" },
              }}
            >
              Available Flights
            </Typography>
            <Stack spacing={2.5}>
              {flightResults.map((flight) => (
                <FlightCard key={flight.id} flight={flight} />
              ))}
            </Stack>
          </>
        )}
      </Container>
    </Box>
  );
}
