package com.ssafy.bundler.service;

import com.ssafy.bundler.domain.User;
import com.ssafy.bundler.dto.AuthResponseDto;
import com.ssafy.bundler.dto.SignupRequestDto;


public interface UserService {

	public User getUserByUserNickname(String userNickname);
	public AuthResponseDto createUser(SignupRequestDto user);

}
