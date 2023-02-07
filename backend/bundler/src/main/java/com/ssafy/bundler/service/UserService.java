package com.ssafy.bundler.service;

import com.ssafy.bundler.domain.User;
import com.ssafy.bundler.dto.AuthResponseDto;
import com.ssafy.bundler.dto.SignupRequestDto;
import com.ssafy.bundler.dto.UserUpdateRequestDto;

public interface UserService {

	public User getUserByUserNickname(String userNickname);

	public AuthResponseDto createUser(SignupRequestDto user);

	public void updateUser(UserUpdateRequestDto user);

	void deleteUser(Long userId);

	// public User getUserByUserId(Long userId);

}
