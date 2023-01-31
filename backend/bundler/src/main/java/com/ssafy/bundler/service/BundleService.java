package com.ssafy.bundler.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.bundler.domain.Bundle;
import com.ssafy.bundler.domain.Card;
import com.ssafy.bundler.domain.CardBundle;
import com.ssafy.bundler.domain.User;
import com.ssafy.bundler.dto.bundle.BundleSaveRequestDto;
import com.ssafy.bundler.dto.bundle.BundleScrapRequestDto;
import com.ssafy.bundler.dto.bundle.BundleUpdateRequestDto;
import com.ssafy.bundler.repository.BundleRepository;
import com.ssafy.bundler.repository.CardBundleRepository;
import com.ssafy.bundler.repository.CardRepository;
import com.ssafy.bundler.repository.UserRepository;

import lombok.RequiredArgsConstructor;

/**
 * 번들 생성, 수정, 삭제
 * 번들 스크랩
 * 1. 있던 번들 자체를 스크랩
 * 2. 카드 한개를 스크랩하면서 번들을 생성하고 넣는 스크랩
 *
 * @author 이혜지
 * @version 1.0
 */

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class BundleService {

	private final BundleRepository bundleRepository;
	private final UserRepository userRepository;
	private final CardRepository cardRepository;
	private final CardBundleRepository cardBundleRepository;
	private final CardService cardService;

	//번들 생성
	//제일 기초인 빈 번들 생성
	@Transactional
	public Long saveBundle(BundleSaveRequestDto requestDto) {
		User writerUser = userRepository.findById(requestDto.getUserId()).orElseThrow(() ->
			new IllegalArgumentException("해당 유저가 존재하지 않습니다. userId= " + requestDto.getUserId()));
		return bundleRepository.save(requestDto.toEntity(writerUser)).getFeedId();
	}

	//카드와 함께 번들 생성
	@Transactional
	public void saveBundleWithCards(BundleSaveRequestDto requestDto) {
		Long savedBundleId = saveBundle(requestDto);
		List<Long> savedCardsIdList = cardService.saveCardListwithBundle(requestDto.getCardSaveRequestDtoList());

		for (Long savedCardId : savedCardsIdList) {
			saveCardBundle(savedBundleId, savedCardId);
		}
	}

	//번들 자체 스크랩
	@Transactional
	public void scrapBundleWithCards(BundleScrapRequestDto requestDto) {
		//일단 번들을 찾아서 피드의 정보를 가져와서 새번들을 만들어
		Bundle bundle = bundleRepository.findById(requestDto.getBundleId()).orElseThrow(() ->
			new IllegalArgumentException("해당 번들의 Id가 존재하지 않습니다. bundleId(feedId)= " + requestDto.getBundleId()));

		if (bundle.getWriter().getUserId().equals(requestDto.getUserId())) {
			throw new IllegalArgumentException("이미 사용자에게 존재하는 번들입니다.");
		}

		//기본 정보를 복사한 빈 번들 생성
		BundleSaveRequestDto bundleSaveRequestDto = BundleSaveRequestDto.builder()
			.userId(requestDto.getUserId())
			.feedTitle(bundle.getFeedTitle())
			.feedContent(bundle.getFeedContent())
			.bundleThumbnail(bundle.getBundleThumbnail())
			.bundleThumbnailText(bundle.getBundleThumbnailText())
			.build();

		//그리고 이 생성된 번들에 스크랩하려던 번들에 있던 카드를 다 때려박기
		Long saveBundleId = saveBundle(bundleSaveRequestDto);

		//CardBundle에서 스크랩할 대상의 bundleId로 조회하여 cardId 리스트를 가진다.
		List<CardBundle> allByBundleIdForScarpCard = cardBundleRepository.findAllByBundleId(requestDto.getBundleId());

		//카드번들 객체 생성으로 복사 완료
		for (CardBundle forScrapTargetCardBundle : allByBundleIdForScarpCard) {
			Long forScrapTargetCardId = forScrapTargetCardBundle.getCardId();
			saveCardBundle(saveBundleId, forScrapTargetCardId);
			Card card = getCard(forScrapTargetCardId);
			card.addCardScrapCnt();
		}

	}

	//번들 생성하면서 있던 카드를 스크랩
	@Transactional
	public void scrapCardWithSaveBundle(Long cardId, BundleSaveRequestDto requestDto) {
		Long savedBundleId = saveBundle(requestDto);
		saveCardBundle(savedBundleId, cardId);
		Card card = getCard(cardId);
		card.addCardScrapCnt();
	}

	//CardBundle 객체 생성
	@Transactional
	public void saveCardBundle(Long bundleId, Long cardId) {
		cardBundleRepository.save(CardBundle.builder()
			.bundleId(bundleId)
			.cardId(cardId)
			.build());
	}

	//번들 찐 정보 수정
	@Transactional
	public Long updateBundleInfo(Long feedId, BundleUpdateRequestDto requestDto) {
		Bundle findBundle = bundleRepository.findById(feedId).orElseThrow(() ->
			new IllegalArgumentException("해당 번들의 id가 존재하지 않습니다 bundleId(feedId)= " + feedId));

		bundleRepository.save(findBundle.toBuilder().feedId(feedId)
			.feedTitle(requestDto.getFeedTitle())
			.feedContent(requestDto.getFeedContent())
			.bundleThumbnail(requestDto.getBundleThumbnail())
			.bundleThumbnailText(requestDto.getBundleThumbnailText())
			.isBundlePublic(requestDto.isBundlePublic())
			.build()
		);
		
		return feedId;
	}

	//번들 삭제
	@Transactional
	public Long deleteBundle(Long feedId) {
		Bundle findBundle = bundleRepository.findById(feedId).orElseThrow(() ->
			new IllegalArgumentException("해당 카드를 찾을 수 없습니다. bundleId(feedId)= " + feedId));

		findBundle.deleteFeed();

		return feedId;
	}

	//유저를 생성할때 기본 번들 생성 메서드 (유저 서비스에서 호출)
	public void saveDefaultBundle(Long userId) {
		saveBundle(BundleSaveRequestDto.builder()
			.userId(userId)
			.feedTitle("기본 번들")
			.build());
	}

	//cardId로 Card객체 가져오기
	public Card getCard(Long cardId) {
		return cardRepository.findByCardId(cardId).orElseThrow(() ->
			new IllegalArgumentException("해당 카드의 id가 존재하지 않습니다. cardId(feedId)= " + cardId));
	}
}
