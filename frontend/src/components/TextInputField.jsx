import React from "react";
import { Box, Typography, TextField } from "@mui/material";

export default function TextInputField({
  label,
  value,
  onChange,
  multiline = false,
  rows = 1,
}) {
  return (
    <Box>
      {label && (
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          {label}
        </Typography>
      )}
      <TextField
        fullWidth
        variant="outlined"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        multiline={multiline}
        rows={rows}
      />
    </Box>
  );
}
