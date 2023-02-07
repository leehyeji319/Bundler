package com.ssafy.bundler.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UserUpdateRequestDto {

	private Long userId;
	private String userNickname;
	private String userIntroduction;
	private String userProfileImageUrl;

}
