package com.ssafy.bundler.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.bundler.domain.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
