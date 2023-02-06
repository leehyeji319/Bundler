package com.ssafy.bundler.repository.query;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.stereotype.Repository;

import com.ssafy.bundler.domain.Comment;
import com.ssafy.bundler.dto.bundle.response.BundleResponseDto;
import com.ssafy.bundler.dto.bundle.response.CardBundleQueryDto;
import com.ssafy.bundler.dto.comment.CommentResponseDto;
import com.ssafy.bundler.repository.CommentRepository;

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
 * 2023/02/05		 modsiw		  번들 개별 조회 생성
 */
@Repository
@RequiredArgsConstructor
public class FeedQueryRepository {

	private final EntityManager em;
	private final CommentRepository commentRepository;

	//번들 리스트
	public List<BundleResponseDto> findAllBundleByDto_optimization() {

		List<BundleResponseDto> result = findBundles();

		Map<Long, List<CardBundleQueryDto>> cardBundleMap = findCardBundleMap(toBundleIds(result));

		result.forEach(b -> b.setCardBundleQueryDtoList(cardBundleMap.get(b.getBundleId())));

		return result;
	}

	//번들 한개
	public BundleResponseDto findBundleByDto_optimization(Long bundleId) {

		BundleResponseDto result = findBundle(bundleId);

		Map<Long, List<CardBundleQueryDto>> cardBundleMap = findCardBundleMap(bundleId);
		result.setCardBundleQueryDtoList(cardBundleMap.get(bundleId));

		List<CommentResponseDto> bundleComment = findBundleComment(bundleId);
		result.setBundleCommentResponseList(bundleComment);

		return result;

	}

	//번들 하나에 있는 코멘트들 찾기
	public List<CommentResponseDto> findBundleComment(Long bundleId) {
		List<Comment> commentList = commentRepository.findAllByFeedId(bundleId);

		return commentList.stream()
			.map(CommentResponseDto::new)
			.collect(Collectors.toList());
	}

	//번들 여러개 리스트 아이디들만 뽑아오기
	private List<Long> toBundleIds(List<BundleResponseDto> result) {
		return result.stream()
			.map(b -> b.getBundleId())
			.collect(Collectors.toList());
	}

	//번들 여러개 찾기
	private List<BundleResponseDto> findBundles() {
		return em.createQuery(
				"select new com.ssafy.bundler.dto.bundle.response.BundleResponseDto"
					+ "(b.bundleId, b.createdAt, w.userId, w.userProfileImage, w.userNickname,"
					+ " b.feedTitle, b.feedContent, b.bundleThumbnail, b.bundleThumbnailText,"
					+ " b.feedLikeCnt, b.feedCommentCnt)"
					+ " from Bundle b"
					+ " join b.writer w"
					+ " where b.isBundlePrivate = :isBundlePrivate", BundleResponseDto.class)
			.setParameter("isBundlePrivate", 0)
			.getResultList();
	}

	//번들 하나만 찾기 번들 id에 속한 카드들
	private BundleResponseDto findBundle(Long bundleId) {
		return em.createQuery(
				"select new com.ssafy.bundler.dto.bundle.response.BundleResponseDto"
					+ "(b.bundleId, b.createdAt, w.userId, w.userProfileImage, w.userNickname,"
					+ " b.feedTitle, b.feedContent, b.bundleThumbnail, b.bundleThumbnailText,"
					+ " b.feedLikeCnt, b.feedCommentCnt)"
					+ " from Bundle b"
					+ " join b.writer w"
					+ " where b.bundleId = :bundleId", BundleResponseDto.class)
			.setParameter("bundleId", bundleId)
			.getSingleResult();
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

	//카드번들 엔티티에서 번들 아이디 하나로 카드들 찾기
	public Map<Long, List<CardBundleQueryDto>> findCardBundleMap(Long bundleId) {

		List<CardBundleQueryDto> cardbundle = em.createQuery(
				"select new com.ssafy.bundler.dto.bundle.response.CardBundleQueryDto"
					+ "(cb.bundle.bundleId, c.cardId, c.createdAt, c.cardType, c.writer.userId,"
					+ " c.writer.userProfileImage, c.writer.userNickname, c.feedTitle, c.feedContent,"
					+ " c.category.parent.categoryId, c.category.parent.categoryName,"
					+ " c.category.categoryId, c.category.categoryName,"
					+ " c.cardScrapCnt, c.feedLikeCnt, c.feedCommentCnt)"
					+ " from CardBundle cb"
					+ " join cb.card c"
					+ " where cb.bundle.bundleId = :bundleId"
					+ " and cb.bundle.isBundlePrivate = :isBundlePrivate", CardBundleQueryDto.class)
			.setParameter("bundleId", bundleId)
			.setParameter("isBundlePrivate", 0)
			.getResultList();

		return cardbundle.stream()
			.collect(Collectors.groupingBy(CardBundleQueryDto::getBundleId));
	}
}
