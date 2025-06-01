package com.books.backend.dto;

import lombok.Getter;
import lombok.Setter;

/**
 * 도서 등록 및 수정 요청 DTO
 * 사용자가 입력한 도서 정보 (제목, 저자, 장르, 내용)를 받기 위한 클래스
 */
@Getter
@Setter
public class BookCreateRequest {

    private String title;         // 도서 제목
    private String author;        // 저자
    private String genre;         // 장르
    private String content;       // 도서 내용 (본문)
    private String synopsis;      // 시놉시스
    private String coverImageUrl; // 표지 이미지 URL (AI 생성)

}
