package com.bohdan.klochko.video_streaming_service.repository;

import com.bohdan.klochko.video_streaming_service.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findBySub(String sub);
}
