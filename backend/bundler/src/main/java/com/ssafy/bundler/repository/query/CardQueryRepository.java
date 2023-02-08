package com.ssafy.bundler.repository.query;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.stereotype.Repository;

import com.ssafy.bundler.dto.card.response.CardResponseDto;
import com.ssafy.bundler.dto.comment.CommentResponseDto;
import com.ssafy.bundler.repository.CommentRepository;

import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;

/**
 *packageName    : com.ssafy.bundler.repository.query
 * fileName       : CardQueryRepository
 * author         : modsiw
 * date           : 2023/02/08
 * description    : 카드 조회시에 쓰이는 쿼리 레포지토리
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/02/08        modsiw       최초 생성
 */
@Repository
@RequiredArgsConstructor
public class CardQueryRepository {

	private final EntityManager em;
	private final CommentRepository commentRepository;

	//카드 리스트 다 가져오기
	public List<CardResponseDto> findAllCardByDto_optimization() {
		List<CardResponseDto> result = findCards();

		Map<Long, List<CommentResponseDto>> cardCommentMap = findCardCommentMap(toCardIds(result));

		result.forEach(c -> c.setCommentResponseDtoList(cardCommentMap.get(c.getCardId())));

		return result;
	}

	private List<Long> toCardIds(List<CardResponseDto> result) {
		return result.stream()
			.map(c -> c.getCardId())
			.collect(Collectors.toList());
	}

	private List<CardResponseDto> findCards() {
		return em.createQuery(
				"select new com.ssafy.bundler.dto.card.response.CardResponseDto"
					+ "(c.cardId, c.createdAt, c.cardType,"
					+ " w.userId, w.userProfileImage, w.userNickname,"
					+ " c.category.parent.categoryId, c.category.parent.categoryName,"
					+ " c.category.categoryId, c.category.categoryName,"
					+ " c.feedTitle, c.feedContent, c.cardDescription, c.cardCommentary,"
					+ " c.cardScrapCnt, c.feedLikeCnt, c.feedCommentCnt)"
					+ " from Card c"
					+ " join c.writer w", CardResponseDto.class)
			.getResultList();
	}

	public Map<Long, List<CommentResponseDto>> findCardCommentMap(List<Long> cardIds) {

		List<CommentResponseDto> cardComment = em.createQuery(
				"select new com.ssafy.bundler.dto.comment.CommentResponseDto"
					+ "(c.commentId, c.feedId,"
					+ " c.writer.userId, c.writer.userNickname, c.writer.userProfileImage,"
					+ " c.commentContent, c.createdAt)"
					+ " from Comment c"
					+ " where c.feedId in :feedIds", CommentResponseDto.class)
			.setParameter("feedIds", cardIds)
			.getResultList();

		return cardComment.stream()
			.collect(Collectors.groupingBy(CommentResponseDto::getFeedId));
	}
}
