package com.ssafy.bundler.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.bundler.repository.BundleRepository;
import com.ssafy.bundler.repository.CardRepository;
import com.ssafy.bundler.repository.FeedRepository;
import com.ssafy.bundler.repository.LinkRepository;
import com.ssafy.bundler.repository.query.BundleQueryRepository;
import com.ssafy.bundler.repository.query.CardQueryRepository;
import com.ssafy.bundler.repository.query.UserFeedQueryRepository;

import lombok.RequiredArgsConstructor;

/**
 * 카드 조회
 *
 * @author 이혜지
 * @version 1.0
 */

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FeedService {

	private final FeedRepository feedRepository;
	private final CardRepository cardRepository;
	private final BundleRepository bundleRepository;
	private final LinkRepository linkRepository;
	private final BundleQueryRepository budnleQueryRepository;
	private final CardQueryRepository cardQueryRepository;
	private final UserFeedQueryRepository userFeedQueryRepository;

	private EntityManager em;

	//카드 개별 조회 = 카드정보 + 댓글 리스트
	public CardResponseDto findCard(Long feedId) {
		CardResponseDto cardResponseDto = new CardResponseDto(cardRepository.findById(feedId).get());

		List<Comment> commentList = commentRepository.findAllByFeedId(feedId);

		List<CommentResponseDto> collect = commentList.stream()
			.map(CommentResponseDto::new)
			.collect(Collectors.toList());

		cardResponseDto.setCommentResponseDtoList(collect);

		return cardResponseDto;
	}

	//카드 리스트 조회 V1 (Summary)
	public List<CardSummaryResponseDto> findCardSummanryList() {
		List<Card> all = cardRepository.findAll();

		List<CardSummaryResponseDto> collect = all.stream()
			.map(CardSummaryResponseDto::new)
			.collect(Collectors.toList());

		return collect;
	}

	public List<Feed> findAll() {
		List<Feed> all = feedRepository.findAll();
		return all;
	}

	//피드 전체조회시에 반환. 번들 + 번들의 댓글, 카드 + 카드의 댓글
	public List<Object> getAllFeed() {
		List<CardResponseDto> cardResponseDtoList = cardQueryRepository.findAllCardByDto_optimization();
		// List<CardSummaryResponseDto> cardSummanryList = findCardSummanryList();
		List<BundleResponseDto> allByDto_optimization = budnleQueryRepository.findAllBundleByDto_optimization();

		List<Object> objects = new ArrayList<>();

		for (CardResponseDto c : cardResponseDtoList) {
			objects.add(c);
		}
		for (BundleResponseDto b : allByDto_optimization) {
			objects.add(b);
		}

		return objects;
	}

	public List<CardSummaryResponseDto> getAllCardsFindByUserId(Long userId) {

		List<Card> all = cardRepository.findAllByUserId(userId);

		List<CardSummaryResponseDto> collect = all.stream().map(
				CardSummaryResponseDto::new)
			.collect(Collectors.toList());

	//번들 조회

	//번들 리스트 조회

	public List<BundleResponseDto> getBundlesFindByUserIdExceptIsBundlePrivate(Long userId) {
		return userFeedQueryRepository.findBundlesByUserIdExceptIsBundlePrivate(userId);
	}

	public void findCardsByCategoryName() {
	}
}
