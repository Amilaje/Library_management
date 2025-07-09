import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import GenreButton from "./GenreButton"; // 컴포넌트 이름 주의

export default function CarouselSection({
  title,
  items,
  genres,
  selectedGenre,
  setSelectedGenre,
}) {
  const navigate = useNavigate();

  const renderBook = (book) => (
    <Box
      onClick={() => navigate(`/view/${book.id}`)}
      sx={{
        cursor: "pointer",
        minWidth: 100,
        maxWidth: 160,
        textAlign: "center",
        mx: "auto",
        px: 1,
      }}>
      <Box
        sx={{
          width: "100%",
          aspectRatio: "2 / 3",
          mb: 1,
          bgcolor: "background.paper",
          borderRadius: "4px !important",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
      <Typography variant="subtitle1" fontWeight="semibold" noWrap>
        {book.title}
      </Typography>
      <Typography variant="caption" color="text.secondary" noWrap>
        {book.author}
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ mt: 2 }}>
      {title && (
        <Typography variant="h6" fontWeight="bold" mb={1}>
          {title}
        </Typography>
      )}
      <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
        {genres.map((genre) => (
          <GenreButton
            key={genre}
            genre={genre}
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
          />
        ))}
      </Stack>
      <Carousel items={items} renderItem={renderBook} />
    </Box>
  );
}
