package com.ssafy.bundler.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.bundler.domain.Feed;
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
 *packageName    : com.ssafy.bundler.controller
 * fileName       : FeedController
 * author         : modsiw
 * date           : 2023/02/04
 * description    : 피드 조회 컨트롤러 : 카드개별, 카드전체, 번들개별, 번들전체, 피드전체
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/02/04        modsiw       최초 생성
 * 2023/02/05		 modsiw		  번들 개별 조회 추가
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
	@GetMapping("/v1/feeds/cards/{feed_id}")
	public CardResponseDto getCard(@PathVariable("feed_id") Long feedId) {
		return feedService.findCard(feedId);
	}

	//번들 리스트
	@GetMapping("/v5/feeds/bundles")
	public List<BundleResponseDto> getBundleList() {
		return feedQueryRepository.findAllBundleByDto_optimization();
	}

	//번들 개별
	@GetMapping("/v5/feeds/bundles/{feed_id}")
	public BundleResponseDto getBundle(@PathVariable("feed_id") Long feedId) {
		return feedQueryRepository.findBundleByDto_optimization(feedId);
	}

	//전체 조회
	@GetMapping("/v1/feeds")
	public ResponseEntity<List<Object>> getAllFeed() {
		List<Object> test = feedService.getAllFeed();
		return new ResponseEntity<>(test, HttpStatus.OK);
	}

	//전체 조회
	@GetMapping("/test/feeds")
	public ResponseEntity<List<Feed>> getAllFeeds() {
		List<Feed> all = feedRepository.findAll();
		return new ResponseEntity<List<Feed>>(all, HttpStatus.OK);
	}

	// 사용자의 피드 조회

	@Data
	@AllArgsConstructor
	static class Result<T> {
		private T data;
	}
}
