package com.ssafy.bundler.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.bundler.domain.Card;
import com.ssafy.bundler.domain.CardBundle;
import com.ssafy.bundler.domain.CardType;
import com.ssafy.bundler.domain.Category;
import com.ssafy.bundler.domain.User;
import com.ssafy.bundler.dto.bundle.request.BundleScrapRequestDto;
import com.ssafy.bundler.dto.card.reqeust.CardListSaveRequestDto;
import com.ssafy.bundler.dto.card.reqeust.CardSaveRequestDto;
import com.ssafy.bundler.dto.card.reqeust.CardUpdateRequestDto;
import com.ssafy.bundler.repository.CardBundleRepository;
import com.ssafy.bundler.repository.CardRepository;
import com.ssafy.bundler.repository.CategoryRepository;
import com.ssafy.bundler.repository.FeedRepository;
import com.ssafy.bundler.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 *packageName    : com.ssafy.bundler.service
 * fileName       : CardService
 * author         : modsiw
 * date           : 2023/02/04
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/02/06        modsiw       삭제 리팩토링
 */
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class CardService {

	private final CardRepository cardRepository;
	private final FeedRepository feedRepository;
	private final UserRepository userRepository;
	private final CategoryRepository categoryRepository;
	private final CardBundleRepository cardBundleRepository;

	//문제, 일반 카드 생성
	@Transactional
	public Long saveCard(CardSaveRequestDto requestDto) {

		User writerUser = userRepository.findByUserId(requestDto.getUserId()).orElseThrow(() ->
			new IllegalArgumentException("해당 유저가 존재하지 않습니다. userId= " + requestDto.getUserId()));

		Category category = categoryRepository.findById(requestDto.getCategoryId()).orElseThrow(() ->
			new IllegalArgumentException("해당 카테고리 아이디가 존재하지 않습니다. categoryId= " + requestDto.getCategory()));

		Long savedFeedId = cardRepository.save(requestDto.toEntity(writerUser, category)).getFeedId();

		return savedFeedId;
	}

	//링크 카드 생성
	@Transactional
	public void saveLinkCard(CardSaveRequestDto requestDto) {
		saveCard(requestDto);
		String link = requestDto.getCardDescription(); //링크는 cardDescription에 링크 url이 들어온다.
		// 여기서 링크 백단으로 받아서 저장 -> Jsoup 으로 하는거. 아니면 아예 메소드로만 빼도 될듯??

	}

	//카드 리스트 받아왔을 때 번들로 안만들때
	@Transactional
	public void saveCardList(CardListSaveRequestDto requestDto) {
		int size = requestDto.getCardSaveRequestDtoList().size();
		for (int i = 0; i < size; i++) {
			CardSaveRequestDto cardSaveRequestDto = requestDto.getCardSaveRequestDtoList().get(i);
			String cardType = cardSaveRequestDto.getCardType();
			if (CardType.CARD_PROBLEM.toString().equals(cardType)) {
				saveCard(cardSaveRequestDto);
			} else if (CardType.CARD_GENERAL.toString().equals(cardType)) {
				saveCard(cardSaveRequestDto);
			} else {
				//링크카드로 보내야하지만 아직 구현이 안됐음
				saveCard(cardSaveRequestDto);
			}
		}
	}

	@Transactional
	public List<Long> saveCardListwithBundle(List<CardSaveRequestDto> requestDto) {

		List<Long> savedCardList = new ArrayList<Long>();

		int size = requestDto.size();

		for (int i = 0; i < size; i++) {
			CardSaveRequestDto cardSaveRequestDto = requestDto.get(i);
			String cardType = cardSaveRequestDto.getCardType();
			if (CardType.CARD_PROBLEM.toString().equals(cardType)) {
				savedCardList.add(saveCard(cardSaveRequestDto));
			} else if (CardType.CARD_GENERAL.toString().equals(cardType)) {
				savedCardList.add(saveCard(cardSaveRequestDto));
			} else {
				//링크카드로 보내야하지만 아직 구현이 안됐음
				savedCardList.add(saveCard(cardSaveRequestDto));
			}
		}
		return savedCardList;
	}

	//수정 -> 링크카드와 일반카드일때 다름
	@Transactional
	public Long updateCard(Long feedId, CardUpdateRequestDto requestDto) {
		Card findCard = cardRepository.findById(feedId).orElseThrow(() ->
			new IllegalArgumentException("해당 카드를 찾을 수 없습니다. cardId(feedId)= " + feedId));

		cardRepository.save(findCard.toBuilder().feedId(feedId)
			.feedTitle(requestDto.getFeedTitle())
			.feedContent(requestDto.getFeedContent())
			.cardDescription(requestDto.getCardDescription())
			.cardCommentary(requestDto.getCardCommentary())
			.category(categoryRepository.findById(requestDto.getCategoryId()).get())
			.build());

		return feedId;
	}

	//삭제 ver1 (isDeleted=true)
	@Transactional
	public Long deleteCardV1(Long feedId) {
		Card findCard = cardRepository.findById(feedId).orElseThrow(() ->
			new IllegalArgumentException("해당 카드를 찾을 수 없습니다. cardId(feedId)= " + feedId));

		findCard.deleteFeed();

		return feedId;
	}

	//카드 삭제 ver2 (entity delete)
	@Transactional
	public Long deleteCardV2(Long feedId) {
		Card card = cardRepository.findById(feedId).orElseThrow(() -> new IllegalArgumentException(
			"해당 카드를 찾을 수 없습니다. cardId= " + feedId));

		cardRepository.delete(card);

		return feedId;
	}

	//===== Bundle =====//
	@Transactional
	public void scrapCardWithExistBundle(BundleScrapRequestDto requestDto) {
		//카드의 scrapCnt + 1
		Card card = cardRepository.findById(requestDto.getCardId()).orElseThrow(() ->
			new IllegalArgumentException("해당 카드의 id를 찾을 수 없습니다. cardId(feedId)= " + requestDto.getCardId()));
		card.addCardScrapCnt();

		//CardBundle에 넣어주기 -> 이미 번들에 존재하는 카드면 넣으면 안됨
		validateIsDuplicatedCardInBundle(requestDto.getBundleId(), requestDto.getCardId());
		saveCardBundle(requestDto.getBundleId(), requestDto.getCardId());
	}

	//CardBundle 객체 생성
	@Transactional
	public void saveCardBundle(Long bundleId, Long cardId) {
		cardBundleRepository.save(CardBundle.builder()
			.bundleId(bundleId)
			.cardId(cardId)
			.build());
	}

	//검증로직
	private void validateIsDuplicatedCardInBundle(Long bundleId, Long cardId) {
		if (cardBundleRepository.findCardBundleByBundleIdWithCardId(bundleId, cardId) != null) {
			throw new IllegalArgumentException("이미 해당 번들에 존재하는 카드입니다.");
		}
	}

}
