package com.ssafy.bundler.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ssafy.bundler.domain.CardBundle;

public interface CardBundleRepository extends JpaRepository<CardBundle, Long> {

	List<CardBundle> findAllByBundleId(Long bundleId);

	// @Query("SELECT c.name FROM Category c WHERE c.user.id = :userId and c.name = :categoryName")
	// String existCategoryByUserId(@Param("userId") Long userId, @Param("categoryName") String categoryName);

	@Query("select cb from CardBundle cb where cb.bundleId = :bundleId and cb.cardId = :cardId")
	CardBundle findCardBundleByBundleIdWithCardId(@Param("bundleId") Long bundleId, @Param("cardId") Long cardId);
}
