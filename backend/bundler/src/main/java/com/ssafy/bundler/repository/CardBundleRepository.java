package com.ssafy.bundler.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.bundler.domain.CardBundle;

public interface CardBundleRepository extends JpaRepository<CardBundle, Long> {

	List<CardBundle> findAllByBundleId(Long bundleId);
}
