import './View.css';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "../services/axios";

const View = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = async () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      try {
        await axios.delete(`http://localhost:8080/${id}`);
        alert('삭제되었습니다.');
        navigate('/');
      } catch (error) {
        console.error('삭제 실패:', error);
        alert('삭제에 실패했습니다.');
      }
    }
  };

  return (
    <div className="view-container">
      {/* 1. 상단 헤더 */}
      <div className="view-header">
        <Link to="/" className="header-button">홈</Link>
        <div className="header-placeholder">
          <img src="/image/AB.png" alt="상단 이미지" className="header-image" />
        </div>
        <Link to="/publish" className="header-button">새 도서 등록</Link>
      </div>

      {/* 2. 책 이미지 + 설명 */}
      <div className="view-main">
        {/* 좌측: 책 이미지 */}
        <div className="view-image-box">
          <img
            className="view-book-cover"
            src="https://via.placeholder.com/220x300?text=Book+Cover"
            alt="책 표지"
          />
        </div>

        {/* 우측: 책 정보 */}
        <div className="view-info-box">
          <h2 className="book-title">책 제목입니다.</h2>
          <p className="book-author">저자입니다.</p>
          <p className="book-description">
            안녕하세요. 프론트엔드가 참 힘드네요. <br />
            어떻게 잘 만들어지고 있는걸까요? <br /><br />
            저는 잘 모르겠습니다...
          </p>
          <p className="book-tags"># 판타지 # 공포</p>
        </div>
      </div>

      {/* 3. content 박스 */}
      <div className="view-content-box">
        여기에 본문 내용이 들어갑니다.
      </div>

      {/* 4. 하단 정보 + 버튼 */}
      <div className="view-footer">
        <span className="date-info">작성일: 2025-05-29 / 수정일: 2025-05-30</span>
        <div className="view-actions">
          <button className="btn-edit" onClick={handleEdit}>수정</button>
          <button className="btn-delete" onClick={handleDelete}>삭제</button>
        </div>
      </div>
    </div>
  );
};

export default View;
