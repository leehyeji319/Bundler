package com.ssafy.bundler.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.bundler.dto.feed.FeedCardResponseDto;
import com.ssafy.bundler.repository.query.FeedQueryRepository;

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

	private final FeedQueryRepository feedQueryRepository;

	//피드 전체
	// @GetMapping()
	// public Result getFeedAll() {
	// 	return new Result();
	// }

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
