package com.ssafy.bundler.domain;

import static jakarta.persistence.CascadeType.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.hibernate.annotations.ColumnDefault;

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
@SuperBuilder(toBuilder = true)
@NoArgsConstructor
@Entity
@Table(name = "USERS")
public class User extends BaseEntity implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) //Identity로 하면 디비엔진에 따라 오토 인크리먼트가 안먹는다.
	@Column(name = "user_id")
	private Long userId;

	@Column(name = "user_email", unique = true, nullable = false)
	private String userEmail;

	@Column(name = "user_password", nullable = false)
	private String userPassword;

	@Column(name = "user_nickname", unique = true, nullable = false)
	private String userNickname;

	@Column(name = "user_introduction")
	private String userIntroduction;

	@Column(name = "user_profile_image", nullable = true)
	private String userProfileImage;

	@Column(name = "is_deleted")
	@ColumnDefault(value = "0")
	private boolean isDeleted;

	@Column(name = "user_role")
	private String userRole;

	public List<String> getRoleList() {
		if (this.userRole.length() > 0) {
			return Arrays.asList(this.userRole.split(","));
		}

		return new ArrayList<>();
	}

	//////////////////////////////////////

	@OneToMany(cascade = ALL)
	@JoinColumn(name = "user_id")
	@Builder.Default
	private List<FeedLike> feedUserLikeList = new ArrayList<>();

	@OneToMany(mappedBy = "writer", cascade = CascadeType.ALL)
	@Builder.Default
	private List<Feed> feedList = new ArrayList<>();

	@OneToMany(mappedBy = "followTo", cascade = ALL)
	@Builder.Default
	private List<Follow> followToList = new ArrayList<>();

	@OneToMany(mappedBy = "followFrom", cascade = ALL)
	@Builder.Default
	private List<Follow> followFromList = new ArrayList<>();

}
