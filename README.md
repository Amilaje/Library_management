# Library Management System

Spring Boot와 React를 활용한 도서 관리 시스템입니다.  
도서 등록, 조회, 수정, 삭제 기능을 API 통신을 통해 구현하였으며, 팀 프로젝트로서 기획부터 구현까지의 과정을 포함합니다.

---

## 📁 프로젝트 구조
```
📁 Library_management/
├── Backend/                  # 백엔드 (Spring Boot)
│   ├── build.gradle          # Gradle 설정
│   ├── settings.gradle       # 프로젝트 설정
│   └── src/                  # Java 소스 및 리소스
│       ├── main/
│       │   ├── java/com/books/backend/   # 백엔드 패키지 구조
│       │   └── resources/                # application.yml, static 등
│       └── test/             # 테스트 코드
│
├── frontend/                 # 프론트엔드 (React)
│   ├── public/               # 정적 파일
│   ├── src/                  # React 컴포넌트 및 스타일
│   │   ├── components/       # 공통 컴포넌트
│   │   ├── pages/            # 라우트 기반 페이지 컴포넌트
│   │   └── App.jsx           # 루트 컴포넌트
│   └── package.json          # 프론트 의존성 및 스크립트
│
├── docs/                     # 발표자료 및 문서 파일
│
└── README.md                 # 프로젝트 설명서
```

📄 회의록 및 문서
* 20조 도서 관리 시스템 회의록 (Notion)

[20조 회의록 (Notion 링크)](https://www.notion.so/20-203b0c68be3980fba07dc9b8c789953f) – 프로젝트 중 회의 내용을 정리한 문서입니다.

---

## 🚀 주요 기능

- 도서 등록 / 조회 / 수정 / 삭제 (CRUD)
- 카테고리 기반 검색 및 필터링
- React와 Axios를 활용한 API 연동
- Spring Boot 기반 RESTful API 설계
- **GPT-3.5-turbo 기반 줄거리 요약 + DALL·E 2 기반 도서 표지 이미지 생성**

---

## 👥 팀원 및 역할

| 이름     | 역할              |
|----------|-------------------|
| 최진호   | 팀장, 백엔드 개발 |
| 황규희   | PPT 제작, 백엔드  |
| 조은형   | 서기, 백엔드 개발 |
| 송현정   | 시간 관리, 프론트 |
| 장우진   | 발표, 프론트      |
| 조하민   | PPT 제작, 프론트 |
| 최태환   | PPT 제작, 프론트 |

## ⚙️ 사용 기술

**Frontend**:  
- React, Axios, React Router, MUI (Material UI), CSS Modules

**Backend**:  
- Java 17, Spring Boot, Gradle, JPA  

**Database**:  
- H2 (인메모리 DB, 개발용)

**Tools**:  
- VSCode, IntelliJ, Postman, GitHub
  
---

## 🔧 Git 작업 규칙 요약

- 항상 push 전에 `git pull`로 최신 코드 동기화
- pull 후 에러 없이 동작하는지 확인
- 문제 없을 때만 자기 브랜치에 push

## 🌿 브랜치 전략

- 개인 브랜치 → `front` / `back` 브랜치 (팀원 간 합의 후 merge)  
- `front` / `back` → `main` 브랜치 (전체 팀원 합의 후 merge)

---

## 📦 프론트엔드 구성 요약

- React 기반의 싱글 페이지 애플리케이션 (SPA)
- 주요 라이브러리: Axios, React Router, MUI, CSS Modules
- 기능 요약:
  - 도서 목록 조회 및 상세 페이지 이동
  - 도서 등록 시 AI 서버 연동 → 줄거리 요약 + 표지 이미지 생성
- 상태 관리: `useState`, `useEffect`, `props` 기반
- 프록시 설정: `package.json`에 `"proxy": "http://localhost:8080"` 지정 → 백엔드 연동 자동화

---

## 📨 백엔드 구성 요약

- Java 17, Spring Boot 3.x 기반
- Gradle 프로젝트, JPA + H2 Database 사용 (개발용 인메모리 DB)
- Entity, DTO, Repository, Service, Controller 계층 분리
- RESTful API 설계 및 구현:
  - `POST /api/books` → 도서 등록
  - `GET /api/books` → 도서 목록 조회
  - `GET /api/books/{id}` → 상세 조회
  - `PUT /api/books/{id}` → 도서 수정
  - `DELETE /api/books/{id}` → 도서 삭제
  - `POST /api/books/generate-cover` → GPT 기반 줄거리 요약 + 이미지 생성
  - `POST /api/books/{id}/generate-cover` → 기존 도서 기반 이미지 재생성
- API 응답: JSON 기반, 프론트엔드와 직관적 연동 가능

---

## ▶️ 실행 방법

### 백엔드 실행
```bash
cd Backend
./gradlew bootRun
```

### 프론트엔드 실행

```bash
cd frontend
yarn install
yarn start
```
