// package com.ssafy.bundler.controller;
//
// import java.util.List;
//
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.RestController;
//
// /**
//  *packageName    : com.ssafy.bundler.controller
//  * fileName       : SearchController
//  * author         : modsiw
//  * date           : 2023/02/09
//  * description    : 검색페이지 동적 파라미터를 위한 컨트롤러
//  * ===========================================================
//  * DATE              AUTHOR             NOTE
//  * -----------------------------------------------------------
//  * 2023/02/09        modsiw       최초 생성
//  */
// @RestController
// public class SearchController {
//
// 	//전체 조회
// 	@GetMapping("/v1/feeds")
// 	public ResponseEntity<List<Object>> getCardBundleWithSearchParameter(
// 		@RequestParam(name = "feed_type") String feedType, @RequestParam(name = "cateogry_name") String categoryName,
// 		@RequestParam(name = "keyword") String keyword) {
//
// 		//피드 타입 없고 카테고리 없고 키워드 없을때
// 		if (feedType == null && categoryName == null && keyword == null) {
//
// 		} else if (feedType == null && categoryName == null && keyword != null) {
//
// 		} else if (feedType == null && categoryName != null && ke)
//
// 		//피드 타입이 있는데 카드고 카테고리만 있을 때
//
// 		//피드 타입이 있는데 카드고 카테고리도 있고 검색어 있을때
//
// 		//피드 타입이 있는데 카드고 카테고리도 있고 검색어는 없을때
//
// 		//피드 타입이 있는데 번들이고 검색어는 있을때
//
// 		//피드 타입이 있는데 번들이고 검색어는 없을때
//
// 		//피드 타입이 없고 카테고리도 없고 검색어는 없을때
//
// 		//피드 타입이 없고 카테고리도 없고 검색어는 있을때
// 	}
// }
