import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button, Box, Stack, TextField } from "@mui/material";
import axios from "../services/axios";

import TextInputField from "../components/TextInputField";
import GenreSelector from "../components/GenreSelector";
import CoverPreview from "../components/CoverPreview";

export default function Publish() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [genre, setGenre] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const genres = [
    "SF·과학",
    "판타지",
    "공포",
    "미스터리·스릴러",
    "역사",
    "로맨스",
    "무협",
  ];

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`/books/${id}`);
        const data = response.data;
        setTitle(data.title);
        setAuthor(data.author);
        setContent(data.content);
        setGenre(data.genre);
        setSynopsis(data.synopsis);
        setCoverImage(data.coverImageUrl);
      } catch (error) {
        console.error("도서 정보 불러오기 실패:", error);
      }
    };

    fetchBook();
  }, [id]);

  // 장르 선택
  const handleGenreSelect = (clicked) => {
    setGenre((prev) => (prev === clicked ? "" : clicked));
  };

  // AI 표지 생성
  const handleRegenerateCover = async () => {
    if (!title || !content || !apiKey) {
      alert("제목, 내용, OpenAI 키를 모두 입력해주세요.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post("/books/generate-cover", {
        title,
        content,
        apikey: apiKey,
      });
      const { coverImageURL, synopsis } = response.data;
      setCoverImage(coverImageURL);
      setSynopsis(synopsis);
    } catch (error) {
      console.error("표지 생성 실패:", error);
      alert("표지 생성에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  // 수정
  const handleUpdate = async () => {
    if (!title || !author || !content || !genre) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    try {
      await axios.put(`/books/${id}`, {
        title,
        author,
        content,
        genre,
        synopsis,
      });
      alert("수정 완료!");
      navigate(`/view/${id}`, { replace: true });
    } catch (error) {
      console.error("수정 실패:", error);
      alert("수정에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Container maxWidth="md">
        <Stack spacing={3}>
          <TextInputField label="제목" value={title} onChange={setTitle} />
          <TextInputField label="작가명" value={author} onChange={setAuthor} />
          <GenreSelector
            genres={genres}
            selected={genre}
            onSelect={handleGenreSelect}
          />
          <TextInputField
            label="내용"
            value={content}
            onChange={setContent}
            multiline
            rows={20}
          />
          <TextInputField label="API Key" value={apiKey} onChange={setApiKey} />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={handleRegenerateCover} disabled={loading}>
              {loading ? "생성 중" : "AI 표지 다시 만들기"}
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: 3, alignItems: "flex-start" }}>
            {/* 왼쪽:  표지 */}
            <CoverPreview url={coverImage} />
            {/* 오른쪽: 시놉시스 */}
            <Box sx={{ flex: 1 }}>
              <TextField
                fullWidth
                variant="outlined"
                label="시놉시스"
                value={synopsis}
                onChange={(e) => setSynopsis(e.target.value)}
                multiline
                rows={8}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={handleUpdate}>수정하기</Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
