package com.ssafy.bundler.dto.feed;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class FeedResponseDto {

	private Long feedId;
	private String feedType;

	// private LocalDateTime createdAt;
	private String cardType;

	private boolean isDeleted;

	private Long userId;
	private String userProfileImage;
	private String userNickname;

	private Long firstCategoryId;
	private Long secondCategoryId;

	private String feedTitle;
	private String feedContent;
	private String cardDescription;
	private String cardCommentary;

	private Long linkId;
	private String linkUrl;
	private String linkImage;
	private String linkTitle;
	private String linkDescription;

	private String bundleThumbnail;
	private String bundleThumbnailText;
	private boolean isBundlePublic;

	private int cardScrapCnt;
	private int feedLikeCnt;
	private int feedCommentCnt;

}
