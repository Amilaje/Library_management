package com.books.backend.service;

import com.books.backend.dto.ChatMessage;
import com.books.backend.dto.ChatRequest;
import com.books.backend.dto.CoverGenerateRequest;
import com.books.backend.dto.CoverGenerateResponse;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
@Slf4j
public class CoverServiceImpl implements CoverService {

    private final WebClient webClient = WebClient.builder()
            .baseUrl("https://api.openai.com/v1/chat/completions")
            .build();

    @Override
    public CoverGenerateResponse generateCover(Long id, CoverGenerateRequest request) {
        String title = request.getTitle();
        String content = request.getContent();
        String apiKey = request.getApikey();

        String prompt = String.format(
                "다음 책 제목과 내용을 바탕으로 한 줄 줄거리로 요약해줘.\n" +
                        "제목: %s\n내용: %s\n->", title, content
        );

        ChatMessage message = new ChatMessage("user", prompt);
        ChatRequest chatRequest = new ChatRequest("gpt-3.5-turbo", Collections.singletonList(message), 0.7);

        String synopsis = webClient.post()
                .header("Authorization", "Bearer " + apiKey)
                .body(Mono.just(chatRequest), ChatRequest.class)
                .retrieve()
                .bodyToMono(String.class)
                .doOnNext(json -> log.info("GPT 응답 JSON: {}", json))
                .map(this::extractSynopsisFromResponse)
                .block();

        String imageUrl = generateImageFromSynopsis(synopsis, title, apiKey);

        return new CoverGenerateResponse(synopsis, imageUrl);
    }

    private String extractSynopsisFromResponse(String json) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode root = objectMapper.readTree(json);
            return root.path("choices").get(0).path("message").path("content").asText();
        } catch (Exception e) {
            log.error("GPT 응답 파싱 실패", e);
            return "요약 실패: 응답 파싱 오류";
        }
    }
    private String generateImageFromSynopsis(String synopsis, String title, String apiKey) {
        try {
            // 1️⃣ synopsis가 한국어일 수 있으므로 영어 번역
            String translationPrompt = String.format(
                    "Translate the following Korean book synopsis into natural and vivid English for use in an image generation prompt.\n\n" +
                            "Title: %s\nSynopsis: %s", title, synopsis
            );

            ChatMessage message = new ChatMessage("user", translationPrompt);
            ChatRequest chatRequest = new ChatRequest("gpt-4", Collections.singletonList(message), 0.7);

            String translationJson = webClient.post()
                    .header("Authorization", "Bearer " + apiKey)
                    .body(Mono.just(chatRequest), ChatRequest.class)
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();

            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode root = objectMapper.readTree(translationJson);
            String translatedSynopsis = root.path("choices").get(0).path("message").path("content").asText();

            log.info("📝 번역된 줄거리: {}", translatedSynopsis);

            // 2️⃣ 이미지 프롬프트 구성
            String prompt = String.format(
                    "Create a high-quality, professionally illustrated book cover for the following story.\n" +
                            "The design should reflect the atmosphere, genre, and emotional tone of the story.\n" +
                            "Use symbolic elements or scenes from the narrative, avoiding literal or random visuals.\n" +
                            "Incorporate the book title '%s' clearly and elegantly as part of the cover design.\n" +
                            "Avoid decorative clutter and focus on meaningful visual storytelling.\n\n" +
                            "Story Summary: \"%s\"",
                    title, translatedSynopsis
            );




            Map<String, Object> requestBody = new HashMap<>();
            requestBody.put("prompt", prompt);
            requestBody.put("n", 1);
            requestBody.put("size", "512x512");
            requestBody.put("response_format", "url");

            String response = WebClient.create("https://api.openai.com/v1/images/generations")
                    .post()
                    .header("Authorization", "Bearer " + apiKey)
                    .header("Content-Type", "application/json")
                    .bodyValue(requestBody)
                    .retrieve()
                    .bodyToMono(String.class)
                    .doOnNext(json -> log.info("🎨 DALL·E 응답 JSON: {}", json))
                    .block();

            JsonNode imageRoot = objectMapper.readTree(response);
            return imageRoot.path("data").get(0).path("url").asText();

        } catch (Exception e) {
            log.error("🔴 이미지 생성 실패", e);
            return "https://example.com/default-cover.jpg";
        }
    }

}
