package com.ssafy.bundler.dto.bundle;

import java.util.List;

import com.ssafy.bundler.domain.Bundle;
import com.ssafy.bundler.domain.User;
import com.ssafy.bundler.dto.card.reqeust.CardSaveRequestDto;

import jakarta.validation.constraints.NotEmpty;
import lombok.Builder;
import lombok.Data;

@Data
public class BundleSaveRequestDto {

	@NotEmpty
	private Long userId;
	// private CardListSaveRequestDto cardListSaveRequestDto;

	private String feedType = "BUNDLE";

	private String bundleThumbnail;
	private String bundleThumbnailText;

	@NotEmpty
	private String feedTitle;
	@NotEmpty
	private String feedContent;

	private List<CardSaveRequestDto> cardSaveRequestDtoList;

	@Builder
	public BundleSaveRequestDto(Long userId, String bundleThumbnail, String bundleThumbnailText,
		String feedTitle, String feedContent) {
		this.userId = userId;
		this.bundleThumbnail = bundleThumbnail;
		this.bundleThumbnailText = bundleThumbnailText;
		this.feedTitle = feedTitle;
		this.feedContent = feedContent;
	}

	public Bundle toEntity(User writer) {
		return Bundle.builder()
			.writer(writer)
			.feedTitle(this.feedTitle)
			.feedContent(this.feedContent)
			.bundleThumbnail(this.bundleThumbnail)
			.bundleThumbnailText(this.bundleThumbnailText)
			.build();
	}
}
