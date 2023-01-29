package com.ssafy.bundler.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.bundler.domain.User;
import com.ssafy.bundler.dto.AuthResponseDto;
import com.ssafy.bundler.dto.SignupRequestDto;
import com.ssafy.bundler.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;

	// private final BCryptPasswordEncoder bCryptPasswordEncoder;

	@Override
	public User getUserByUserNickname(String userNickname) {
		return userRepository.findByUserNickname(userNickname).orElseThrow();
	}

	@Override
	public AuthResponseDto createUser(SignupRequestDto request) {
		User userEntity = userRepository.save(
			request.toEntity()
				.toBuilder()
				.userRole("ROLE_USER")
				.build());

		return AuthResponseDto.builder()
			.userNickname(userEntity.getUserNickname())
			.build();
	}

}
