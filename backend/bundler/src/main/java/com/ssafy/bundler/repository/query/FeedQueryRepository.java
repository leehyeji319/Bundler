package com.ssafy.bundler.repository.query;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.ssafy.bundler.dto.feed.FeedCardResponseDto;
import com.ssafy.bundler.dto.feed.FeedCommentResponseDto;

import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class FeedQueryRepository {

	private final EntityManager em;

	// ====== 메인 전체 조회 ====== //

	// ====== 카드 전체 조회 ====== //
	public List<FeedCardResponseDto> findFeedCardQueryDtos() {
		List<FeedCardResponseDto> result = findCards();

		result.forEach(c -> {
			List<FeedCommentResponseDto> feedComments = findFeedComment(c.getFeedId());
			c.setFeedCommentList(feedComments);
		});

		return result;
	}

	//isDeleted 추가해야함
	public List<FeedCardResponseDto> findCards() {
		return em.createQuery(
				"select new com.ssafy.bundler.dto.feed.FeedCardResponseDto"
					+ "(c.feedId, c.createdAt, c.writer.userId, c.writer.userNickname,"
					+ " ca.categoryId, ca.categoryName, c.feedTitle, c.feedContent,"
					+ " c.cardType, c.cardDescription, c.cardCommentary, c.feedLikeCnt,"
					+ " c.cardScrapCnt, c.feedCommentCnt)"
					+ " from Card c"
					+ " left join c.feedCategoryList fc"
					+ " left join fc.category ca", FeedCardResponseDto.class)
			.getResultList();
	}

	public List<FeedCommentResponseDto> findFeedComment(Long feedId) {
		return em.createQuery(
				"select new com.ssafy.bundler.dto.feed.FeedCommentResponseDto"
					+ "(c.commentId, c.feedId, c.writer.userId, c.writer.userNickname, "
					+ "c.writer.userProfileImage, c.commentContent, c.createdAt)"
					+ " from Comment c"
					+ " where c.feedId = :feedId", FeedCommentResponseDto.class)
			.setParameter("feedId", feedId)
			.getResultList();
	}

	// ===== 번들 전체 조회 ======= //

	// ==== 카드 번들 전체조회 + 검색어 ==== //

	// ==== 카드 전체조회 + 검색어 ==== //

	// ==== 번들 전체조회 + 검색어 ==== //

	// ==== 카드에서 유형 검색 ==== //

	// ==== 사용자 카드 + 피드 전체 검색 (isbundlepublic) ====//
}
