package com.ssafy.bundler.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.bundler.domain.Bundle;

public interface BundleRepository extends JpaRepository<Bundle, Long> {
}
