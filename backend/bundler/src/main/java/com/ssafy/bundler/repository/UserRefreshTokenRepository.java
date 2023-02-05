package com.ssafy.bundler.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.bundler.domain.UserRefreshToken;

@Repository
public interface UserRefreshTokenRepository extends JpaRepository<UserRefreshToken, Long> {

	UserRefreshToken findByUserId(String userId);

	UserRefreshToken findByUserIdAndRefreshToken(String userId, String refreshToken);

}
