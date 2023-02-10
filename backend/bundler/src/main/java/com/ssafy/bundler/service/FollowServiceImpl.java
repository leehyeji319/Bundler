package com.ssafy.bundler.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.bundler.domain.Follow;
import com.ssafy.bundler.dto.user.FollowProfileDto;
import com.ssafy.bundler.dto.user.FollowingListResponseDto;
import com.ssafy.bundler.repository.FollowRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class FollowServiceImpl implements FollowService {

	private final FollowRepository followRepository;

	@Override
	public void followUser(Long fromUserId, Long toUserId) {
		followRepository.save(
			Follow.builder()
				.followFromId(fromUserId)
				.followToId(toUserId)
				.build());
	}

	@Override
	public boolean unfollowUser(Long fromUserId, Long toUserId) {
		return followRepository.deleteByFollowFromIdAndFollowToId(fromUserId, toUserId) > 0;
	}

	@Override
	public FollowingListResponseDto getUserFollowingList(Long userId) {
		List<Follow> follow = followRepository.findByFollowFromId(userId);

		if (follow != null && follow.size() > 0) {
			FollowingListResponseDto followingListResponseDto = FollowingListResponseDto.builder()
				.userId(follow.get(0).getFollowFromId())
				.build();

			follow.stream().forEach(f -> {
				followingListResponseDto.addFollowingList(
					FollowProfileDto.builder()
						.followId(f.getFollowId())
						.userNickname(f.getFollowTo().getUserNickname())
						.userProfileImageUrl(f.getFollowTo().getUserProfileImage())
						.userIntroduction(f.getFollowTo().getUserIntroduction())
						.userId(f.getFollowToId())
						.build());
			});

			return followingListResponseDto;
		}

		throw new NullPointerException();
	}

	@Override
	public Follow getUserFollowerList(Long userId) {
		// return followRepository.findByFollowToId(userId);
		return null;
	}

}
