"use client";

import { useState, useEffect } from "react";
import { Container, Typography, CircularProgress, Box } from "@mui/material";
import FlightCard from "@src/components/results/FlightCard";
import { flights } from "@src/lib/mockData";

export default function ResultsPage() {
  const [loading, setLoading] = useState(true);
  const [flightResults, setFlightResults] = useState(flights);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  if (flightResults.length === 0) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" align="center" color="text.secondary">
          No flights found. Please try a different search.
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Available Flights
      </Typography>
      <Box sx={{ mt: 3 }}>
        {flightResults.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </Box>
    </Container>
  );
}
