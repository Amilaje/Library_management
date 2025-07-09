import { Box, Typography } from "@mui/material";

export default function BookCard({ book, onClick }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        cursor: "pointer",
        py: 1.5,
        alignItems: "flex-start",
        "&:hover": { backgroundColor: "#f9f9f9" },
      }}>
      {/*왼쪽 이미지 영역*/}
      <Box
        sx={{
          width: "120px",
          minWidth: "120px",
          height: "180px",
          overflow: "hidden",
          marginRight: "1.5rem",
        }}>
        <img
          src={
            book.coverImageUrl ||
            "https://via.placeholder.com/220x300?text=Book+Cover"
          }
          alt={book.title || "책 표지"}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      {/*오른쪽 텍스트 영역*/}
      <Box sx={{ flex: 1, mt: 1 }}>
        <Typography variant="h2" sx={{ mb: 1.5 }}>
          {book.title}
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: 0.5, mb: 1.5 }}>
          <Typography variant="body2">작가: {book.author}</Typography>
          <Typography variant="body2">조회수: {book.viewCount}</Typography>
        </Box>
        <Typography
          variant="body1"
          sx={(theme) => ({
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            color: !book.synopsis?.trim()
              ? theme.palette.text.secondary
              : "inherit",
          })}>
          {book.synopsis?.trim() ? book.synopsis : "시놉시스 없음"}
        </Typography>
      </Box>
    </Box>
  );
}
