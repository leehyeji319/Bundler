package com.ssafy.bundler.dto.user;

import com.ssafy.bundler.domain.User;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UserMypageResponseDto {
	Long userId;
	String userEmail;
	String userNickName;
	String userIntroduction;
	String userProfileImage;
	String userGithubUrl;
	Integer userFollowingCount;
	Integer userFollowerCount;

	UserCalendarResponseDto userCalendar;
	public void userInit(User user){
			this.userEmail=user.getUserEmail();
			this.userId=user.getUserId();
			this.userIntroduction=user.getUserIntroduction();
			this.userProfileImage=user.getUserProfileImage();
			this.userNickName=user.getUserNickname();
			this.userFollowingCount=user.getFollowingCnt();
			this.userFollowerCount=user.getFollowerCnt();
	}

}
