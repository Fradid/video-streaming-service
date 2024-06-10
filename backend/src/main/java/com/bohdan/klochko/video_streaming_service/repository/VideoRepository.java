package com.bohdan.klochko.video_streaming_service.repository;

import com.bohdan.klochko.video_streaming_service.model.Video;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface VideoRepository extends MongoRepository<Video, String> {
}
