import { Box, Chip, Stack, Typography } from "@mui/material";

export default function GenreSelector({ genres, selected, onSelect }) {
  return (
    <Box>
      <Typography variant="subtitle1" sx={{ ml: 1, mb: 1 }}>
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
