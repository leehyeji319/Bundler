package com.ssafy.bundler.repository;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CardRepositoryTest {

	@Autowired
	UserRepository userRepository;
	@Autowired
	CardRepository cardRepository;
	@Autowired
	CardBundleRepository cardBundleRepository;
	@Autowired
	FeedCategoryRepository feedCategoryRepository;

	@Test
	@DisplayName("")
	void 유저_생성() throws Exception {
		//given

		//when

		//then

	}

	@Test
	@DisplayName("")
	void 카드_생성() throws Exception {
		//given

		//when

		//then

	}

	@Test
	@DisplayName("")
	void 카드_조회() throws Exception {
		//given

		//when

		//then

	}

}