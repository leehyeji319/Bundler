package com.ssafy.bundler.dto.stat;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class StatResponseDto {
	private StatCategoryDto[] statCategory;
	private String registerDate;
	private int mutualFollows;
	private int continuousCardMakeCnt;
	private int totalFeedLikeCnt;
	private int totalCardScrapCnt;
	private String mostMakeCategory;
	private String mostMakeSubCategory;

	private int feedLikeRankingFollowing;
	private int cardScrapRankingFollowing;
	private int feedLikeRankingTotal;
	private int cardScrapRankingTotal;
	private int cardMakeRankingTotal;

}
