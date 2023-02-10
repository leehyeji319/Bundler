package com.ssafy.bundler.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.bundler.domain.Comment;
import com.ssafy.bundler.dto.comment.CommentCreateResponseDto;
import com.ssafy.bundler.dto.comment.CommentSaveRequestDto;
import com.ssafy.bundler.dto.comment.CommentUpdateRequestDto;
import com.ssafy.bundler.service.CommentService;

/**
 * 댓글 작성,수정,삭제 컨트롤러
 *
 * @author 안태윤
 * @version 1.0
 */
@RestController
public class CommentController {
	@Autowired
	CommentService commentService;

	@PostMapping("/api/v1/comment")
	public ResponseEntity<?> saveComment(@RequestBody CommentSaveRequestDto commentDto) {
		Comment comment = commentService.saveComment(commentDto);
		if (comment == null) {
			return ResponseEntity.ok(new CommentCreateResponseDto(false, "댓글 등록에 실해했습니다."));
		}
		return ResponseEntity.ok(new CommentCreateResponseDto(true, "댓글이 성공적으로 등록됐습니다."));
	}

	@PutMapping("/api/v1/comment/{comment_id}")
	public ResponseEntity<Long> updateComment(@PathVariable("comment_id") long commentId,
		@RequestBody CommentUpdateRequestDto commentDto) {

		Comment comment = commentService.updateComment(commentId, commentDto);
		if (comment == null) {
			return new ResponseEntity<>(0L, HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(comment.getCommentId(), HttpStatus.OK);
	}

	@DeleteMapping("/api/v1/comment/{comment_id}")
	public ResponseEntity<Long> deleteComment(@PathVariable("comment_id") long commentId) {
		boolean result = commentService.deleteComment(commentId);
		if (!result) {
			return new ResponseEntity<>(commentId, HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(commentId, HttpStatus.OK);
	}
}
