import { Box, Container, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CarouselSection from "../components/CarouselSection";
import axios from "../services/axios";

function Home() {
  const navigate = useNavigate();

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

  const [popularBooks, setPopularBooks] = useState([]);
  const [latestBooks, setLatestBooks] = useState([]);
  const [popularGenre, setPopularGenre] = useState("전체");
  const [latestGenre, setLatestGenre] = useState("전체");

  const fetchBooks = async (type, genre) => {
    try {
      const url =
        genre && genre !== "전체"
          ? `/books/${type}?genre=${encodeURIComponent(genre)}`
          : `/books/${type}`;
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      console.error(`${type} 로드 실패:`, error);
      return [];
    }
  };

  useEffect(() => {
    const loadPopular = async () => {
      const data = await fetchBooks("popular", popularGenre);
      setPopularBooks(data);
    };
    loadPopular();
  }, [popularGenre]);

  useEffect(() => {
    const loadLatest = async () => {
      const data = await fetchBooks("latest", latestGenre);
      setLatestBooks(data);
    };
    loadLatest();
  }, [latestGenre]);

  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      {/* 인기작 섹션 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          인기 작품
        </Typography>
        <CarouselSection
          title=""
          items={popularBooks}
          genres={genres}
          selectedGenre={popularGenre}
          setSelectedGenre={setPopularGenre}
        />
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* 신작 섹션 */}
      <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          이달의 신작
        </Typography>
        <CarouselSection
          title=""
          items={latestBooks}
          genres={genres}
          selectedGenre={latestGenre}
          setSelectedGenre={setLatestGenre}
        />
      </Box>
    </Container>
  );
}

export default Home;
