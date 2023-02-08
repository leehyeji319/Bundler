package com.ssafy.bundler.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.bundler.domain.Card;
import com.ssafy.bundler.domain.Comment;
import com.ssafy.bundler.domain.Feed;
import com.ssafy.bundler.dto.bundle.response.BundleResponseDto;
import com.ssafy.bundler.dto.card.response.CardResponseDto;
import com.ssafy.bundler.dto.card.response.CardSummaryResponseDto;
import com.ssafy.bundler.dto.comment.CommentResponseDto;
import com.ssafy.bundler.repository.BundleRepository;
import com.ssafy.bundler.repository.CardRepository;
import com.ssafy.bundler.repository.CommentRepository;
import com.ssafy.bundler.repository.FeedRepository;
import com.ssafy.bundler.repository.LinkRepository;
import com.ssafy.bundler.repository.query.BudnleQueryRepository;
import com.ssafy.bundler.repository.query.UserFeedQueryRepository;

import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;

/**
 *packageName    : com.ssafy.bundler.dto.bundle.response
 * fileName       : FeedService
 * author         : modsiw
 * date           : 2023/02/04
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/02/04        modsiw       최초 생성
 */

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FeedService {

	private final FeedRepository feedRepository;
	private final CardRepository cardRepository;
	private final CommentRepository commentRepository;
	private final BundleRepository bundleRepository;
	private final LinkRepository linkRepository;
	private final BudnleQueryRepository feedQueryRepository;
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

	public List<Object> getAllFeed() {
		List<CardSummaryResponseDto> cardSummanryList = findCardSummanryList();
		List<BundleResponseDto> allByDto_optimization = feedQueryRepository.findAllBundleByDto_optimization();

		List<Object> objects = new ArrayList<>();

		for (CardSummaryResponseDto c : cardSummanryList) {
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

		return collect;
	}

	public List<BundleResponseDto> getBundlesFindByUserIdContainIsBundlePrivate(Long userId) {
		return userFeedQueryRepository.findBundlesByUserIdContainIsBundlePrivate(userId);
	}

	public List<BundleResponseDto> getBundlesFindByUserIdExceptIsBundlePrivate(Long userId) {
		return userFeedQueryRepository.findBundlesByUserIdExceptIsBundlePrivate(userId);
	}
}
