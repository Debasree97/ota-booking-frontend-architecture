"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { Flight } from "@src/lib/types";

interface FlightCardProps {
  flight: Flight;
}

export default function FlightCard({ flight }: FlightCardProps) {
  const router = useRouter();

  const handleSelect = () => {
    router.push(`/booking/${flight.id}`);
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h6">{flight.airline}</Typography>
            <Typography color="text.secondary">
              Departure: {flight.departureTime}
            </Typography>
            <Typography color="text.secondary">
              Duration: {flight.duration}
            </Typography>
          </Box>
          <Box sx={{ textAlign: "right" }}>
            <Typography variant="h5" color="primary">
              ${flight.price}
            </Typography>
            <Button variant="contained" onClick={handleSelect} sx={{ mt: 1 }}>
              Select
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
