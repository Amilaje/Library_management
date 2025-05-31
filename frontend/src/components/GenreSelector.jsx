//장르 선택 칩 그룹룹

import React from 'react';
import { Paper, Stack, Chip, Typography } from '@mui/material';

export default function GenreSelector({ genres, selected, onSelect }) {
  return (
    <>
      <Typography gutterBottom sx={{ mt: 3 }}>장르 (최대 2개)</Typography>
      <Paper elevation={0} sx={{ bgcolor: '#fff', p: 1, border: '1px solid #ccc' }}>
        <Stack direction="row" flexWrap="wrap" spacing={1}>
          {genres.map(({ value, label }) => {
            const isSel = selected.includes(value);
            return (
              <Chip
                key={value}
                label={label}
                clickable
                onClick={() => onSelect(value)}
                sx={{
                  bgcolor: isSel ? '#26a69a' : '#f0f0f0',
                  color: isSel ? '#fff' : '#333',
                  border: isSel ? '2px solid #80cbc4' : '1px solid #ccc',
                  fontWeight: isSel ? 'bold' : 'normal'
                }}
              />
            );
          })}
        </Stack>
      </Paper>
    </>
  );
}