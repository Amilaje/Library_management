import React, { useEffect, useState, useRef } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import homeLogo from '../assets/homelogo.png';
import axios from 'axios';

function Home() {
  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);
  const [selectedGenre, setSelectedGenre] = useState('로맨스');
  const [books, setBooks] = useState([]);

  const navigate = useNavigate();
  const genres = ['로맨스', '판타지', '무협'];

  const scroll = (ref, direction) => {
    if (!ref.current) return;
    const { scrollLeft, clientWidth } = ref.current;
    const distance = direction === 'left' ? -clientWidth : clientWidth;
    ref.current.scrollTo({ left: scrollLeft + distance, behavior: 'smooth' });
  };

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/books')
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.error('도서 불러오기 실패:', err);
      });
  }, []);

  return (
    <div className="home-page">
      <header className="nav-bar">
        <div className="nav-content">
          <button className="home-button" onClick={() => navigate('/')}>
            <img src={homeLogo} alt="홈" className="home-logo" />
          </button>
          <button className="list-button" onClick={() => navigate('/list')}>
            전체 목록
          </button>
          <img src={logoImage} alt="Logo" className="logo-image" />
          <button
            className="register-button"
            onClick={() => navigate('/publish')}
          >
            새 도서 등록
          </button>
        </div>
      </header>

      <div className="category-tabs">
        {genres.map((genre) => (
          <button
            key={genre}
            className={`tab ${selectedGenre === genre ? 'active' : ''}`}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      <section className="book-section">
        <h2>인기 작품</h2>
        <div className="carousel">
          <button className="arrow" onClick={() => scroll(carouselRef1, 'left')}>←</button>
          <div className="book-list" ref={carouselRef1}>
            {books.map((book) => (
              <div
                className="book-card"
                key={book.id}
                onClick={() => navigate(`/view/${book.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={book.coverImageUrl || '/default-thumbnail.png'}
                  alt={book.title}
                  className="thumbnail"
                  onError={(e) => {
                    e.target.src = '/default-thumbnail.png';
                  }}
                />
                <div className="book-title">{book.title}</div>
                <div className="book-author">{book.author}</div>
              </div>
            ))}
          </div>
          <button className="arrow" onClick={() => scroll(carouselRef1, 'right')}>→</button>
        </div>
      </section>

      <section className="book-section">
        <h2>이달의 신작</h2>
        <div className="carousel">
          <button className="arrow" onClick={() => scroll(carouselRef2, 'left')}>←</button>
          <div className="book-list" ref={carouselRef2}>
            {books.map((book) => (
              <div
                className="book-card"
                key={`new-${book.id}`}
                onClick={() => navigate(`/view/${book.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={book.coverImageUrl || '/default-thumbnail.png'}
                  alt={book.title}
                  className="thumbnail"
                  onError={(e) => {
                    e.target.src = '/default-thumbnail.png';
                  }}
                />
                <div className="book-title">{book.title}</div>
                <div className="book-author">{book.author}</div>
              </div>
            ))}
          </div>
          <button className="arrow" onClick={() => scroll(carouselRef2, 'right')}>→</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
