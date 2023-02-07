package com.ssafy.bundler.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.bundler.domain.User;

public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findByUserNickname(String userNickname);

	List<User> findAllByUserNicknameLike(String keyword); //사용자 검색

	User findByUserId(Long userId);

	// Optional<User> findByUserId(Long userId);
}
