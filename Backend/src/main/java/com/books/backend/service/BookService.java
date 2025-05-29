package com.books.backend.service;

import com.books.backend.dto.*;

import java.util.List;

/**
 * 도서 서비스 인터페이스
 * 도서 CRUD 및 조회 관련 기능 정의
 */
public interface BookService {

    // 도서 등록
    BookDetailResponse createBook(BookCreateRequest request);

    // 도서 전체 목록 조회
    List<BookListResponse> getAllBooks();

    // 도서 상세 조회 (+viewCount 증가)
    BookDetailResponse getBookById(Long id);

    // 도서 수정
    BookDetailResponse updateBook(Long id, BookCreateRequest request);

    // 도서 삭제
    void deleteBook(Long id);

    // 장르별 도서 목록
    List<BookListResponse> getBooksByGenre(String genre);

    // 인기 도서
    List<BookListResponse> getPopularBooks();

    // 최신 도서
    List<BookListResponse> getLatestBooks();

    // 장르별 인기 도서
    List<BookListResponse> getPopularBooksByGenre(String genre);

    // 장르별 최신 도서
    List<BookListResponse> getLatestBooksByGenre(String genre);
}
