package com.books.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CoverGenerateRequest {
    private String title;
    private String content;
    private String apikey;
}
