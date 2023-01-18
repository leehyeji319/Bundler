package com.ssafy.bundler.domain;

import static jakarta.persistence.CascadeType.*;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class User extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) //Identity로 하면 디비엔진에 따라 오토 인크리먼트가 안먹는다.
	@Column(name = "user_id")
	private Long userId;

	@Column(name = "user_email", unique = true)
	private String userEmail;

	@Column(name = "user_password")
	private String userPassword;

	@Column(name = "user_nickname", unique = true)
	private String userNickname;

	@Column(name = "user_profile_image")
	private String userProfileImage;
	@Column(name = "user_introduction")
	private String userIntroduction;

	@Column(name = "is_deleted")
	private boolean isDeleted;

	@OneToMany(cascade = ALL)
	@JoinColumn(name = "feed_like_id")
	private List<FeedLike> feedUserLikeList = new ArrayList<>();

	@OneToMany(mappedBy = "writer", cascade = ALL)
	private List<Feed> feedList = new ArrayList<>();

	@OneToMany(mappedBy = "followTo", cascade = ALL)
	private List<Follow> followToList = new ArrayList<>();

	@OneToMany(mappedBy = "followFrom", cascade = ALL)
	private List<Follow> followFromList = new ArrayList<>();

	@Builder
	public User(String userEmail, String userPassword, String userNickname, String userProfileImage,
		String userIntroduction, boolean isDeleted, List<FeedLike> feedUserLikeList, List<Feed> feedList,
		List<Follow> followToList, List<Follow> followFromList) {
		this.userEmail = userEmail;
		this.userPassword = userPassword;
		this.userNickname = userNickname;
		this.userProfileImage = userProfileImage;
		this.userIntroduction = userIntroduction;
		this.isDeleted = isDeleted;
		this.feedUserLikeList = feedUserLikeList;
		this.feedList = feedList;
		this.followToList = followToList;
		this.followFromList = followFromList;
	}
}
