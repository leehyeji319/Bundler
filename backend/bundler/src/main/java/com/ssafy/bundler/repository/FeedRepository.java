package com.ssafy.bundler.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.bundler.domain.Feed;

public interface FeedRepository extends JpaRepository<Feed, Long> {
	
}
