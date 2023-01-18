package com.ssafy.bundler.domain;

import static jakarta.persistence.FetchType.*;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.NaturalId;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor
public class Feed extends BaseEntity {

	@Id
	@GeneratedValue
	@Column(name = "feed_id")
	private Long feedId;

	@Column(name = "feed_title")
	private String feedTitle;

	@Column(name = "feed_content")
	private String feedContent;

	@Column(name = "feed_like_cnt")
	private int feedLikeCnt;

	@Column(name = "feed_comment_cnt")
	private int feedCommentCnt;

	@Column(name = "is_deleted")
	private boolean isDeleted;

	@ManyToOne(fetch = LAZY)
	@JoinColumn(name = "user_id")
	private User writer;

	@OneToOne
	private Card card;

	@OneToOne
	private Bundle bundle;

	@Enumerated(EnumType.STRING)
	@NaturalId
	private FeedType feedType;

	@OneToMany(cascade = CascadeType.ALL)
	private List<Comment> commentList = new ArrayList<>();

	@OneToMany(cascade = CascadeType.ALL)
	private List<Category> categoryList = new ArrayList<>();

	//사용자가 좋아요한 피드
	private boolean isFeedLiked;

	@Builder
	public Feed(String feedTitle, String feedContent, int feedLikeCnt, int feedCommentCnt,
		boolean isDeleted, User writer, Card card, Bundle bundle, FeedType feedType,
		List<Comment> commentList, List<Category> categoryList, boolean isFeedLiked) {
		this.feedTitle = feedTitle;
		this.feedContent = feedContent;
		this.feedLikeCnt = feedLikeCnt;
		this.feedCommentCnt = feedCommentCnt;
		this.isDeleted = isDeleted;
		this.writer = writer;
		this.card = card;
		this.bundle = bundle;
		this.feedType = feedType;
		this.commentList = commentList;
		this.categoryList = categoryList;
		this.isFeedLiked = isFeedLiked;
	}

}
