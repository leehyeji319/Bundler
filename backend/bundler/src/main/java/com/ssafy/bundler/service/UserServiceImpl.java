package com.ssafy.bundler.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.bundler.domain.User;
import com.ssafy.bundler.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

	private final UserRepository userRepository;

	// private final BCryptPasswordEncoder bCryptPasswordEncoder;

	@Override
	public User getUserByUserNickname(String userNickname) {
		return userRepository.findByUserNickname(userNickname);
	}

	// @Override
	// public AuthResponseDto createUser(SignupRequestDto request) {
	// 	User userEntity = userRepository.save(
	// 		request.toEntity()
	// 			.toBuilder()
	// 			.userRole(RoleType.USER)
	// 			.build());
	//
	// 	return AuthResponseDto.builder()
	// 		.userNickname(userEntity.getUserNickname())
	// 		.build();
	// }

	public User getUser(String userId) {
		return userRepository.findByUserId(userId);
	}

}
