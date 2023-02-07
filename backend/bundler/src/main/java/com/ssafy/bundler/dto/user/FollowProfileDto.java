package com.ssafy.bundler.dto.user;

import lombok.Getter;
import lombok.experimental.SuperBuilder;

@Getter
@SuperBuilder
public class FollowProfileDto extends Profile {
	private Long followId;
}
