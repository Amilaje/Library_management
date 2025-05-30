import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/axios";
import { Box, Button, Typography } from "@mui/material";

const genres = ["로맨스", "스릴러", "SF", "공포"];

export default function List() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  // 장르 변경 시 페이지 초기화
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedGenre]);

  // API 호출
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const url = selectedGenre ? `/books/genre/${selectedGenre}` : "/books";
        const response = await axios.get(url);
        setBooks(response.data);
      } catch (error) {
        console.error("도서 목록 불러오기 실패:", error);
      }
    };

    fetchBooks();
  }, [selectedGenre]);

  // 페이지네이션 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = books.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(books.length / itemsPerPage);

  return (
    <Box sx={{ padding: "2rem" }}>
      {/* 장르 선택 버튼 */}
      <Box sx={{ marginBottom: "1.5rem" }}>
        {genres.map((genre) => (
          <Button
            key={genre}
            onClick={() => setSelectedGenre(genre === selectedGenre ? "" : genre)}
            sx={{
              marginRight: "1rem",
              fontWeight: selectedGenre === genre ? "bold" : "normal",
              textDecoration: selectedGenre === genre ? "underline" : "none",
              color: selectedGenre === genre ? "black" : "#888"
            }}
          >
            {genre}
          </Button>
        ))}
      </Box>

      {/* 도서 카드 목록 */}
      {currentBooks.map((book) => (
        <Box key={book.id} onClick={() => navigate(`/view/${book.id}`)} sx={{ display: "flex", marginBottom: "2rem", cursor: "pointer", "&:hover": { backgroundColor: "#f9f9f9" }}}>
          <img
            src={book.coverImageUrl}
            alt={book.title}
            style={{
              width: "100px",
              height: "140px",
              borderRadius: "8px",
              objectFit: "cover",
              marginRight: "1.5rem"
            }}
          />
          <Box>
            <Typography variant="h6" gutterBottom>{book.title}</Typography>
            <Typography variant="body2">작가: {book.author}</Typography>
            <Typography variant="body2">조회수: {book.viewCount}</Typography>
            <Typography variant="subtitle2" sx={{ mt: 1, fontWeight: 'bold' }}>
              줄거리
            </Typography>
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
      ))}

      {/* 도서 없음 */}
      {books.length === 0 && (
        <Typography sx={{ color: "#aaa" }}>도서가 없습니다.</Typography>
      )}

      {/* 페이지네이션 */}
      {totalPages >= 1 && (
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 1 }}>
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i + 1}
              variant={i + 1 === currentPage ? "contained" : "outlined"}
              size="small"
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
        </Box>
      )}
    </Box>
  );
}
