package com.books.backend.domain;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Timestamp;

/**
 * Book 엔티티 클래스
 * 도서 정보를 나타내며, JPA를 통해 H2 DB 테이블로 매핑됨
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Book {

    /** 기본키 - 자동 증가 Long 타입 */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** 도서 제목 */
    private String title;

    /** 도서 저자 */
    private String author;

    /** 줄거리 - AI가 생성한 요약 텍스트 (최대 1000자) */
    @Column(length = 1000)
    private String synopsis;

    /** 도서 원문 내용 - 사용자 입력 (TEXT 타입) */
    @Column(columnDefinition = "TEXT")
    private String content;

    /** 장르 - 단일 문자열 */
    private String genre;

    /** 표지 이미지 URL - AI 생성 이미지 링크 저장 */
    @Column(length = 1000)
    private String coverImageUrl;

    /** 상세 조회 수 - 조회 시 자동 증가 */
    private Integer viewCount;

    /** 생성 시각 - 자동 저장 */
    @CreationTimestamp
    private Timestamp createdAt;

    /** 수정 시각 - 자동 업데이트 */
    @UpdateTimestamp
    private Timestamp updatedAt;
}
