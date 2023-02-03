package com.ssafy.bundler.dto.feed;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
public class FeedCommentResponseDto {

	@JsonIgnore
	private Long commentId;
	private Long feedId;
	private Long commentWriterId;
	private String commentWriterNickname;
	private String commentWriterProfileImage;
	private String commentContent;
	private LocalDateTime updatedAt;

	public FeedCommentResponseDto(Long commentId, Long feedId, Long writerId, String userNickname,
		String userProfileImage, String commentContent, LocalDateTime updatedAt) {
		this.commentId = commentId;
		this.feedId = feedId;
		this.commentWriterId = writerId;
		this.commentWriterNickname = userNickname;
		this.commentWriterProfileImage = userProfileImage;
		this.commentContent = commentContent;
		this.updatedAt = updatedAt;
	}
}
