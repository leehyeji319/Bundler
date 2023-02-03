package com.ssafy.bundler.repository.query;

import org.springframework.stereotype.Repository;

import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class CardQueryRepository {

	private final EntityManager em;

	// List<CardResponseDto> findAllCardwithCommentList(int offset, int limit) {
	// 	return em.createQuery(
	// 			// "select new com.ssafy.bundler.dto.card.response."
	// 			//  + "CardResponseDto(c.feedId, c.cardType, c.writer.userId,"
	// 			// 	+ " c.writer.userProfileImage, c.writer.userNickname,"
	// 			// 	+ " c.feedTitle, c.feedContent, c.cardDescription, c.cardCommentary,"
	// 			// 	+ " c.cardScrapCnt, c.feedLikeCnt, c.feedCommentCnt,"
	// 			// 	+ " co)" + "from Card c left join c.commentList co", CardResponseDto.class)
	// 		.setFirstResult(offset)
	// 		.setMaxResults(limit)
	// 		.getResultList();
	// }
}
