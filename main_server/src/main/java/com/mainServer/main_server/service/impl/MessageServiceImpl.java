package com.mainServer.main_server.service.impl;

import com.mainServer.main_server.dto.request.MessageRequestDto;
import com.mainServer.main_server.dto.response.MessageResponseDto;
import com.mainServer.main_server.entity.Message;
import com.mainServer.main_server.entity.User;
import com.mainServer.main_server.repository.MessageRepository;
import com.mainServer.main_server.repository.UserRepository;
import com.mainServer.main_server.service.MessageService;
import com.mainServer.main_server.utils.QueryRAG;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Map;

@Service
@AllArgsConstructor
public class MessageServiceImpl implements MessageService {

    private final MessageRepository messageRepository;
    private final UserRepository userRepository;
    private final QueryRAG queryRAG;

    @Override
    public MessageResponseDto queryMessage(MessageRequestDto messageRequestDto, String apiKey) {

//        String apiKey = messageRequestDto.getApiKey();

        User user = userRepository.findByApiKey(apiKey).orElseThrow(() -> new IllegalArgumentException("Invalid API Key"));

        Long messageCount = messageRepository.countByUserIdAndCreatedAtBetween(
                user.getId(),
                LocalDate.now().atStartOfDay(),
                LocalDate.now().plusDays(1).atStartOfDay()
        );
        if(messageCount > user.getPayment().getAmount()){
            return MessageResponseDto.builder()
                    .query(messageRequestDto.getQuery())
                    .response("Daily message limit exceeded. Please upgrade your plan.")
                    .build();
        }

        Message userMessage = Message.builder()
                .userId(user.getId())
                .content(messageRequestDto.getQuery())
                .sender("USER")
                .build();

        messageRepository.save(userMessage);

        Map<String, Object> response = queryRAG.queryRAG(user.getId(), messageRequestDto.getQuery());

        Message aiMessage = Message.builder()
                .userId(user.getId())
                .content(response.get("answer").toString())
                .sender("AI")
                .build();

        messageRepository.save(aiMessage);

        return MessageResponseDto.builder()
                .query(messageRequestDto.getQuery())
                .response(response.get("answer").toString())
                .isAi(true)
                .build();
    }
}
