package com.ssafy.bundler.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.bundler.domain.Comment;
import com.ssafy.bundler.domain.Feed;
import com.ssafy.bundler.dto.comment.CommentRequestCreateDto;
import com.ssafy.bundler.dto.comment.CommentRequestUpdateDto;
import com.ssafy.bundler.repository.CommentRepository;
import com.ssafy.bundler.repository.FeedRepository;

@Service
public class CommentService {
	@Autowired
	CommentRepository commentRepository;
	@Autowired
	FeedRepository feedRepository;

	public Comment save(CommentRequestCreateDto commentDto){

		Feed targetFeed = feedRepository.findById(commentDto.getTargetFeedId()).orElseThrow(
			() -> new IllegalArgumentException("잘못된 피드 아이디 입니다. id=" + commentDto.getTargetFeedId())
		);

		Comment comment = Comment.builder()
			.feedId(targetFeed.getFeedId())
			.commentContent(commentDto.getContent())
			.build();

		return commentRepository.save(comment);


	}
	@Transactional
	public Comment update(Long commentId, CommentRequestUpdateDto commentDto){
		Comment comment = commentRepository.findById(commentId).orElseThrow(
			() -> new IllegalArgumentException("댓글을 찾을 수 없습니다. id=" +commentId)
		);
		comment.updateContent(commentDto.getContent());
		return comment;

	}
	@Transactional
	public boolean delete(long commentId) {
		Comment comment = commentRepository.findById(commentId).orElseThrow(
			() -> new IllegalArgumentException("댓글을 찾을 수 없습니다. id=" +commentId)
		);
		commentRepository.delete(comment);
		return true;
	}
}
