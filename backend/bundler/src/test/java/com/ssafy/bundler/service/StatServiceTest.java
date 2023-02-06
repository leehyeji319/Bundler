package com.ssafy.bundler.service;

import static org.assertj.core.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.ssafy.bundler.domain.User;
import com.ssafy.bundler.repository.UserRepository;

@SpringBootTest
class StatServiceTest {

	@Autowired
	StatService statService;
	@Autowired
	UserRepository userRepository;

	@Test
	void getActivityStatTest() {
		//given
		User user = User.builder().userEmail("test@email.com").userNickname("testNickname").
			build();
		user = userRepository.save(user);

		//when
		String date = statService.getActivityStat(user.getUserId());

		//then
		assertThat(date).isEqualTo(user.getCreatedAt().toLocalDate().toString());
		System.out.println(date);

	}
}