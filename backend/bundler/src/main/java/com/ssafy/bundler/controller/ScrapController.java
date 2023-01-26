package com.ssafy.bundler.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.bundler.dto.bundle.BundleSaveRequestDto;
import com.ssafy.bundler.dto.bundle.BundleScrapRequestDto;
import com.ssafy.bundler.service.BundleService;
import com.ssafy.bundler.service.CardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class ScrapController {

	private final CardService cardService;
	private final BundleService bundleService;

	//번들 스크랩
	@PostMapping("/scrap/bundles")
	public ResponseEntity<?> bundleScrap(@RequestBody BundleScrapRequestDto requestDto) {
		bundleService.scrapBundleWithCards(requestDto);

		return ResponseEntity.ok("번들 스크랩 성공.");
	}

	//카드를 번들을 생성하면서 스크랩
	@PostMapping("/scrap/cards/bundles/{feedId}")
	public ResponseEntity<?> cardScrapWithCreateBundle(@PathVariable Long feedId,
		@RequestBody BundleSaveRequestDto requestDto) {
		bundleService.scrapCardWithSaveBundle(feedId, requestDto);

		return ResponseEntity.ok("새로운 번들에 카드 스크랩 성공.");
	}

	//카드를 이미 존재하는 번들에 스크랩
	@PutMapping("/scrap/cards")
	public ResponseEntity<?> cardScrapWithExistBundle(@RequestBody BundleScrapRequestDto requestDto) {
		cardService.scrapCardWithExistBundle(requestDto);

		return ResponseEntity.ok("기존의 번들에 카드 스크랩 성공.");
	}
}
