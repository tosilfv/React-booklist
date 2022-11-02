import React from "react";
import { TextField, useTheme } from "@mui/material";

export default function BookInput({
  htmlFor,
  id,
  name,
  value,
  onChange,
  error,
}) {
  const theme = useTheme();
  return (
    <TextField
      label={htmlFor}
      variant="outlined"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      style={theme.bookInput}
      error={error}
      helperText={error && `${name} cannot be empty`}
    />
  );
}
