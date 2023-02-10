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
		return userRepository.findOneByUserNickname(userNickname).orElseThrow();
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

	@Override
	public User getUser(String userId) {
		return null;
	}

	public User getUser(Long userId) {
		return userRepository.findOneByUserId(userId).orElseThrow();
	}

}
