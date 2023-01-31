package com.ssafy.bundler.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.bundler.dto.bundle.BundleSaveRequestDto;
import com.ssafy.bundler.dto.bundle.BundleUpdateRequestDto;
import com.ssafy.bundler.service.BundleService;
import com.ssafy.bundler.service.CardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/bundles")
public class BundleController {

	private final BundleService bundleService;
	private final CardService cardService;

	//번들을 생성 (빈번들,카드+번들)
	@PostMapping
	public ResponseEntity<?> saveBundle(@RequestBody BundleSaveRequestDto requestDto) {
		if (requestDto.getCardSaveRequestDtoList() == null) {
			bundleService.saveBundle(requestDto);
		} else {
			bundleService.saveBundleWithCards(requestDto);
		}

		return ResponseEntity.ok("번들 생성 완료.");
	}

	@PutMapping("/{feedId}")
	public ResponseEntity<?> updateBundle(@PathVariable Long feedId, @RequestBody BundleUpdateRequestDto requestDto) {
		bundleService.updateBundleInfo(feedId, requestDto);

		return ResponseEntity.ok("번들 정보 수정 완료.");
	}

	@DeleteMapping("/{feedId}")
	public ResponseEntity<?> deleteBundle(@PathVariable Long feedId) {
		bundleService.deleteBundle(feedId);

		return ResponseEntity.ok("번들 삭제 완료.");
	}
}
