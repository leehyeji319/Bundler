package com.ssafy.bundler.controller;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.test.context.junit4.SpringRunner;

import com.ssafy.bundler.domain.Comment;
import com.ssafy.bundler.domain.Feed;
import com.ssafy.bundler.domain.User;
import com.ssafy.bundler.repository.CommentRepository;
import com.ssafy.bundler.repository.FeedRepository;
import com.ssafy.bundler.repository.UserRepository;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)

public class CommentControllerTest {
	@LocalServerPort
	private int port;

	@Autowired
	private TestRestTemplate testRestTemplate;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private FeedRepository feedRepository;
	@Autowired
	private CommentRepository commentRepository;

	private Feed feed;
	private User user;
	private Comment comment;

	@Before
	public void createTestData() {

		//given
		feed = new Feed().builder().build();
		feedRepository.save(feed);

		user = new User().builder().build();
		userRepository.save(user);

		comment = new Comment().builder()
			.feedId(feed.getFeedId())
			.writer(user)
			.commentContent("test comment")
			.build();
		commentRepository.save(comment);
	}

	@After
	public void deleteTestData() throws Exception {
		System.out.println("deleteTestDatadeleteTestDatadeleteTestDatadeleteTestData");
		feedRepository.deleteById(feed.getFeedId());
		userRepository.deleteById(user.getUserId());
	}

	@Test
	public void comment_be_created() throws Exception {

		// String commentContent = "test content";
		//
		// long targetFeedId = feed.getFeedId();
		//
		// CommentSaveRequestDto commentDto = new CommentSaveRequestDto().builder()
		// 	.targetFeedId(targetFeedId)
		// 	.content(commentContent)
		// 	.build();
		// String url = "http://localhost:" + port + "/comment";
		// //when
		// ResponseEntity<Long> responseEntity = testRestTemplate.postForEntity(url, commentDto, Long.class);
		//
		// //then
		// assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
		// assertThat(responseEntity.getBody()).isGreaterThan(0L);
		//
		// List<Comment> comments = commentRepository.findAll();
		// assertThat(comments.get(0).getCommentContent()).isEqualTo(commentContent);
	}

	@Test
	public void comment_be_updated() {
		//given
		// String commentContentToUpdate = "test content after update";
		//
		// CommentUpdateRequestDto commentDto = new CommentUpdateRequestDto().builder()
		// 	.content(commentContentToUpdate)
		// 	.build();
		//
		// HttpEntity<CommentUpdateRequestDto> requestEntity = new HttpEntity<>(commentDto);
		// String url = "http://localhost:" + port + "/comment/" + comment.getCommentId();
		// //when
		// ResponseEntity<Long> responseEntity = testRestTemplate.exchange(url, HttpMethod.PUT, requestEntity, Long.class);
		//
		// //then
		// assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
		// assertThat(responseEntity.getBody()).isGreaterThan(0L);
		//
		// Comment updatedComment = commentRepository.findById(comment.getCommentId()).get();
		// assertThat(updatedComment.getCommentContent()).isEqualTo(commentContentToUpdate);
	}

}