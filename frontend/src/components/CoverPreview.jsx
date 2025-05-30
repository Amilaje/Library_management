//ai 표지 미리보기 박스스
import React from 'react';
import { Card, CardMedia, Box, Typography } from '@mui/material';

export default function CoverPreview({ url }) {
  return url ? (
    <Card
      sx={{
        width: 240,
        height: 240,
        mt: 2,
        mx: 'auto',
        boxShadow: 0,
        border: '1px solid #ccc',
        borderRadius: 2,
        overflow: 'hidden'
      }}
    >
      <CardMedia
        component="img"
        image={url}
        alt="AI 표지"
        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </Card>
  ) : (
    <Box
      sx={{
        width: 240,
        height: 240,
        mt: 2,
        mx: 'auto',
        bgcolor: '#f5f5f5',
        border: '1px solid #ccc',
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography color="textSecondary">표지 미리보기</Typography>
    </Box>
  );
}
