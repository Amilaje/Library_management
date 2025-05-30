import React, { useState, useRef } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import logoImage from '../assets/logo.png';



function Home() {
  const carouselRef1 = useRef(null)
  const carouselRef2 = useRef(null)
  const [selectedGenre, setSelectedGenre] = useState('로맨스'); 

  const scroll = (ref, direction) => {
    if (!ref.current) return;
    const { scrollLeft, clientWidth } = ref.current;
    const distance = direction === 'left' ? -clientWidth : clientWidth;
    ref.current.scrollTo({ left: scrollLeft + distance, behavior: 'smooth' });
  };
  
  const navigate = useNavigate();
  const genres = ['로맨스', '판타지', '무협'];
  return (
    <div className="home-page">
      <header className="nav-bar">
        <div className="nav-content">
          <button className="home-button"
          onClick={() => navigate('/')}
          >
            홈
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
            {[...Array(10)].map((_, i) => (
              <div
                className="book-card"
                key={`pop-${i}`}
                onClick={() => navigate(`/view/${i + 1}`)}  
                style={{ cursor: 'pointer' }}               
              >
                <div className="thumbnail">thumbnail</div>
                <div className="book-title">도서 제목</div>
                <div className="book-author">작가명</div>
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
            {[...Array(10)].map((_, i) => (
              <div
                className="book-card"
                key={`pop-${i}`}
                onClick={() => navigate(`/view/${i + 1}`)}  
                style={{ cursor: 'pointer' }}            
              >
                <div className="thumbnail">thumbnail</div>
                <div className="book-title">도서 제목</div>
                <div className="book-author">작가명</div>
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
