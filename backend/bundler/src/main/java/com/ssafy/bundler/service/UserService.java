package com.ssafy.bundler.service;

import java.util.List;

import com.ssafy.bundler.dto.user.AuthResponseDto;
import com.ssafy.bundler.dto.user.Profile;
import com.ssafy.bundler.dto.user.SignupRequestDto;
import com.ssafy.bundler.dto.user.UserUpdateRequestDto;

public interface UserService {

	public List<Profile> getUserListByUserNickname(String userNickname);

	public AuthResponseDto createUser(SignupRequestDto user);

	public void updateUser(UserUpdateRequestDto user);

	void deleteUser(Long userId);

	// public User getUserByUserId(Long userId);

}