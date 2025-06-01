package com.books.backend.repository;

import com.books.backend.domain.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Book 엔티티에 대한 DB 접근을 처리하는 JPA 리포지토리
 */
@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    // 장르로 책 리스트 검색
    List<Book> findByGenre(String genre);

    // 조회수 기준 내림차순 인기순 정렬 (최신순은 서비스 계층에서 처리해도 됨)
    List<Book> findTop20ByOrderByViewCountDesc();

    // 생성일 기준 내림차순 신작 정렬
    List<Book> findTop20ByOrderByCreatedAtDesc();

    // 장르 + 인기순
    List<Book> findTop20ByGenreOrderByViewCountDesc(String genre);

    // 장르 + 신작순
    List<Book> findTop20ByGenreOrderByCreatedAtDesc(String genre);
}
