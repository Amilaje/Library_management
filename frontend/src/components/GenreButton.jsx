import { Button } from "@mui/material";

export default function GenreButton({
  genre,
  selectedGenre,
  setSelectedGenre,
}) {
  const isSelected = selectedGenre === genre;

  return (
    <Button
      variant="text"
      onClick={() => {
        if (!isSelected) {
          setSelectedGenre(genre);
        }
      }}
      sx={(theme) => ({
        fontSize: theme.typography.button.fontSize,
        fontWeight: theme.typography.fontWeightSemibold,
        color: isSelected
          ? theme.palette.primary.main
          : theme.palette.text.primary,
        backgroundColor: "transparent",
        transition: "none",
        textDecoration: isSelected ? "underline" : "none",
        textDecorationThickness: "2px",
        textUnderlineOffset: "6px",
        "&:hover": {
          color: theme.palette.primary.main,
          backgroundColor: "transparent",
          textDecoration: "underline",
          textDecorationThickness: "2px",
          textUnderlineOffset: "6px",
        },
      })}>
      {genre}
    </Button>
  );
}
