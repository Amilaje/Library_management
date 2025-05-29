package com.books.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class ChatRequest {
    private String model;
    private List<ChatMessage> messages;
    private double temperature;
}
