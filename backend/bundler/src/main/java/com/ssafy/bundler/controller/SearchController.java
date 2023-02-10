package com.ssafy.bundler.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.bundler.repository.query.BundleQueryRepository;
import com.ssafy.bundler.repository.query.CardQueryRepository;
import com.ssafy.bundler.service.FeedService;
import com.ssafy.bundler.service.SearchService;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 *packageName    : com.ssafy.bundler.controller
 * fileName       : SearchController
 * author         : modsiw
 * date           : 2023/02/09
 * description    : 검색페이지 동적 파라미터를 위한 컨트롤러
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/02/09        modsiw       최초 생성
 */
@RestController
@RequiredArgsConstructor
@Slf4j
public class SearchController {

	private final FeedService feedService;
	private final SearchService searchService;
	private final BundleQueryRepository bundleQueryRepository;
	private final CardQueryRepository cardQueryRepository;

	//전체 조회
	@GetMapping("/api/v1/search")
	public Result getFeedsFindBySearchParameter(
		@RequestParam(value = "feed_type", required = false) String feedType,
		@RequestParam(value = "category_id", required = false) Long categoryId,
		@RequestParam(value = "keyword", required = false) String keyword) {

		//피드 타입 없고 카테고리 없고 키워드 없을때
		if (feedType == null && keyword == null) {
			System.out.println("그냥 전체");
			return new Result(feedService.getAllFeed()); // 찐완료
		} else if (feedType == null && keyword != null) {
			System.out.println("전체에서 키워드만");
			return new Result(feedService.findAllByKeyword(keyword)); //찐완료
		} else if (feedType != null && keyword == null) {
			if (feedType.equals("CARD") && categoryId == null) {
				//그냥 카드만
				System.out.println("그냥 카드만");
				return new Result(feedService.findCardSummanryList()); //찐완료
			} else if (feedType.equals("CARD") && categoryId != null) {
				//피드타입이 카드면서 카테고리 값이 있을 때
				System.out.println("피드타입이 카드면서 카테고리 값이 있을 때");
				return new Result(feedService.findCardsByCategoryId(categoryId));  //찐완료
			} else {
				//그냥 번들만
				System.out.println("그냥 번들만");
				return new Result(bundleQueryRepository.findAllBundleByDto_optimization()); //찐완료
			}
		} else if (feedType != null && keyword != null) {
			if (feedType.equals("CARD") && categoryId == null) {
				//카드에서 검색어만
				System.out.println("카드에서 검색어만");
				return new Result(cardQueryRepository.findAllCardByDto_optimization(keyword)); // 찐완료
			} else if (feedType.equals("CARD") && categoryId != null) {
				//카드에서 카테고리 검색어 같이
				System.out.println("카드에서 카테고리 검색어 같이");
				return new Result(cardQueryRepository.findAllCardByDto_optimization(categoryId, keyword)); //찐완료
			} else {
				//그냥 번들일때 키워드만 검색
				System.out.println("그냥 번들일때 키워드만 검색");
				return new Result(bundleQueryRepository.findAllBundleByDto_optimization(keyword)); //찐완료
			}
		}
		return null;
	}

	@Data
	@AllArgsConstructor
	static class Result<T> {
		private T data;
	}
}
