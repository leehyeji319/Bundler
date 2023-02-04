package com.ssafy.bundler.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.bundler.dto.bundle.response.BundleResponseDto;
import com.ssafy.bundler.dto.card.response.CardResponseDto;
import com.ssafy.bundler.dto.card.response.CardSummaryResponseDto;
import com.ssafy.bundler.repository.FeedRepository;
import com.ssafy.bundler.repository.query.FeedQueryRepository;
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
	private final FeedQueryRepository feedQueryRepository;

	//카드 리스트
	@GetMapping("/v1/feeds/cards")
	public List<CardSummaryResponseDto> getCardList() {
		return feedService.findCardSummanryList();
	}

	//카드 개별
	@GetMapping("/v1/feeds/cards/{feedId}")
	public CardResponseDto getCard(@PathVariable Long feedId) {
		return feedService.findCard(feedId);
	}

	//번들 리스트
	@GetMapping("/v5/feeds/bundles")
	public List<BundleResponseDto> getBundles() {
		return feedQueryRepository.findAllByDto_optimization();
	}

	@Data
	@AllArgsConstructor
	static class Result<T> {
		private T data;
	}
}
