package com.ssafy.bundler.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.bundler.domain.User;
import com.ssafy.bundler.dto.user.AuthResponseDto;
import com.ssafy.bundler.dto.user.Profile;
import com.ssafy.bundler.dto.user.SearchUserListResponseDto;
import com.ssafy.bundler.dto.user.SignupRequestDto;
import com.ssafy.bundler.dto.user.UserCalendarDto;
import com.ssafy.bundler.dto.user.UserCalendarResponseDto;
import com.ssafy.bundler.dto.user.UserUpdateRequestDto;
import com.ssafy.bundler.exception.EntityNotFoundException;
import com.ssafy.bundler.exception.ErrorCode;
import com.ssafy.bundler.repository.UserRepository;
import com.ssafy.bundler.repository.query.UserQueryRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;

	@Autowired
	UserQueryRepository userQueryRepository;
	// private final BCryptPasswordEncoder bCryptPasswordEncoder;

	@Override
	public List<Profile> getUserListByUserNickname(String userNickname) throws EntityNotFoundException {
		List<User> userList = userRepository.findByUserNicknameContains(userNickname);

		if (userList == null || userList.size() == 0) {
			throw new EntityNotFoundException("검색 결과가 없습니다.", ErrorCode.USER_NOT_FOUND);
		}

		List<Profile> response = new ArrayList<>(userList.size());

		userList.stream().forEach(user -> response.add(
			SearchUserListResponseDto.builder()
				.userId(user.getUserId())
				.userNickname(user.getUserNickname())
				.userIntroduction(user.getUserIntroduction())
				.userProfileImageUrl(user.getUserProfileImage())
				.build())
		);

		return response;
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

	@Override
	public void updateUser(UserUpdateRequestDto user) {
		User u = userRepository.findByUserId(user.getUserId()).orElseThrow();

		userRepository.save(u.toBuilder()
			.userIntroduction(user.getUserIntroduction())
			.userProfileImage(user.getUserProfileImageUrl())
			.userNickname(user.getUserNickname())
			.build()
		);
	}

	@Override
	public void deleteUser(Long userId) {
		User u = userRepository.findByUserId(userId).orElseThrow()
			.toBuilder()
			.isDeleted(false)
			.build();
		userRepository.save(u);
	}

	// @Override
	// public User getUserByUserId(Long userId) {
	// 	return null;
	// }
	@Transactional
	public UserCalendarResponseDto getDayFeedCount(Long userId){
		User user = userRepository.findById(userId).orElseThrow(
			()->new IllegalArgumentException("해당 사용를 찾을 수 없습니다.")
		);
		List<UserCalendarDto> dates = userQueryRepository.findDayFeedCount(user.getUserId());
		Integer year = LocalDate.now().getYear();
		return UserCalendarResponseDto.builder().dates(dates).year(year).build();
	}
	@Transactional
	public User getUserByUserId(Long userId){
		return userRepository.findByUserId(userId).orElseThrow();
	}



}
