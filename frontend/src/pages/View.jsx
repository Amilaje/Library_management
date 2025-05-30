import './View.css';

const View = () => {
  return (
    <div className="view-container">
      {/* 1. 상단 헤더 */}
      <div className="view-header">
        <button className="header-button">홈</button>
        <div className="header-placeholder">무언가 들어갈 공간입니다.</div>
        <button className="header-button">새 도서 등록</button>
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
          <button className="btn-edit">수정</button>
          <button className="btn-delete">삭제</button>
        </div>
      </div>
    </div>
  );
};

export default View;
