import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, Container, Pagination } from "@mui/material";
import axios from "../services/axios";

import ListBookCard from "../components/ListBookCard";

const genres = [
  "전체",
  "SF/과학",
  "판타지",
  "공포",
  "미스터리/스릴러",
  "역사",
  "로맨스",
  "무협",
];

export default function List() {
  const [selectedGenre, setSelectedGenre] = useState("전체");
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
        const genreValue = selectedGenre === "전체" ? "" : selectedGenre;
        const url = genreValue ? `/books/genre/${selectedGenre}` : "/books";
        const response = await axios.get(url);
        setBooks(response.data);
      } catch (error) {
        console.error("도서 목록 불러오기 실패: ", error);
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
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* 장르 선택 버튼 */}
      <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
        {genres.map((genre) => {
          const isAll = genre === "전체";
          const genreValue = isAll ? "" : genre;

          return (
            <Button
              key={genre}
              variant={selectedGenre === genre ? "contained" : "outlined"}
              onClick={() => {
                if (selectedGenre !== genre) {
                  setSelectedGenre(genre);
                }
              }}
              sx={{
                fontWeight: selectedGenre === genre ? "bold" : "normal",
                borderRadius: 4,
              }}>
              {genre}
            </Button>
          );
        })}
      </Box>

      {/* 도서 카드 목록 */}
      {currentBooks.map((book) => (
        <ListBookCard
          key={book.id}
          book={book}
          onClick={() => navigate(`/view/${book.id}`)}
        />
      ))}

      {/* 도서 없음 */}
      {books.length === 0 && (
        <Typography variant="subtitle1">게시된 작품이 없습니다.</Typography>
      )}

      {/* 페이지네이션 */}
      {totalPages >= 1 && (
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(_, page) => setCurrentPage(page)}
            color="primary"
          />
        </Box>
      )}
    </Container>
  );
}
