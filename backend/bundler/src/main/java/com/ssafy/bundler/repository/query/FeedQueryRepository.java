package com.ssafy.bundler.repository.query;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.stereotype.Repository;

import com.ssafy.bundler.dto.bundle.response.BundleResponseDto;
import com.ssafy.bundler.dto.bundle.response.CardBundleQueryDto;

import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;

/**
 *packageName    : com.ssafy.bundler.repository.query
 * fileName       : FeedQueryRepository
 * author         : modsiw
 * date           : 2023/02/04
 * description    : 번들 조회시에 쓰이는 쿼리 레포지토리
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/02/04        modsiw       최초 생성
 */
@Repository
@RequiredArgsConstructor
public class FeedQueryRepository {

	private final EntityManager em;

	public List<BundleResponseDto> findAllByDto_optimization() {

		List<BundleResponseDto> result = findBundles();

		Map<Long, List<CardBundleQueryDto>> cardBundleMap = findCardBundleMap(toBundleIds(result));

		result.forEach(b -> b.setCardBundleQueryDtoList(cardBundleMap.get(b.getBundleId())));

		return result;
	}

	private List<Long> toBundleIds(List<BundleResponseDto> result) {
		return result.stream()
			.map(b -> b.getBundleId())
			.collect(Collectors.toList());
	}

	private List<BundleResponseDto> findBundles() {
		return em.createQuery(
				"select new com.ssafy.bundler.dto.bundle.response.BundleResponseDto"
					+ "(b.bundleId, b.createdAt, w.userId, w.userProfileImage, w.userNickname,"
					+ " b.feedTitle, b.feedContent, b.bundleThumbnail, b.bundleThumbnailText)"
					+ " from Bundle b"
					+ " join b.writer w", BundleResponseDto.class)
			.getResultList();
	}

	public Map<Long, List<CardBundleQueryDto>> findCardBundleMap(List<Long> bundleIds) {

		List<CardBundleQueryDto> cardbundle = em.createQuery(
				"select new com.ssafy.bundler.dto.bundle.response.CardBundleQueryDto"
					+ "(cb.bundle.bundleId, c.cardId, c.createdAt, c.cardType, c.writer.userId,"
					+ " c.writer.userProfileImage, c.writer.userNickname, c.feedTitle, c.feedContent,"
					+ " c.category.parent.categoryId, c.category.parent.categoryName,"
					+ " c.category.categoryId, c.category.categoryName,"
					+ " c.cardScrapCnt, c.feedLikeCnt, c.feedCommentCnt)"
					+ " from CardBundle cb"
					+ " join cb.card c"
					+ " where cb.bundle.bundleId in :bundleIds", CardBundleQueryDto.class)
			.setParameter("bundleIds", bundleIds)
			.getResultList();

		// System.out.println(bundleIds1.size());
		return cardbundle.stream()
			.collect(Collectors.groupingBy(CardBundleQueryDto::getBundleId));
	}

}
