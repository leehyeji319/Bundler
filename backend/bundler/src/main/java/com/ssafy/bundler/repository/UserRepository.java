package com.ssafy.bundler.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.bundler.domain.User;

public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findByUserNickname(String userNickname);
	Optional<User> findByProviderAndProviderId(String provider, String providerId);

}
