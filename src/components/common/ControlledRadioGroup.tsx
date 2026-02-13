import { Controller, Control, FieldValues, Path } from "react-hook-form";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  SxProps,
  Theme,
} from "@mui/material";

interface RadioOption {
  value: string;
  label: string;
}

interface ControlledRadioGroupProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  options: RadioOption[];
  row?: boolean;
  sx?: SxProps<Theme>;
}

export default function ControlledRadioGroup<T extends FieldValues>({
  name,
  control,
  label,
  options,
  row = false,
  sx,
}: ControlledRadioGroupProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl sx={sx}>
          {label && <FormLabel>{label}</FormLabel>}
          <RadioGroup {...field} row={row}>
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    />
  );
}
