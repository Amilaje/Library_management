 import React, { useState } from 'react';
import { Box, Container, Button } from '@mui/material';
import Header from '../components/Header';
import TextInputField from '../components/TextInputField';
import GenreSelector from '../components/GenreSelector';
import CoverPreview from '../components/CoverPreview';
import SubmitButton from '../components/SubmitButton';
export default function Publish() {


  // 1) 상태 선언
  const [title, setTitle]       = useState('');
  const [author, setAuthor]     = useState('');
  const [genres, setGenres]     = useState([]);
  const [content, setContent]   = useState('');
  const [apiKey, setApiKey]     = useState('');
  const [coverImage, setCoverImage] = useState(null);

  // 2) 장르 리스트 (한글 라벨)
  const GENRES = [
    { value: 'Novel',     label: '소설' },
    { value: 'Romance',   label: '로맨스' },
    { value: 'Mystery',   label: '추리·미스터리' },
    { value: 'Fantasy',   label: '판타지' },
    { value: 'SelfHelp',  label: '자기계발' },
    { value: 'History',   label: '역사' },
    { value: 'Science',   label: '과학' },
    { value: 'Philosophy',label: '철학' },
    { value: 'Poetry',    label: '시' },
    { value: 'Essay',     label: '에세이' },
    { value: 'Children',  label: '아동문학' },
    { value: 'Art',       label: '예술' }
  ];

  // 3) 최대 2개 선택
  const handleGenreSelect = val => {
    if (genres.includes(val)) {
      setGenres(genres.filter(g => g !== val));
    } else if (genres.length < 2) {
      setGenres([...genres, val]);
    }
  };

  // 4) AI 표지 생성 (추후 API 연동)
  const handleGenerateCover = () => {
    // placeholder 이미지
    setCoverImage('https://placehold.co/240x240?text=AI+Cover');
  };

  // 5) 등록 (나중에 axios로 연동)
  const handleRegister = () => {
    console.log({ title, author, genres, content, apiKey, coverImage });
    alert('등록 클릭! (콘솔 로그 확인)');
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fafafa' }}>
      <Header />

      <Container maxWidth="md">
        <TextInputField label="제목" value={title} onChange={setTitle} />
        <TextInputField label="작가명" value={author} onChange={setAuthor} />

        <GenreSelector
          genres={GENRES}
          selected={genres}
          onSelect={handleGenreSelect}
        />

        <TextInputField
          label="내용"
          value={content}
          onChange={setContent}
          multiline
          rows={8}
        />

        <TextInputField
          label="API Key"
          value={apiKey}
          onChange={setApiKey}
        />

        {/* 표지 생성 버튼 */}
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Button
            onClick={handleGenerateCover}
            sx={{
              textTransform: 'none',
              bgcolor: '#26a69a',
              color: '#fff',
              borderRadius: '20px',
              px: 3,
              py: 1
            }}
          >
            표지 생성
          </Button>
        </Box>

        <CoverPreview url={coverImage} />

        <SubmitButton onClick={handleRegister} />
      </Container>
    </Box>
  );

}
