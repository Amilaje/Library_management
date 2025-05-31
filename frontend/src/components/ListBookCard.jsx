import React from "react";
import { Box, Typography } from "@mui/material";

export default function BookCard({ book, onClick }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        cursor: "pointer",
        mb: 3,
        "&:hover": { backgroundColor: "#f9f9f9" },
      }}
    >
      <img
        src={book.coverImageUrl}
        alt={book.title}
        style={{
          width: "100px",
          height: "140px",
          borderRadius: "8px",
          objectFit: "cover",
          marginRight: "1.5rem",
        }}
      />
      <Box>
        <Typography variant="h6" gutterBottom>{book.title}</Typography>
        <Typography variant="body2">작가: {book.author}</Typography>
        <Typography variant="body2">조회수: {book.viewCount}</Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#555",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical"
          }}
        >
          {book.synopsis?.trim() ? book.synopsis : "요약 없음"}
        </Typography>
      </Box>
    </Box>
  );
}
