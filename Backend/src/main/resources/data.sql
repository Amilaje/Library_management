-- 도서 기본 데이터 (중복 삽입 방지용 MERGE INTO)
MERGE INTO book (title, author, genre, content, synopsis, cover_image_url, view_count)
KEY (title, author) VALUES
('살롱 드 경성 2', '김인혜', '로맨스', '경성 시대 여성 예술가들의 삶과 예술을 담은 이야기',
 '경성의 예술적 분위기 속 여성들의 삶과 사랑을 그린 이야기입니다.',
 'https://i.namu.wiki/i/yWEBZ4eTj1WLxnWSwdc-0-UzYoT5UWhJvhOZx1bVH3Ipk8Fy53jhJaN0Bu5fPMSKvMm3yaS52b5en-QTcxQ5bQ.webp', 0),

('천 개의 파랑', '천선란', 'SF', '인공지능과 인간의 경계에서 존재의 의미를 묻는 소설',
 '사람과 기계 사이, 존재와 감정의 경계를 넘나드는 감동적인 이야기입니다.',
 'https://i.namu.wiki/i/yWEBZ4eTj1WLxnWSwdc-0-UzYoT5UWhJvhOZx1bVH3Ipk8Fy53jhJaN0Bu5fPMSKvMm3yaS52b5en-QTcxQ5bQ.webp', 0),

('불편한 편의점', '김호연', '로맨스', '서울 청파동 골목 편의점에서 벌어지는 따뜻한 이야기',
 '편의점이라는 일상 공간에서 펼쳐지는 사람 냄새 나는 이야기입니다.',
 'https://i.namu.wiki/i/yWEBZ4eTj1WLxnWSwdc-0-UzYoT5UWhJvhOZx1bVH3Ipk8Fy53jhJaN0Bu5fPMSKvMm3yaS52b5en-QTcxQ5bQ.webp', 0),

('문과 남자의 과학 공부', '유시민', '스릴러', '문과 출신 저자가 풀어보는 과학 개념과 삶의 통찰',
 '문과생의 시선으로 풀어낸 과학 이야기로, 누구나 공감할 수 있는 인문학적 과학 에세이입니다.',
 'https://i.namu.wiki/i/yWEBZ4eTj1WLxnWSwdc-0-UzYoT5UWhJvhOZx1bVH3Ipk8Fy53jhJaN0Bu5fPMSKvMm3yaS52b5en-QTcxQ5bQ.webp', 0),

('역행자', '자청', '스릴러', '자기계발을 통해 인생의 방향을 바꾼 한 사람의 이야기',
 '현대 사회에서 자신의 길을 찾는 방법을 제시하는 실전 자기계발서입니다.',
 'https://i.namu.wiki/i/yWEBZ4eTj1WLxnWSwdc-0-UzYoT5UWhJvhOZx1bVH3Ipk8Fy53jhJaN0Bu5fPMSKvMm3yaS52b5en-QTcxQ5bQ.webp', 0),

('여행의 이유', '김영하', '공포', '여행을 통해 삶과 자아를 탐색하는 작가의 성찰',
 '여행을 통해 얻은 깨달음과 기억들을 담은 깊이 있는 에세이입니다.',
 'https://i.namu.wiki/i/yWEBZ4eTj1WLxnWSwdc-0-UzYoT5UWhJvhOZx1bVH3Ipk8Fy53jhJaN0Bu5fPMSKvMm3yaS52b5en-QTcxQ5bQ.webp', 0),

('미드나잇 라이브러리', '매트 헤이그', '로맨스', '삶과 죽음 사이, 무한한 가능성의 도서관에서 펼쳐지는 이야기',
 '다른 삶을 선택할 기회를 주는 라이브러리에서 벌어지는 이야기로 삶의 의미를 되묻습니다.',
 'https://i.namu.wiki/i/yWEBZ4eTj1WLxnWSwdc-0-UzYoT5UWhJvhOZx1bVH3Ipk8Fy53jhJaN0Bu5fPMSKvMm3yaS52b5en-QTcxQ5bQ.webp', 0),

('아몬드', '손원평', '로맨스', '감정을 느끼지 못하는 소년이 세상과 관계를 맺어가는 성장 이야기',
 '감정을 배우고 성장해가는 한 소년의 이야기로, 따뜻한 감동을 줍니다.',
 'https://i.namu.wiki/i/yWEBZ4eTj1WLxnWSwdc-0-UzYoT5UWhJvhOZx1bVH3Ipk8Fy53jhJaN0Bu5fPMSKvMm3yaS52b5en-QTcxQ5bQ.webp', 0),

('코스모스', '칼 세이건', 'SF', '우주의 기원과 생명의 탄생에 대해 인문학적으로 풀어낸 과학 명저',
 '과학과 철학, 인문학이 어우러진 우주에 대한 통찰 가득한 명저입니다.',
 'https://i.namu.wiki/i/yWEBZ4eTj1WLxnWSwdc-0-UzYoT5UWhJvhOZx1bVH3Ipk8Fy53jhJaN0Bu5fPMSKvMm3yaS52b5en-QTcxQ5bQ.webp', 0),

('불안', '알랭 드 보통', '로맨스', '현대 사회의 불안을 다양한 관점에서 조명하고 위로하는 철학적 에세이',
 '우리 안의 불안을 이해하고 다독여주는 현대인을 위한 철학 에세이입니다.',
 'https://i.namu.wiki/i/yWEBZ4eTj1WLxnWSwdc-0-UzYoT5UWhJvhOZx1bVH3Ipk8Fy53jhJaN0Bu5fPMSKvMm3yaS52b5en-QTcxQ5bQ.webp', 0);


/*
기존 데이터가 없을 때만 삽입됨
실행되지 않으면 mv.db 삭제 후 재실행
*/
