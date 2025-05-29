package com.books.backend.service;

import com.books.backend.domain.Book;
import com.books.backend.dto.*;
import com.books.backend.repository.BookRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * BookService 인터페이스 구현 클래스
 * 도서 등록, 조회, 수정, 삭제 및 인기/신작 목록 조회 등 핵심 로직 처리
 */
@Service
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;

    // 생성자 주입 방식으로 BookRepository를 주입
    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    /**
     * 도서 등록
     * @param request 사용자 입력 (제목, 저자, 장르, 내용)
     * @return 저장된 도서 정보
     */
    @Override
    public BookDetailResponse createBook(BookCreateRequest request) {
        Book book = Book.builder()
                .title(request.getTitle())
                .author(request.getAuthor())
                .genre(request.getGenre())
                .content(request.getContent())
                .viewCount(0) // 초기 조회수는 0으로 설정
                .build();

        Book saved = bookRepository.save(book);
        return toDetailResponse(saved);
    }

    /**
     * 도서 전체 목록 조회
     * @return 도서 리스트
     */
    @Override
    public List<BookListResponse> getAllBooks() {
        return bookRepository.findAll().stream()
                .map(this::toListResponse)
                .collect(Collectors.toList());
    }

    /**
     * 도서 상세 조회 + 조회수 증가
     * @param id 도서 ID
     * @return 도서 상세 정보
     */
    @Override
    @Transactional
    public BookDetailResponse getBookById(Long id) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("도서를 찾을 수 없습니다: id = " + id));

        book.setViewCount(book.getViewCount() + 1); // 조회수 증가
        return toDetailResponse(book);
    }

    /**
     * 도서 수정
     * @param id 도서 ID
     * @param request 수정할 정보
     * @return 수정된 도서 정보
     */
    @Override
    public BookDetailResponse updateBook(Long id, BookCreateRequest request) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("도서를 찾을 수 없습니다: id = " + id));

        book.setTitle(request.getTitle());
        book.setAuthor(request.getAuthor());
        book.setGenre(request.getGenre());
        book.setContent(request.getContent());

        Book updated = bookRepository.save(book);
        return toDetailResponse(updated);
    }

    /**
     * 도서 삭제
     * @param id 도서 ID
     */
    @Override
    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }

    /**
     * 특정 장르의 도서 목록 조회
     */
    @Override
    public List<BookListResponse> getBooksByGenre(String genre) {
        return bookRepository.findByGenre(genre).stream()
                .map(this::toListResponse)
                .collect(Collectors.toList());
    }

    /**
     * 인기 도서 목록 (조회수 기준)
     */
    @Override
    public List<BookListResponse> getPopularBooks() {
        return bookRepository.findTop20ByOrderByViewCountDesc().stream()
                .map(this::toListResponse)
                .collect(Collectors.toList());
    }

    /**
     * 최신 도서 목록 (등록일 기준)
     */
    @Override
    public List<BookListResponse> getLatestBooks() {
        return bookRepository.findTop20ByOrderByCreatedAtDesc().stream()
                .map(this::toListResponse)
                .collect(Collectors.toList());
    }

    /**
     * 장르별 인기 도서
     */
    @Override
    public List<BookListResponse> getPopularBooksByGenre(String genre) {
        return bookRepository.findTop20ByGenreOrderByViewCountDesc(genre).stream()
                .map(this::toListResponse)
                .collect(Collectors.toList());
    }

    /**
     * 장르별 최신 도서
     */
    @Override
    public List<BookListResponse> getLatestBooksByGenre(String genre) {
        return bookRepository.findTop20ByGenreOrderByCreatedAtDesc(genre).stream()
                .map(this::toListResponse)
                .collect(Collectors.toList());
    }

    // 상세 응답 DTO 변환
    private BookDetailResponse toDetailResponse(Book book) {
        return BookDetailResponse.builder()
                .id(book.getId())
                .title(book.getTitle())
                .author(book.getAuthor())
                .genre(book.getGenre())
                .content(book.getContent())
                .synopsis(book.getSynopsis())
                .coverImageUrl(book.getCoverImageUrl())
                .viewCount(book.getViewCount())
                .createdAt(book.getCreatedAt())
                .updatedAt(book.getUpdatedAt())
                .build();
    }

    // 목록 응답 DTO 변환
    private BookListResponse toListResponse(Book book) {
        return BookListResponse.builder()
                .id(book.getId())
                .title(book.getTitle())
                .author(book.getAuthor())
                .genre(book.getGenre())
                .synopsis(book.getSynopsis())
                .coverImageUrl(book.getCoverImageUrl())
                .viewCount(book.getViewCount())
                .createdAt(book.getCreatedAt())
                .build();
    }
}
