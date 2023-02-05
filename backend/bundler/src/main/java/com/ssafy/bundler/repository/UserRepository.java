package com.ssafy.bundler.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.bundler.domain.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	User findByUserNickname(String userNickname);

	// Optional<User> findByProviderAndProviderId(String provider, String providerId);

	User findByUserId(String userId);

}
