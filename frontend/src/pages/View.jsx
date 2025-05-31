import './View.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "../services/axios";
import { useEffect, useState } from 'react';
import Header from '../components/AppBar';  // ← 상단 헤더 import 추가

const View = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => {
        console.error('책 정보를 불러오는 데 실패했습니다:', err);
        alert('책 정보를 불러오지 못했습니다.');
      });
  }, [id]);

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = async () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      try {
        await axios.delete(`/books/${id}`);
        alert('삭제되었습니다.');
        navigate('/');
      } catch (error) {
        console.error('삭제 실패:', error);
        alert('삭제에 실패했습니다.');
      }
    }
  };

  if (!book) return <div className="view-container">로딩 중...</div>;

  return (
    <div className="view-container">
      <Header />  {/* 여기 공통 헤더 삽입 */}

      {/* 2. 책 이미지 + 설명 */}
      <div className="view-main">
        <div className="view-image-box">
          <img
            className="view-book-cover"
            src={book.coverImageUrl || 'https://via.placeholder.com/220x300?text=Book+Cover'}
            alt={book.title || "책 표지"}
          />
        </div>
        <div className="view-info-box">
          <h2 className="book-title">{book.title}</h2>
          <p className="book-author">{book.author}</p>
          <p className="book-description">{book.synopsis}</p>
          {book.genre && (
            <p className="book-tags">
              {book.genre.split(',').map((g, idx) => (
                <span key={idx}>#{g.trim()} </span>
              ))}
            </p>
          )}
        </div>
      </div>

      {/* 3. 본문 내용 */}
      <div className="view-content-box">
        {book.content}
      </div>

      {/* 4. 하단 정보 */}
      <div className="view-footer">
        <span className="date-info">
          작성일: {book.createdAt || '알 수 없음'} / 수정일: {book.updatedAt || '알 수 없음'}
        </span>
        <div className="view-actions">
          <button className="btn-edit" onClick={handleEdit}>수정</button>
          <button className="btn-delete" onClick={handleDelete}>삭제</button>
        </div>
      </div>
    </div>
  );
};

export default View;
