import { Controller, Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  SxProps,
  Theme,
} from "@mui/material";

interface SelectOption {
  value: string;
  label: string;
}

interface ControlledSelectProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  options: SelectOption[];
  rules?: object;
  error?: boolean;
  helperText?: string;
  sx?: SxProps<Theme>;
}

export default function ControlledSelect<T extends FieldValues>({
  name,
  control,
  label,
  options,
  rules,
  error,
  helperText,
  sx,
}: ControlledSelectProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <FormControl fullWidth error={error} sx={sx}>
          <InputLabel>{label}</InputLabel>
          <Select {...field} label={label}>
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
      )}
    />
  );
}
