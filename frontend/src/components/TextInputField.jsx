//제목, 저자, 내용 입력 필드드

import React from 'react';
import { TextField, Typography } from '@mui/material';

export default function TextInputField({
  label,
  value,
  onChange,
  multiline = false,
  rows = 1
}) {
  return (
    <>
      <Typography gutterBottom sx={{ mt: multiline ? 3 : 2 }}>
        {label}
      </Typography>
      <TextField
        value={value}
        onChange={e => onChange(e.target.value)}
        fullWidth
        size="small"
        variant="outlined"
        multiline={multiline}
        rows={rows}
        sx={{ bgcolor: '#f5f5f5' }} 
      />
    </>
  );
}