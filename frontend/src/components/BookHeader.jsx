import { Box, Stack, Typography } from "@mui/material";

export default function BookHeader({ book }) {
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
      <Box
        component="img"
        src={
          book.coverImageUrl ||
          "https://via.placeholder.com/220x300?text=Book+Cover"
        }
        alt={book.title || "책 표지"}
        sx={{
          width: 240,
          height: 240,
          borderRadius: 1,
          boxShadow:
            "0px 8px 20px rgba(0, 0, 0, 0.15), 0px -4px 12px rgba(0, 0, 0, 0.06)",
          flexShrink: 0,
        }}
      />
      <Box flex={1}>
        <Typography variant="h1" gutterBottom>
          {book.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {book.author}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {book.synopsis}
        </Typography>
        {book.genre && (
          <Typography variant="body2" color="primary.dark">
            {Array.isArray(book.genre)
              ? book.genre.map((g, idx) => (
                  <Typography component="span" key={idx}>
                    {`# ${g.trim()} `}
                  </Typography>
                ))
              : `# ${book.genre}`}
          </Typography>
        )}
      </Box>
    </Stack>
  );
}
