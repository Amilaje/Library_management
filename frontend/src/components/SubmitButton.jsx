//등록 버튼 

import React from 'react';
import { Box, Button } from '@mui/material';

export default function SubmitButton({ onClick }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4, mb: 4 }}>
      <Button
        variant="contained"
        onClick={onClick}
        sx={{
          textTransform: 'none',
          bgcolor: '#26a69a',
          color: '#fff',
          borderRadius: '20px'
        }}
      >
        등록
      </Button>
    </Box>
  );
}