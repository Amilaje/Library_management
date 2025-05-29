-- 도서 기본 데이터 (중복 삽입 방지용 MERGE INTO)

MERGE INTO book (title, author, genre, content, synopsis, cover_image_url, view_count)
KEY (title, author) VALUES
('살롱 드 경성 2', '김인혜', 'Romance', '경성 시대 여성 예술가들의 삶과 예술을 담은 이야기', NULL, NULL, 0),
('천 개의 파랑', '천선란', 'Science Fiction', '인공지능과 인간의 경계에서 존재의 의미를 묻는 소설', NULL, NULL, 0),
('불편한 편의점', '김호연', 'Drama', '서울 청파동 골목 편의점에서 벌어지는 따뜻한 이야기', NULL, NULL, 0),
('문과 남자의 과학 공부', '유시민', 'Essay', '문과 출신 저자가 풀어보는 과학 개념과 삶의 통찰', NULL, NULL, 0),
('역행자', '자청', 'Self-help', '자기계발을 통해 인생의 방향을 바꾼 한 사람의 이야기', NULL, NULL, 0),
('여행의 이유', '김영하', 'Essay', '여행을 통해 삶과 자아를 탐색하는 작가의 성찰', NULL, NULL, 0),
('미드나잇 라이브러리', '매트 헤이그', 'Fiction', '삶과 죽음 사이, 무한한 가능성의 도서관에서 펼쳐지는 이야기', NULL, NULL, 0),
('아몬드', '손원평', 'Drama', '감정을 느끼지 못하는 소년이 세상과 관계를 맺어가는 성장 이야기', NULL, NULL, 0),
('코스모스', '칼 세이건', 'Science', '우주의 기원과 생명의 탄생에 대해 인문학적으로 풀어낸 과학 명저', NULL, NULL, 0),
('불안', '알랭 드 보통', 'Philosophy', '현대 사회의 불안을 다양한 관점에서 조명하고 위로하는 철학적 에세이', NULL, NULL, 0);

/*
기존 데이터가 없을 때만 삽입됨
실행되지 않으면 mv.db 삭제 후 재실행
*/
