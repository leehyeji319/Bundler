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
 * fileName       : UserFeedQueryRepository
 * author         : modsiw
 * date           : 2023/02/06
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/02/06        modsiw       최초 생성
 */

@Repository
@RequiredArgsConstructor
public class UserFeedQueryRepository {

	private final EntityManager em;

	public List<BundleResponseDto> findBundlesByUserIdContainIsBundlePrivate(Long userId) {

		List<BundleResponseDto> result = findBundlesSelf(userId);
		Map<Long, List<CardBundleQueryDto>> cardBundleMap = findCardBundleMap(toBundleIds(result));
		result.forEach(b -> b.setCardBundleQueryDtoList(cardBundleMap.get(b.getBundleId())));

		return result;
	}

	public List<BundleResponseDto> findBundlesByUserIdExceptIsBundlePrivate(Long userId) {

		List<BundleResponseDto> result = findBundlesOther(userId);
		Map<Long, List<CardBundleQueryDto>> cardBundleMap = findCardBundleMap(toBundleIds(result));
		result.forEach(b -> b.setCardBundleQueryDtoList(cardBundleMap.get(b.getBundleId())));

		return result;
	}

	//번들 여러개 리스트 아이디들만 뽑아오기
	private List<Long> toBundleIds(List<BundleResponseDto> result) {
		return result.stream()
			.map(b -> b.getBundleId())
			.collect(Collectors.toList());
	}

	//내가 작성한 번들 리스트 (isBundlePrivate 상관없음)
	private List<BundleResponseDto> findBundlesSelf(Long userId) {
		return em.createQuery(
				"select new com.ssafy.bundler.dto.bundle.response.BundleResponseDto"
					+ "(b.bundleId, b.createdAt, w.userId, w.userProfileImage, w.userNickname,"
					+ " b.feedTitle, b.feedContent, b.bundleThumbnail, b.bundleThumbnailText,"
					+ " b.feedLikeCnt, b.feedCommentCnt, b.isBundleDefault, b.isBundlePrivate)"
					+ " from Bundle b"
					+ " join b.writer w"
					+ " where w.userId = :userId ", BundleResponseDto.class)
			.setParameter("userId", userId)
			.getResultList();
	}

	//남이 작성한 번들 리스트 (isBundlePrivate 상관있음)
	private List<BundleResponseDto> findBundlesOther(Long userId) {
		return em.createQuery(
				"select new com.ssafy.bundler.dto.bundle.response.BundleResponseDto"
					+ "(b.bundleId, b.createdAt, w.userId, w.userProfileImage, w.userNickname,"
					+ " b.feedTitle, b.feedContent, b.bundleThumbnail, b.bundleThumbnailText,"
					+ " b.feedLikeCnt, b.feedCommentCnt)"
					+ " from Bundle b"
					+ " join b.writer w"
					+ " where b.isBundlePrivate = :isBundlePrivate"
					+ " and w.userId = :userId ", BundleResponseDto.class)
			.setParameter("isBundlePrivate", 0)
			.setParameter("userId", userId)
			.getResultList();
	}

	//카드 번들 엔티티에서 번들 아이디 여러개로 관련 카드들 가져오기
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

		return cardbundle.stream()
			.collect(Collectors.groupingBy(CardBundleQueryDto::getBundleId));
	}

}
