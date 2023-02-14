package com.ssafy.bundler.domain;

import static jakarta.persistence.FetchType.*;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Builder;
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

	@ManyToOne(fetch = LAZY)
	@JoinColumn(name = "feed_id")
	private Feed feed;

	@Column(name = "user_id")
	private Long userId;

}
