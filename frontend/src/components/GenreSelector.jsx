import React from "react";
import { Box, Typography, Stack, Chip } from "@mui/material";

export default function GenreSelector({ genres, selected, onSelect }) {
  return (
    <Box>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        장르
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {genres.map((genre) => (
          <Chip
            key={genre}
            label={genre}
            onClick={() => onSelect(genre)}
            variant={selected === genre ? "filled" : "outlined"}
          />
        ))}
      </Stack>
    </Box>
  );
}
