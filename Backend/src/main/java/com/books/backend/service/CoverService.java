package com.books.backend.service;

import com.books.backend.dto.CoverGenerateRequest;
import com.books.backend.dto.CoverGenerateResponse;

public interface CoverService {
    CoverGenerateResponse generateCover(Long id, CoverGenerateRequest request);
}