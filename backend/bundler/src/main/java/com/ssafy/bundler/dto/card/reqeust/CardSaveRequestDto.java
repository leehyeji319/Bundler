package com.ssafy.bundler.dto.card.reqeust;

import com.ssafy.bundler.domain.Card;
import com.ssafy.bundler.domain.CardType;
import com.ssafy.bundler.domain.User;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class CardSaveRequestDto {
	//문제, 일반, 링크를 한번에 받는다

	@NotEmpty
	private Long userId;

	private User writer;

	@NotEmpty
	private String feedType;

	@NotEmpty
	private String feedTitle;
	private String feedContent;

	@NotEmpty
	private Long categoryId;
	// private Long categorySecondId;

	@NotEmpty
	private String cardType;

	private String cardDescription;
	private String cardCommentary;

	private Long feedId;

	public Card toEntity(User writer) {
		Card build = Card.builder()
			.writer(writer)
			.feedTitle(this.feedTitle)
			.feedContent(this.feedContent)
			.cardType(CardType.valueOf(this.cardType))
			.cardDescription(this.cardDescription)
			.cardCommentary(this.cardCommentary)
			.build();

		System.out.println(build);
		System.out.println(build.getFeedTitle());
		return build;
	}

}
