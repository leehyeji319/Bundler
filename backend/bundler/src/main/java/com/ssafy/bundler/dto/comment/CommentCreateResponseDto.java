package com.ssafy.bundler.dto.comment;

import com.ssafy.bundler.domain.Comment;

public record CommentCreateResponseDto(boolean success, String message, Comment comment) {
}
