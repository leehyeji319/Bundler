package com.ssafy.bundler.domain;

import static jakarta.persistence.CascadeType.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "USERS")
@SuperBuilder(toBuilder = true)
public class User extends BaseEntity implements Serializable {

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

	@Column(name = "user_introduction")
	private String userIntroduction;

	@Column(name = "user_profile_image")
	private String userProfileImage;

	@Column(name = "is_deleted")
	private boolean isDeleted;

	//////////////////////////////////////

	@Builder.Default
	@OneToMany(cascade = ALL)
	@JoinColumn(name = "user_id")
	private List<FeedLike> feedUserLikeList = new ArrayList<>();

	@Builder.Default
	@OneToMany(mappedBy = "writer", cascade = CascadeType.ALL)
	private List<Feed> feedList = new ArrayList<>();

	@Builder.Default
	@OneToMany(mappedBy = "followTo", cascade = ALL)
	private List<Follow> followToList = new ArrayList<>();

	@Builder.Default
	@OneToMany(mappedBy = "followFrom", cascade = ALL)
	private List<Follow> followFromList = new ArrayList<>();

}
