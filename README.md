# Library Management System

Spring Boot와 React를 활용한 도서 관리 시스템입니다.  
도서 등록, 조회, 수정, 삭제 기능을 API 통신을 통해 구현하였으며, 팀 프로젝트로서 기획부터 구현까지의 과정을 포함합니다.

---

## 📁 프로젝트 구조
```
📁 Library_management/
├── .vscode/ # VSCode 설정
│ └── settings.json
│
├── Backend/ # 백엔드 (Spring Boot)
│ └── ... # Spring 소스 코드
│
├── frontend/ # 프론트엔드 (React)
│ └── ... # React 소스 코드
│
├── docs/ # 문서 자료
│
└── README.md # 프로젝트 소개 문서
```
---

## 🚀 주요 기능
도서 등록 / 조회 / 수정 / 삭제 (CRUD)

카테고리 기반 검색 및 필터링

React와 Axios를 활용한 API 연동

Spring Boot 기반 RESTful API 설계

(예정) AI를 활용한 도서 표지 이미지 생성 기능

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
Frontend: React, Axios, CSS Modules

Backend: Java 17, Spring Boot, Gradle, JPA

Database: H2 Database

Tools: VSCode, IntelliJ, Postman, GitHub

---

## 🔧 Git 작업 규칙 요약
항상 push 전에 git pull 로 최신 코드 동기화

pull 후 에러 없이 동작하는지 확인

문제 없을 때만 자기 브랜치에 push
---

### 🌿 브랜치 전략
개인 브랜치 → front / back 브랜치 (팀원 간 합의 후 merge)

front / back → main 브랜치 (전체 팀원 합의 후 merge)

## ⚙️ 백엔드 구성 요약

- Java 17, Spring Boot 3.x
- Gradle 기반 프로젝트
- JPA + H2 Database 사용 (개발용)
- Entity 클래스와 Repository 설계
- REST API 방식으로 CRUD 구현
- Postman을 통한 API 테스트
- `/api/books` 엔드포인트 기반 도서 등록/조회/수정/삭제 기능

