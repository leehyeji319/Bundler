package com.ssafy.bundler.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.bundler.dto.stat.StatCategoryDto;
import com.ssafy.bundler.dto.stat.StatResponseDto;
import com.ssafy.bundler.service.StatService;

@RestController
public class StatController {
	@Autowired
	StatService statService;
	@GetMapping("/api/v1/users/{userId}/stats")
	public ResponseEntity<?> getStat(@PathVariable Long userId){
		StatCategoryDto[] statsTest= statService.getCategoryStat(userId);
		String registerDate = statService.getRegisterDate(userId);
		int totalFeedLikeCnt = statService.getTotalFeedLike(userId);
		int totalCardScrapCnt = statService.getTotalCardScrappedCount(userId);
		String[] maxCategories = statService.getMaxCategories(userId);

		StatResponseDto responseDto = StatResponseDto.builder()
			.statCategory(statsTest)
			.registerDate(registerDate)
			.totalFeedLikeCnt(totalFeedLikeCnt)
			.totalCardScrapCnt(totalCardScrapCnt)
			.mostMakeCategory(maxCategories[0])
			.mostMakeSubCategory(maxCategories[1])
			.mutualFollows(35)
			.continuousCardMakeCnt(33)
			.feedLikeRankingFollowing(21)
			.cardScrapRankingFollowing(11)
			.feedLikeRankingTotal(23)
			.cardScrapRankingTotal(44)
			.cardMakeRankingTotal(123)
			.build();

		return ResponseEntity.ok(responseDto);
	}
}
