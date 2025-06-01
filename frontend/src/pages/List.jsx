import { Box, Container, Pagination, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GenreButton from "../components/GenreButton";
import ListBookCard from "../components/ListBookCard";
import axios from "../services/axios";

const genres = [
  "전체",
  "SF·과학",
  "판타지",
  "공포",
  "미스터리·스릴러",
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

  // 페이지 변경 시 상단으로 스크롤
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // API 호출
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const genreValue = selectedGenre === "전체" ? "" : selectedGenre;
        const url = genreValue ? `/books/genre/${selectedGenre}` : "/books";
        const response = await axios.get(url);
        setBooks(response.data);
      } catch (error) {
        console.error("도서 목록 로드 실패: ", error);
        alert("도서 목록을 불러오지 못했습니다.");
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
    <Container maxWidth="lg">
      {/* 장르 선택 버튼 */}
      <Box sx={{ display: "flex", gap: 1, mb: 4 }}>
        {genres.map((genre) => (
          <GenreButton
            key={genre}
            genre={genre}
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
          />
        ))}
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
      {currentBooks.length === 0 && (
        <Box
          sx={{
            mt: 6,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Typography variant="subtitle1">게시된 도서가 없습니다.</Typography>
        </Box>
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
