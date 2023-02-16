package com.ssafy.bundler.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.bundler.domain.Follow;
import com.ssafy.bundler.dto.user.FollowProfileDto;
import com.ssafy.bundler.dto.user.FollowerListResponseDto;
import com.ssafy.bundler.dto.user.FollowingListResponseDto;
import com.ssafy.bundler.repository.FollowRepository;
import com.ssafy.bundler.repository.query.FollowQueryRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class FollowServiceImpl implements FollowService {

	private final FollowRepository followRepository;
	private final FollowQueryRepository followQueryRepository;

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

			follow.forEach(f -> {
				followingListResponseDto.addFollowingList(
					FollowProfileDto.builder()
						.followId(f.getFollowId())
						.userNickname(f.getFollowTo().getUserNickname())
						.userProfileImageUrl(f.getFollowTo().getUserProfileImage())
						.userIntroduction(f.getFollowTo().getUserIntroduction())
						.userId(f.getFollowToId())
						.isFollowBack(true)
						.build());
			});

			return followingListResponseDto;
		}

		throw new NullPointerException();
	}

	@Override
	public FollowerListResponseDto getUserFollowerList(Long userId) {
		List<Follow> follow = followQueryRepository.findByFollowToId(userId);

		if (follow != null && follow.size() > 0) {
			FollowerListResponseDto followerListResponseDto = FollowerListResponseDto.builder()
				.userId(follow.get(0).getFollowToId())
				.build();

			follow.forEach(f -> {
				FollowProfileDto followProfileDto = FollowProfileDto.builder()
					.followId(f.getFollowId())
					.userNickname(f.getFollowFrom().getUserNickname())
					.userProfileImageUrl(f.getFollowFrom().getUserProfileImage())
					.userIntroduction(f.getFollowFrom().getUserIntroduction())
					.userId(f.getFollowFromId())
					.build();

				if (f.getFollowBackId() != null) { //맞팔이면
					followProfileDto.setFollowBack(true);
				}

				followerListResponseDto.addFollowerList(followProfileDto);
			});

			return followerListResponseDto;
		}

		throw new NullPointerException();
	}

	@Override
	public boolean isFollowing(Long fromUserId, Long toUserId) {
		return followRepository.existsByFollowFromIdAndFollowToId(fromUserId, toUserId);
	}

}
