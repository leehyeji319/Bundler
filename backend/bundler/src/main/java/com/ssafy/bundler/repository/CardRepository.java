package com.ssafy.bundler.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.bundler.domain.Card;

public interface CardRepository extends JpaRepository<Card, Long> {
	Optional<Card> findByCardId(Long feedId);
}
