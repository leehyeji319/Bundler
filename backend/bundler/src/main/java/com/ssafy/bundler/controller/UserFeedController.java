package com.ssafy.bundler.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

/**
 *packageName    : com.ssafy.bundler.controller
 * fileName       : UserPageController
 * author         : modsiw
 * date           : 2023/02/06
 * description    : 사용자의 홈 컨트롤러 사용자 유저 홈을 조회하는데 로그인한 사용자인지 아닌지 분기함
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/02/06        modsiw       최초 생성
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class UserFeedController {

	// private final FeedRepository feedRepository;
	// private final FeedService feedService;
	// private final FeedQueryRepository feedQueryRepository;
	//
	// //해당 사용자의 홈으로 갔을 때 보여주는 번들 리스트
	// @GetMapping("/v5/users/{user_id}/feeds/bundles")
	// public List<BundleResponseDto> getBundlesFindByUserId(@PathVariable("user_id") Long userId,
	// 	Authentication authentication) {
	// 	PrincipalDetails principal = (PrincipalDetails)authentication.getPrincipal();
	//
	// 	if (principal.getUser().getUserId().equals(userId)) {
	// 		return feedService.getBundlesFindByUserIdContainIsBundlePrivate(
	// 			userId);
	// 	} else {
	// 		return feedService.getBundlesFindByUserIdExceptIsBundlePrivate(userId);
	// 	}
	//
	// }
	//
	// @GetMapping("/v5/users/{user_id}/feeds/cards")
	// public List<CardSummaryResponseDto> getCardsFindByUserId(@PathVariable("user_id") Long userId) {
	// 	return feedService.getAllCardsFindByUserId(userId);
	// }
}
