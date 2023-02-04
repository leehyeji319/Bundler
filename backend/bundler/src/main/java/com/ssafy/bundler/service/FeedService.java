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
import com.ssafy.bundler.repository.query.FeedQueryRepository;

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
	private final FeedQueryRepository feedQueryRepository;

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

	//카드 리스트 조회
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

	public List<Object> test() {
		List<CardSummaryResponseDto> cardSummanryList = findCardSummanryList();
		List<BundleResponseDto> allByDto_optimization = feedQueryRepository.findAllByDto_optimization();

		List<Object> objects = new ArrayList<>();

		for (CardSummaryResponseDto c : cardSummanryList) {
			objects.add(c);
		}
		for (BundleResponseDto b : allByDto_optimization) {
			objects.add(b);
		}

		/*
		objects.sort((o1, o2) -> {
			CardSummaryResponseDto o1Card = null;
			if (o1 instanceof CardSummaryResponseDto) {
				o1Card = (CardSummaryResponseDto)o1;
			}

			BundleResponseDto o1Bundle = null;
			if (o2 instanceof BundleResponseDto) {
				o1Bundle = (BundleResponseDto)o1;
			}

			CardSummaryResponseDto o2Card = null;
			if (o1 instanceof CardSummaryResponseDto) {
				o2Card = (CardSummaryResponseDto)o2;
			}

			BundleResponseDto o2Bundle = null;
			if (o2 instanceof BundleResponseDto) {
				o2Bundle = (BundleResponseDto)o2;
			}

			if (o1 instanceof CardSummaryResponseDto && o2 instanceof CardSummaryResponseDto) {
				System.out.println("-----o1 o2 card----");
				System.out.println("o1 카드: " + o1Card.getCreatedAt());
				System.out.println("o2 카드: " + o2Card.getCreatedAt());
				System.out.println();
				return o1Card.getCreatedAt().compareTo(o2Card.getCreatedAt());

			} else if (o1 instanceof CardSummaryResponseDto && o2 instanceof BundleResponseDto) {
				System.out.println("-----o1 card o2 bundle----");
				System.out.println("o1 카드:" + o1Card.getCreatedAt());
				System.out.println("o2 번들:" + o2Bundle.getCreatedAt());
				System.out.println();
				return o1Card.getCreatedAt().compareTo(o2Bundle.getCreatedAt());

			} else if (o1 instanceof BundleResponseDto && o2 instanceof CardSummaryResponseDto) {
				System.out.println("-----o1 bundle o2 card----");
				System.out.println("o1 번들:" + o1Bundle.getCreatedAt());
				System.out.println("o2 카드: " + o2Card.getCreatedAt());
				System.out.println();
				return o1Bundle.getCreatedAt().compareTo(o2Card.getCreatedAt());

			} else {
				System.out.println("-----o1 o2 bundle----");
				System.out.println("o1 번들:" + o1Bundle.getCreatedAt());
				System.out.println("o2 번들:" + o2Bundle.getCreatedAt());
				return o1Bundle.getCreatedAt().compareTo(o2Bundle.getCreatedAt());
			}
		});
		*/

		return objects;
	}
}
