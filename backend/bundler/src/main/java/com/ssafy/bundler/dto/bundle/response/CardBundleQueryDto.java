package com.ssafy.bundler.dto.bundle.response;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.bundler.domain.CardType;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class CardBundleQueryDto {

	@JsonIgnore
	private Long bundleId;
	private Long cardId;

	private LocalDateTime createdAt;
	private CardType cardType;

	private Long cardWriterId;
	private String userProfileImage;
	private String userNickname;

	private String feedTile;
	private String feedContent;

	private Long firstCategoryId;
	private String firstCategoryName;
	private Long secondCategoryId;
	private String secondCategoryName;

	private int cardScrapCnt;
	private int feedLikeCnt;
	private int feedCommentCnt;

	public CardBundleQueryDto(Long bundleId, Long cardId, LocalDateTime createdAt,
		CardType cardType, Long cardWriterId, String userProfileImage, String userNickname, String feedTile,
		String feedContent, Long firstCategoryId, String firstCategoryName, Long secondCategoryId,
		String secondCategoryName, int cardScrapCnt, int feedLikeCnt, int feedCommentCnt) {
		this.bundleId = bundleId;
		this.cardId = cardId;
		this.createdAt = createdAt;
		this.cardType = cardType;
		this.cardWriterId = cardWriterId;
		this.userProfileImage = userProfileImage;
		this.userNickname = userNickname;
		this.feedTile = feedTile;
		this.feedContent = feedContent;
		this.firstCategoryId = firstCategoryId;
		this.firstCategoryName = firstCategoryName;
		this.secondCategoryId = secondCategoryId;
		this.secondCategoryName = secondCategoryName;
		this.cardScrapCnt = cardScrapCnt;
		this.feedLikeCnt = feedLikeCnt;
		this.feedCommentCnt = feedCommentCnt;
	}
}
