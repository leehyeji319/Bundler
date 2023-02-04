package com.ssafy.bundler.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.bundler.domain.Card;

public interface CardRepository extends JpaRepository<Card, Long> {
	// @Query("select c from Card c where c.cardId = :feedId")
	// Optional<Card> findByCardId(@Param("feedId") Long feedId);
}
