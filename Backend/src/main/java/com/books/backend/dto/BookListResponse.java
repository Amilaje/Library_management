package com.books.backend.dto;

import lombok.Builder;
import lombok.Getter;

import java.sql.Timestamp;

/**
 * 도서 목록 조회 응답 DTO
 * 리스트 전용으로 필요한 정보만 일부 반환
 */
@Getter
@Builder
public class BookListResponse {

    private Long id;
    private String title;
    private String author;
    private String genre;
    private String synopsis;
    private String coverImageUrl;
    private Integer viewCount;
    private Timestamp createdAt;
}
