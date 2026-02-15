"use client";

import { useRouter } from "next/navigation";
import { Card, Typography, Button, Box, Stack } from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { PALETTE } from "@src/theme/theme";

export default function FlightCard({ flight }: { flight: any }) {
  const router = useRouter();

  const handleSelect = () => {
    router.push(`/booking/${flight.id}`);
  };

  return (
    <Card
      elevation={0}
      sx={{
        mb: 2.5,
        borderRadius: "24px",
        border: `1px solid ${PALETTE.secondary}`,
        bgcolor: PALETTE.white,
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 12px 40px rgba(45, 22, 53, 0.08)",
          borderColor: PALETTE.accent,
        },
      }}
    >
      <Box
        sx={{
          p: { xs: 2, md: 3 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 3, md: 6 },
        }}
      >
        {/* 1. Airline Info (airline) */}
        <Stack direction="row" spacing={2} sx={{ minWidth: "160px" }}>
          <Box
            sx={{
              width: 44,
              height: 44,
              bgcolor: PALETTE.secondary,
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AirplanemodeActiveIcon
              sx={{ color: PALETTE.primary, fontSize: 20 }}
            />
          </Box>
          <Box>
            <Typography
              sx={{ fontWeight: 600, color: PALETTE.primary, fontSize: "16px" }}
            >
              {flight.origin} - {flight.destination}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: PALETTE.muted, fontSize: "16px" }}
            >
              {flight.airline}
            </Typography>
          </Box>
        </Stack>

        {/* 2. Journey (departureTime, arrivalTime, duration) */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            width: "100%",
            gap: 2,
          }}
        >
          <Box sx={{ textAlign: "left" }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 800,
                color: PALETTE.primary,
              }}
            >
              {flight.departureTime}
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontWeight: 600, color: PALETTE.muted }}
            >
              DEP
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: PALETTE.muted, mb: 1, fontWeight: 700 }}
            >
              {flight.duration}
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "1.5px",
                bgcolor: PALETTE.secondary,
                position: "relative",
              }}
            >
              <AirplanemodeActiveIcon
                sx={{
                  fontSize: "24px",
                  color: PALETTE.accent,
                  position: "absolute",
                  top: -11.2,
                  left: "50%",
                  transform: "translateX(-50%) rotate(90deg)",
                  bgcolor: PALETTE.white,
                  px: 0.5,
                }}
              />
            </Box>
          </Box>

          <Box sx={{ textAlign: "right" }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 800,
                color: PALETTE.primary,
              }}
            >
              {flight.arrivalTime}
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontWeight: 600, color: PALETTE.muted }}
            >
              ARR
            </Typography>
          </Box>
        </Box>

        {/* 3. Pricing (prevPrice, discountedPrice, coupon) */}
        <Stack
          alignItems={{ xs: "center", md: "flex-end" }}
          sx={{ minWidth: "160px" }}
        >
          <Typography
            variant="caption"
            sx={{
              color: PALETTE.muted,
              textDecoration: "line-through",
              fontWeight: 500,
              mb: -0.5,
            }}
          >
            ${flight.prevPrice}
          </Typography>

          <Typography
            variant="h6"
            sx={{ fontWeight: 800, color: PALETTE.primary }}
          >
            ${flight.discountedPrice}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              mb: 1,
            }}
          >
            <AutoAwesomeIcon sx={{ fontSize: 12, color: PALETTE.success }} />
            <Typography
              variant="caption"
              sx={{ color: PALETTE.success, fontWeight: 800 }}
            >
              {flight.coupon} APPLIED
            </Typography>
          </Box>

          <Button
            variant="contained"
            onClick={handleSelect}
            size="small"
            sx={{
              bgcolor: PALETTE.accent,
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: 800,
              px: 4,
              py: 1,
              "&:hover": { bgcolor: PALETTE.primary },
            }}
          >
            Select
          </Button>
        </Stack>
      </Box>
    </Card>
  );
}
