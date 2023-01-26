package com.ssafy.bundler.dto.feed.reqeust;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class CardUpdateRequestDto {
	@NotEmpty
	private String feedTitle;
	private String feedContent;

	@NotEmpty
	private Long categoryFirstId;
	private Long categorySecondId;

	private String cardDescription;
	private String cardCommentary;

}
