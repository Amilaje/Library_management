package com.books.backend.controller;

import com.books.backend.dto.CoverGenerateRequest;
import com.books.backend.dto.CoverGenerateResponse;
import com.books.backend.service.CoverService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/books")
@RequiredArgsConstructor
public class CoverController {

    private final CoverService coverService;

    @PostMapping("/{id}/generate-cover")
    public CoverGenerateResponse generateCover(
            @PathVariable Long id,
            @RequestBody CoverGenerateRequest request
    ) {
        return coverService.generateCover(id, request);
    }

    @PostMapping("/generate-cover")
    public CoverGenerateResponse generateCoverWithoutId(
            @RequestBody CoverGenerateRequest request
    ) {
        return coverService.generateCover(null, request);
    }
}