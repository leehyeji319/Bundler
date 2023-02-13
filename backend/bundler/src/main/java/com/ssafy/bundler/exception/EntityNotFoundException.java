package com.ssafy.bundler.exception;

public class EntityNotFoundException extends BusinessException {

	public EntityNotFoundException(String message, ErrorCode errorCode) {
		super(message, errorCode);
	}

}