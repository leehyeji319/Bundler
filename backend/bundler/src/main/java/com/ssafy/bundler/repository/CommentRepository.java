package com.ssafy.bundler.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.bundler.domain.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {

	List<Comment> findAllByFeedId(Long feedId);
}
