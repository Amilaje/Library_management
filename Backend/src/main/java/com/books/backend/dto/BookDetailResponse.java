package com.books.backend.dto;

import lombok.Builder;
import lombok.Getter;

import java.sql.Timestamp;

/**
 * 도서 상세 조회 응답 DTO
 * 모든 도서 필드를 클라이언트에게 반환
 */
@Getter
@Builder
public class BookDetailResponse {

    private Long id;
    private String title;
    private String author;
    private String genre;
    private String content;
    private String synopsis;
    private String coverImageUrl;
    private Integer viewCount;
    private Timestamp createdAt;
    private Timestamp updatedAt;
}
