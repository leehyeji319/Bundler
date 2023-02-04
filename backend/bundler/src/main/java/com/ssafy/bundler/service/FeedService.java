package com.ssafy.bundler.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.bundler.domain.Card;
import com.ssafy.bundler.domain.Comment;
import com.ssafy.bundler.dto.card.response.CardResponseDto;
import com.ssafy.bundler.dto.card.response.CardSummaryResponseDto;
import com.ssafy.bundler.dto.comment.CommentResponseDto;
import com.ssafy.bundler.repository.BundleRepository;
import com.ssafy.bundler.repository.CardRepository;
import com.ssafy.bundler.repository.CommentRepository;
import com.ssafy.bundler.repository.FeedRepository;
import com.ssafy.bundler.repository.LinkRepository;

import jakarta.persistence.EntityManager;
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
	private final CommentRepository commentRepository;
	private final BundleRepository bundleRepository;
	private final LinkRepository linkRepository;

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

}
