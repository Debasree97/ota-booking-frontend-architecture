"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Box, Button, Paper, Container } from "@mui/material";
import moment from "moment";
import ControlledTextField from "@src/components/common/ControlledTextField";
import ControlledSelect from "@src/components/common/ControlledSelect";
import ControlledRadioGroup from "@src/components/common/ControlledRadioGroup";
import { SearchFormData } from "@src/lib/types";
import { PALETTE } from "@src/theme/theme";
import { DESTINATIONS } from "@src/lib/mockData";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchForm() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SearchFormData>({
    defaultValues: {
      from: DESTINATIONS[0].value,
      to: DESTINATIONS[1].value,
      date: moment().add(5, "days").format("YYYY-MM-DD"),
      fareType: "regular",
    },
  });

  const fromValue = watch("from");
  const toValue = watch("to");
  const isSameDestination = fromValue === toValue;

  const onSubmit = (data: SearchFormData) => {
    router.push("/results");
  };

  return (
    <Container maxWidth="lg">
      {/* Main Search Card */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, md: 4 },
          pt: { xs: 4, md: 8 },
          borderRadius: "24px",
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            alignItems: "flex-start",
          }}
        >
          <ControlledSelect
            name="from"
            control={control}
            label="From"
            options={DESTINATIONS}
            rules={{ required: "Required" }}
            error={!!errors.from}
            sx={{ flex: 1, width: "100%" }}
          />
          <ControlledSelect
            name="to"
            control={control}
            label="To"
            options={DESTINATIONS}
            rules={{ required: "Required" }}
            error={!!errors.to}
            helperText={
              isSameDestination ? "Destination must be different" : ""
            }
            sx={{ flex: 1, width: "100%" }}
          />
          <ControlledTextField
            name="date"
            control={control}
            label="Departure"
            type="date"
            rules={{ required: "Required" }}
            error={!!errors.date}
            textFieldProps={{ InputLabelProps: { shrink: true } }}
            sx={{ flex: 1, width: "100%" }}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={isSameDestination}
            startIcon={<SearchIcon />}
            sx={{
              height: "56px",
              px: { xs: 4, md: 2 },
              minWidth: { xs: "100%", md: "56px" },
              borderRadius: "8px",
              bgcolor: PALETTE.accent,
              fontWeight: "bold",
              "&:hover": { bgcolor: "#B8862D" },
              "&:disabled": { bgcolor: "grey.400" },
              "& .MuiButton-startIcon": {
                margin: { xs: "0 8px 0 -4px", md: 0 },
              },
            }}
          >
            <Box
              component="span"
              sx={{ display: { xs: "inline", md: "none" } }}
            >
              Search
            </Box>
          </Button>
        </Box>

        <Box sx={{ mt: 2 }}>
          <ControlledRadioGroup
            name="fareType"
            control={control}
            options={[
              { value: "regular", label: "Regular Fare" },
              { value: "student", label: "Student Fare" },
            ]}
            row
          />
        </Box>
      </Paper>
    </Container>
  );
}
