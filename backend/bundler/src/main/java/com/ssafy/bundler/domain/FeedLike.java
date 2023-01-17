package com.ssafy.bundler.domain;

import com.ssafy.bundler.domain.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import static jakarta.persistence.FetchType.LAZY;
@Getter @Setter
@Entity
public class FeedLike {

	@Id
	@GeneratedValue
	@Column(name = "feed_like_id")
	private Long feedLikeId;

	@Column(name = "feed_id")
	private Long feedId;

	@Column(name = "user_id")
	private Long userId;

}
