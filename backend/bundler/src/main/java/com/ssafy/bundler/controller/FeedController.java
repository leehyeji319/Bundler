package com.ssafy.bundler.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.bundler.domain.Feed;
import com.ssafy.bundler.dto.bundle.response.BundleResponseDto;
import com.ssafy.bundler.dto.card.response.CardResponseDto;
import com.ssafy.bundler.dto.card.response.CardSummaryResponseDto;
import com.ssafy.bundler.repository.FeedRepository;
import com.ssafy.bundler.repository.query.BundleQueryRepository;
import com.ssafy.bundler.repository.query.CardQueryRepository;
import com.ssafy.bundler.service.FeedService;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

/**
 * 카드 개별 조회, 번들 조회 컨트롤러
 *
 * @author 이혜지
 * @version 1.0
 */

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class FeedController {
	private final FeedRepository feedRepository;
	private final FeedService feedService;
	private final BundleQueryRepository budnleQueryRepository;
	private final CardQueryRepository cardQueryRepository;

	//카드 리스트 V1 (댓글 없음)
	@GetMapping("/v1/feeds/cards")
	public List<CardSummaryResponseDto> getCardsV1() {
		return feedService.findCardSummanryList();
	}

	//카드 리스트 V2 (댓글 있음)
	@GetMapping("/v5/feeds/cards")
	public List<CardResponseDto> getCardsWithCommentList() {
		return cardQueryRepository.findAllCardByDto_optimization();
	}

	//카드 개별
	@GetMapping("/v1/feeds/cards/{feed_id}")
	public CardResponseDto getCard(@PathVariable("feed_id") Long feedId) {
		return feedService.findCard(feedId);
	}

	//번들 리스트 V1 (댓글 있음)
	// @GetMapping("/v1/feeds/bundles")
	// public List<BundleSummaryResponseDto> getBundlesV1() {
	// 	return feedService.find
	// }

	//번들 리스트 V2 (댓글 없음)
	@GetMapping("/v5/feeds/bundles")
	public List<BundleResponseDto> getBundlesWithCommentList() {
		return budnleQueryRepository.findAllBundleByDto_optimization();
	}

	@GetMapping("/v4/feeds/cards")
	public List<FeedCardResponseDto> cardsV4() {
		return feedQueryRepository.findFeedCardQueryDtos();
	}

	@Data
	@AllArgsConstructor

	static class Result<T> {
		private T data;
	}
}
