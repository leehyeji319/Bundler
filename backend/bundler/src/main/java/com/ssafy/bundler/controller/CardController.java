package com.ssafy.bundler.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.bundler.domain.CardType;
import com.ssafy.bundler.dto.feed.reqeust.CardListSaveRequestDto;
import com.ssafy.bundler.dto.feed.reqeust.CardSaveRequestDto;
import com.ssafy.bundler.dto.feed.reqeust.CardUpdateRequestDto;
import com.ssafy.bundler.service.CardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/cards")
public class CardController {

	private final CardService cardService;

	//카드 리스트로 받아왔을 때 생성
	@PostMapping("/list")
	public ResponseEntity<?> saveCardList(@RequestBody CardListSaveRequestDto requestDto) {
		cardService.saveCardList(requestDto);

		return ResponseEntity.ok("리스트 카드 개별 생성 성공.");
	}

	//개별 카드 생성
	@PostMapping
	public ResponseEntity<?> saveCard(@RequestBody CardSaveRequestDto requestDto) {
		//문제, 일반 -> 하나로 분기, link -> 분기 다른거
		String cardType = requestDto.getCardType();

		if (CardType.CARD_LINK.toString().equals(cardType)) {
			cardService.saveLinkCard(requestDto);
		} else {
			cardService.saveCard(requestDto);
		}
		return ResponseEntity.ok("카드 개별 생성 성공.");
	}

	//카드 정보 수정
	@PutMapping("/{feedId}")
	public ResponseEntity<?> updateCard(@PathVariable Long feedId, @RequestBody CardUpdateRequestDto requestDto) {
		cardService.updateCard(feedId, requestDto);
		return ResponseEntity.ok("카드 업데이트 완료");
	}

	//카드 삭제
	@DeleteMapping("/{feedId}")
	public ResponseEntity<?> deleteCard(@PathVariable Long feedId) {
		cardService.deleteCard(feedId);
		return ResponseEntity.ok("카드 삭제 완료.");
	}
}
