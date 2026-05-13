package com.mainServer.main_server.repository;

import com.mainServer.main_server.entity.Message;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

@Repository
public interface MessageRepository extends MongoRepository<Message,String> {
    long countByUserIdAndCreatedAtBetween(
            String userId,
            LocalDateTime startOfDay,
            LocalDateTime endOfDay
    );
}
