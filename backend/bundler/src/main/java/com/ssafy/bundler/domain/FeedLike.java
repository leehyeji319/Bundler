package com.ssafy.bundler.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class FeedLike {

	@Id
	@GeneratedValue
	@Column(name = "feed_like_id")
	private Long feedLikeId;

	@Column(name = "feed_id")
	private Long feedId;

	@Column(name = "user_id")
	private Long userId;

	@Builder
	public FeedLike(Long feedId, Long userId) {
		this.feedId = feedId;
		this.userId = userId;
	}
}
