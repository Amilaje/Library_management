import React from "react";
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
        borderRadius: 4,
        backgroundColor: "transparent",
        transition: "none",

        textDecoration: isSelected ? "underline" : "none",
        textDecorationThickness: "2px",
        textUnderlineOffset: "6px", // 밑줄과 텍스트 간격 조절
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
