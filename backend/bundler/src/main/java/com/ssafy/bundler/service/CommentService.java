package com.ssafy.bundler.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.bundler.domain.Comment;
import com.ssafy.bundler.domain.User;
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

		if(feedRepository.findById(commentDto.getTargetFeedId()).isPresent()){
			Comment comment = new Comment().builder()
				.feedId(commentDto.getTargetFeedId())
				.commentContent(commentDto.getContent())
				.writer(new User().builder().userId(1L).build())
				.build();

			return commentRepository.save(comment);
		}else{
			return null;
		}

	}
	@Transactional
	public Comment update(Long commentId, CommentRequestUpdateDto commentDto){
		Comment comment;
		if(commentRepository.findById(commentId).isPresent()){

			comment = commentRepository.findById(commentId).get();
			comment.updateContent(commentDto.getContent());
			return comment;
		}else{
			return null;
		}
	}
	@Transactional
	public boolean delete(long commentId) {
		Comment comment;
		if(commentRepository.findById(commentId).isPresent()){
			comment = commentRepository.findById(commentId).get();
			commentRepository.delete(comment);
			return true;
		}else{

			return false;
		}
	}
}
