import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { TextField, TextFieldProps, SxProps, Theme } from "@mui/material";

interface ControlledTextFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  rules?: object;
  type?: string;
  error?: boolean;
  helperText?: string;
  sx?: SxProps<Theme>;
  textFieldProps?: Omit<
    TextFieldProps,
    "name" | "label" | "error" | "helperText" | "sx"
  >;
}

export default function ControlledTextField<T extends FieldValues>({
  name,
  control,
  label,
  rules,
  type = "text",
  error,
  helperText,
  sx,
  textFieldProps,
}: ControlledTextFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          error={error}
          helperText={helperText}
          fullWidth
          sx={sx}
          {...textFieldProps}
        />
      )}
    />
  );
}
