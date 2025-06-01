package com.books.backend.controller;

import com.books.backend.dto.*;
import com.books.backend.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 도서 API 컨트롤러
 * 클라이언트로부터의 요청을 받아 서비스 계층에 전달
 */
@RestController
@RequestMapping("/api/books")
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    /**
     * 도서 등록
     */
    @PostMapping
    public ResponseEntity<BookDetailResponse> createBook(@RequestBody BookCreateRequest request) {
        return ResponseEntity.ok(bookService.createBook(request));
    }

    /**
     * 전체 도서 목록 조회
     */
    @GetMapping
    public ResponseEntity<List<BookListResponse>> getAllBooks() {
        return ResponseEntity.ok(bookService.getAllBooks());
    }

    /**
     * 도서 상세 조회 (조회수 증가)
     */
    @GetMapping("/{id}")
    public ResponseEntity<BookDetailResponse> getBook(@PathVariable Long id) {
        return ResponseEntity.ok(bookService.getBookById(id));
    }

    /**
     * 도서 수정
     */
    @PutMapping("/{id}")
    public ResponseEntity<BookDetailResponse> updateBook(
            @PathVariable Long id,
            @RequestBody BookCreateRequest request) {
        return ResponseEntity.ok(bookService.updateBook(id, request));
    }

    /**
     * 도서 삭제
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
        return ResponseEntity.noContent().build();
    }

    /**
     * 장르별 도서 조회
     */
    @GetMapping("/genre/{genre}")
    public ResponseEntity<List<BookListResponse>> getBooksByGenre(@PathVariable String genre) {
        return ResponseEntity.ok(bookService.getBooksByGenre(genre));
    }

    /**
     * 인기 도서 목록
     */
    @GetMapping("/popular")
    public ResponseEntity<List<BookListResponse>> getPopularBooks(
            @RequestParam(required = false) String genre) {
        if (genre != null) {
            return ResponseEntity.ok(bookService.getPopularBooksByGenre(genre));
        }
        return ResponseEntity.ok(bookService.getPopularBooks());
    }

    /**
     * 최신 도서 목록
     */
    @GetMapping("/latest")
    public ResponseEntity<List<BookListResponse>> getLatestBooks(
            @RequestParam(required = false) String genre) {
        if (genre != null) {
            return ResponseEntity.ok(bookService.getLatestBooksByGenre(genre));
        }
        return ResponseEntity.ok(bookService.getLatestBooks());
    }
}
