import React, { useEffect, useState, useRef } from 'react';
import './Home.css';
import axios from '../services/axios';
import { useNavigate } from 'react-router-dom';
import GenreButton from "../components/GenreButton";
import logoImage from '../assets/logo.png';

function Home() {
  const navigate = useNavigate();
  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);

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
  const [popularGenre, setPopularGenre] = useState('전체');
  const [latestGenre, setLatestGenre] = useState('전체');
  

  const scroll = (ref, direction) => {
    if (!ref.current) return;
    const { scrollLeft, clientWidth } = ref.current;
    const distance = direction === 'left' ? -clientWidth : clientWidth;
    ref.current.scrollTo({ left: scrollLeft + distance, behavior: 'smooth' });
  };

  const fetchBooks = async (type, genre) => {
    try {
      const url = genre && genre !== '전체'
        ? `/books/${type}?genre=${encodeURIComponent(genre)}`
        : `/books/${type}`;
      const res = await axios.get(url);
      return res.data;
    } catch (e) {
      console.error(`${type} 불러오기 실패`, e);
      return [];
    }
  };

  useEffect(() => {
    const loadPopular = async () => {
      const data = await fetchBooks('popular', popularGenre);
      setPopularBooks(data);
    };
    loadPopular();
  }, [popularGenre]);

  useEffect(() => {
    const loadLatest = async () => {
      const data = await fetchBooks('latest', latestGenre);
      setLatestBooks(data);
    };
    loadLatest();
  }, [latestGenre]);

  const renderSection = (title, books, ref, genre, setGenre) => (
    <section className="book-section">
      <div className="section-header">
        <h2>{title}</h2>
        <div className="section-genres">
          {genres.map((g) => (
            <GenreButton
              key={g}
              genre={g}
              selectedGenre={genre}
              setSelectedGenre={setGenre}
            />
          ))}
        </div>
      </div>
      <div className="carousel">
        <button className="arrow" onClick={() => scroll(ref, 'left')}>←</button>
        <div className="book-list" ref={ref}>
          {books.length > 0 ? books.map((book) => (
            <div
              className="book-card"
              key={book.id}
              onClick={() => navigate(`/view/${book.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className="thumbnail">
                <img
                  src={book.coverImageUrl}
                  alt={book.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                />
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-author">{book.author}</div>
            </div>
          )) : <div className="book-title">도서 없음</div>}
        </div>
        <button className="arrow" onClick={() => scroll(ref, 'right')}>→</button>
      </div>
    </section>
  );

  return (
    <div className="home-page">
      {/* 인기작 섹션 */}
      {renderSection('인기 작품', popularBooks, carouselRef1, popularGenre, setPopularGenre)}

      {/* 신작 섹션 */}
      {renderSection('이달의 신작', latestBooks, carouselRef2, latestGenre, setLatestGenre)}
    </div>
  );
}

export default Home;
