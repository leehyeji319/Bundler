// package com.ssafy.bundler.controller;
//
// import java.util.List;
//
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.RestController;
//
// import com.ssafy.bundler.service.FeedService;
// import com.ssafy.bundler.service.SearchService;
//
// import lombok.RequiredArgsConstructor;
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
// @RequiredArgsConstructor
// public class SearchController {
//
// 	private final FeedService feedService;
// 	private final SearchService searchService;
//
// 	//전체 조회
// 	@GetMapping("/v1/feeds")
// 	public ResponseEntity<List<Object>> getFeedsFindBySearchParameter(
// 		@RequestParam(name = "feed_type") String feedType, @RequestParam(name = "cateogry_name") String categoryName,
// 		@RequestParam(name = "keyword") String keyword) {
//
// 		//피드 타입 없고 카테고리 없고 키워드 없을때
// 		if (feedType == null && keyword == null) {
// 			feedService.findAll();
// 		} else if (feedType == null && keyword != null) {
// 			/*TODO
// 			 * 키워드로 검색된 번들과 카드 모두 출력
// 			 * */
// 			feedService.findAllByKeyword();
//
// 		} else if (feedType != null && keyword == null) {
// 			/*TODO
// 			 * 피드타입이 카드면, 카테고리 잇 없
// 			 * 피드 타입이 번들이면 그냥 번들만
// 			 * */
// 			if (feedType.equals("CARD") && categoryName == null) {
// 				//그냥 카드만
// 				feedService.findCardSummanryList();
// 			} else if (feedType.equals("CARD") && categoryName != null) {
// 				//피드타입이 카드면서 카테고리 이름이 있을 때
// 				feedService.findCardsByCategoryName();
// 			} else {
// 				//그냥 번들만
// 				feedService.findBundles();
// 			}
//
// 		} else if (feedType != null && keyword != null) {
// 			/*TODO
// 			 * 피드타입이 카드 -> 카테고리 있 으면 키워드같이, 없으면 그냥 키ㅜ어드
// 			 * 피드타ㅣㅂ 번들이면 -> 그냥 번들에서 키워드
// 			 * */
// 			if (feedType.equals("CARD") && categoryName == null) {
// 				//카드에서 검색어만
// 				feedService.findCardsWithKeyword();
// 			} else if (feedType.equals("CARD") && categoryName != null) {
// 				//카드에서 카테고리 검색어 같이
// 				feedService.findCardsByCategoryNameAndKeyword();
// 			} else {
// 				//그냥 번들일때 키워드만 검색
// 				feedService.findBundlesByKeyword();
// 			}
// 		}
//
// 	}
// }
